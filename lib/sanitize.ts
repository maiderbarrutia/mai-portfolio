import sanitize from 'sanitize-html'

const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span', 'ul', 'ol', 'li', 'code', 'pre']
const ALLOWED_ATTR = ['href', 'target', 'rel', 'class']

export function sanitizeHtml(html: string): string {
  try {
    return sanitize(html, {
      allowedTags: ALLOWED_TAGS,
      allowedAttributes: { a: ALLOWED_ATTR, span: ['class'] },
      allowedSchemes: ['http', 'https', 'mailto'],
      allowedSchemesByTag: { a: ['http', 'https', 'mailto'] },
    })
  } catch {
    return html.replace(/<[^>]*>/g, '')
  }
}
