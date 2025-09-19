import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Portal } from './Portal'
import '../styles/overlays.css'
import type { RefObject } from 'react'

type PopoverProps = {
  open: boolean
  anchorRef: RefObject<HTMLElement | null>
  onClose: () => void
  children: ReactNode
}

export function Popover({ open, anchorRef, onClose, children }: PopoverProps) {
  const popRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 })

  useLayoutEffect(() => {
    if (!open) return
    const a = anchorRef.current
    const p = popRef.current
    if (!a || !p) return
    const rect = a.getBoundingClientRect()
    const vw = window.innerWidth
    const vh = window.innerHeight

    // Posição padrão abaixo do anchor
    let top = rect.bottom + window.scrollY + 8
    let left = rect.left + window.scrollX

    // Dimensões estimadas (antes de render) — fallback para largura mínima
    const estimatedWidth = p.offsetWidth || 260
    const estimatedHeight = p.offsetHeight || 80

    // Flip vertical se exceder a viewport inferior
    if (rect.bottom + estimatedHeight + 16 > vh) {
      top = rect.top + window.scrollY - estimatedHeight - 8
    }
    // Shift horizontal para manter na viewport
    const maxLeft = vw - estimatedWidth - 8
    if (left > maxLeft) left = Math.max(8, maxLeft)
    if (left < 8) left = 8

    setPos({ top, left })
  }, [open, anchorRef])

  useLayoutEffect(() => {
    if (!open) return
    const p = popRef.current
    if (!p) return
    p.style.setProperty('--pop-top', `${pos.top}px`)
    p.style.setProperty('--pop-left', `${pos.left}px`)
  }, [open, pos])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    const onClick = (e: MouseEvent) => {
      const a = anchorRef.current
      const p = popRef.current
      if (!p) return
      if (p.contains(e.target as Node) || a?.contains(e.target as Node)) return
      onClose()
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open, onClose, anchorRef])

  if (!open) return null

  return (
    <Portal>
      <div
        role="dialog"
        aria-modal="false"
        ref={popRef}
        className="popover modal-surface"
      >
        <div className="modal-content">
          {children}
        </div>
      </div>
    </Portal>
  )
}
