import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Portal } from './Portal'
import '../styles/overlays.css'

type ModalProps = {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export function Modal({ open, onClose, title = 'Dialog', children }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null)
  const titleId = useRef(`dlg-title-${Math.random().toString(36).slice(2)}`).current

  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    const el = ref.current
    document.body.classList.add('overlay-open')
    el?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusables = el?.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables || focusables.length === 0) return
        const list = Array.from(focusables).filter(n => !n.hasAttribute('disabled'))
        const first = list[0]
        const last = list[list.length - 1]
        if (document.activeElement === last && !e.shiftKey) { e.preventDefault(); first.focus() }
        else if (document.activeElement === first && e.shiftKey) { e.preventDefault(); last.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('overlay-open')
      document.removeEventListener('keydown', onKey)
      prev?.focus()
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <Portal>
      <div aria-hidden onClick={onClose} className="overlay-backdrop" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={ref}
        tabIndex={-1}
        className="overlay-center"
      >
        <div className="modal-surface">
          <div className="modal-content">
            <h2 id={titleId} className="no-margin-top">{title}</h2>
            <div>{children}</div>
            <div className="modal-actions">
              <button onClick={onClose}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
