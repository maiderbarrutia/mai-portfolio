export interface SlugPair {
  es: string
  en: string
}

const projectSlugs: SlugPair[] = [
  { es: 'aisiplan', en: 'aisiplan' },
  { es: 'ecommerce-y-branding', en: 'ecommerce-and-branding' },
  { es: 'portal-corporativo-de-gas', en: 'gas-corporate-portal' },
  { es: 'simulador-de-ventas-con-ia', en: 'ai-sales-simulator' },
  { es: 'portal-inmobiliario', en: 'real-estate-portal' },
  { es: 'portal-salud-digital', en: 'digital-health-portal' },
  { es: 'landing-gasnature', en: 'landing-gasnature' },
  { es: 'landing-tcs', en: 'landing-tcs' },
  { es: 'landing-traductor-itzulpen', en: 'landing-translator-itzulpen' },
  { es: 'web-araex', en: 'web-araex' },
  { es: 'piatto-ristorante', en: 'piatto-ristorante' },
  { es: 'revista-grafik', en: 'grafik-magazine' },
  { es: 'folleto-camara-comercio-bilbao', en: 'bilbao-chamber-of-commerce-brochure' },
  { es: 'folleto-colonias-2010', en: 'summer-camp-brochure-2010' },
  { es: 'optica-pop-eye', en: 'pop-eye-optics' },
  { es: 'pack-zensacion', en: 'zensacion-packaging' },
  { es: 'bodegas-ubide', en: 'ubide-winery' },
  { es: 'anuncios-publicitarios', en: 'print-advertisements' },
  { es: 'carteles-aste-nagusia-jazzaldia', en: 'aste-nagusia-jazzaldia-posters' },
]

const esToEn = new Map<string, string>()
const enToEs = new Map<string, string>()

for (const pair of projectSlugs) {
  esToEn.set(pair.es, pair.en)
  enToEs.set(pair.es, pair.es)
  enToEs.set(pair.en, pair.es)
}

export function getProjectSlug(currentSlug: string, targetLang: 'es' | 'en'): string | undefined {
  const esSlug = enToEs.get(currentSlug)
  if (!esSlug) return undefined
  return targetLang === 'en' ? esToEn.get(esSlug) : esSlug
}
