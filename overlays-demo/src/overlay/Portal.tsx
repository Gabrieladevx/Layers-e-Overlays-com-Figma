import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'

export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const container = useMemo(() => document.getElementById('overlay-root'), [])
  useEffect(() => setMounted(true), [])
  if (!mounted || !container) return null
  return createPortal(children, container)
}
