/**
 * Cifra los datos en claro de Otros Proyectos y genera el fichero que SÍ se sube al repo.
 *
 * Uso:
 *   1. Edita app/otros-proyectos/data.local.json (texto plano, gitignored)
 *   2. Ejecuta: node scripts/encrypt-otros-proyectos.mjs
 *   3. Sube al repo: app/otros-proyectos/data.enc.json (cifrado)
 *
 * Requiere OTROS_PROYECTOS_KEY (64 hex) en .env o .env.local.
 * Generar clave: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { createCipheriv, randomBytes } from 'node:crypto';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnvFile(path) {
  try {
    const content = readFileSync(path, 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!match) continue;
      let value = match[2];
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(match[1] in process.env)) process.env[match[1]] = value;
    }
  } catch {
    /* fichero no existe */
  }
}

loadEnvFile(resolve(root, '.env.local'));
loadEnvFile(resolve(root, '.env'));

const keyHex = process.env.OTROS_PROYECTOS_KEY;
if (!keyHex || !/^[0-9a-f]{64}$/i.test(keyHex)) {
  console.error('ERROR: OTROS_PROYECTOS_KEY no está definida o no tiene 64 caracteres hex.');
  console.error('Generar una nueva:');
  console.error('  node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"');
  process.exit(1);
}

const plainPath = resolve(root, 'app/otros-proyectos/data.local.json');
const outPath = resolve(root, 'app/otros-proyectos/data.enc.json');

let projects;
try {
  projects = JSON.parse(readFileSync(plainPath, 'utf8'));
} catch (err) {
  console.error(`ERROR: no se pudo leer/parsear ${plainPath}`);
  console.error(err.message);
  process.exit(1);
}

if (!Array.isArray(projects) || projects.length === 0) {
  console.error('ERROR: data.local.json debe ser un array no vacío de proyectos.');
  process.exit(1);
}

for (const [i, p] of projects.entries()) {
  const missing = ['title', 'url', 'description', 'tech'].filter(
    (k) => p[k] === undefined || p[k] === null
  );
  if (missing.length) {
    console.error(`ERROR: proyecto #${i + 1} le faltan campos: ${missing.join(', ')}`);
    process.exit(1);
  }
  if (!Array.isArray(p.tech)) {
    console.error(`ERROR: proyecto #${i + 1}: "tech" debe ser un array de strings.`);
    process.exit(1);
  }
}

const key = Buffer.from(keyHex, 'hex');
const iv = randomBytes(12);
const cipher = createCipheriv('aes-256-gcm', key, iv);
const encrypted = Buffer.concat([
  cipher.update(JSON.stringify(projects), 'utf8'),
  cipher.final(),
]);
const tag = cipher.getAuthTag();

const payload = {
  alg: 'aes-256-gcm',
  iv: iv.toString('base64'),
  tag: tag.toString('base64'),
  data: encrypted.toString('base64'),
};

writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(`OK: ${projects.length} proyecto(s) cifrados → app/otros-proyectos/data.enc.json`);
console.log('Este fichero SÍ se puede subir al repo (texto ilegible sin OTROS_PROYECTOS_KEY).');
