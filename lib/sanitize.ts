import DOMPurify from 'isomorphic-dompurify'

const ALLOWED_TAGS = ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span', 'ul', 'ol', 'li', 'code', 'pre']
const ALLOWED_ATTR = ['href', 'target', 'rel', 'class']

export function sanitizeHtml(html: string): string {
  try {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS,
      ALLOWED_ATTR,
      ALLOWED_URI_REGEXP: /^(?:(?:https?:|mailto:))/i,
    })
  } catch {
    return html.replace(/<[^>]*>/g, '')
  }
}
