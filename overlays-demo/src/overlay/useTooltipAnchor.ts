import { useRef } from 'react'

export function useTooltipAnchor<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  return ref
}
