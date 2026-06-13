import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  disconnectOnce?: boolean
}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { threshold = 0.1, disconnectOnce = true } = options ?? {}

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (disconnectOnce) observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, disconnectOnce])

  return { ref, isVisible }
}

export function useMultiInView<T extends HTMLElement = HTMLDivElement>(
  count: number,
  options?: { threshold?: number }
) {
  const refs = Array.from({ length: count }, () => useRef<T>(null))
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const { threshold = 0.15 } = options ?? {}

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.forEach((ref, i) => {
      if (!ref.current) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(i))
          }
        },
        { threshold }
      )
      observer.observe(ref.current)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold])

  return { refs, visibleItems }
}
