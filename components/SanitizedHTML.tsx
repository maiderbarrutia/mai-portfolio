import { sanitizeHtml } from '@/lib/sanitize'

interface SanitizedHTMLProps {
  html: string
  as?: 'span' | 'div' | 'p'
  className?: string
}

export function SanitizedHTML({ html, as: Tag = 'p', className }: SanitizedHTMLProps) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
    />
  )
}
