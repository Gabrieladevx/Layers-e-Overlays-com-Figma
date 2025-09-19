import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Portal } from './Portal'
import '../styles/overlays.css'
import type { RefObject } from 'react'

type TooltipProps = {
  anchorRef: RefObject<HTMLElement | null>
  text: string
  open?: boolean
  delay?: number
}

export function Tooltip({ anchorRef, text, open: forcedOpen, delay = 400 }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const id = useRef(`tt-${Math.random().toString(36).slice(2)}`).current
  const timer = useRef<number | null>(null)

  useEffect(() => {
    const a = anchorRef.current
    if (!a) return
    const onEnter = () => {
      timer.current = window.setTimeout(() => setOpen(true), delay)
    }
    const onLeave = () => {
      if (timer.current) window.clearTimeout(timer.current)
      setOpen(false)
    }
    const onFocus = onEnter
    const onBlur = onLeave
    a.addEventListener('mouseenter', onEnter)
    a.addEventListener('mouseleave', onLeave)
    a.addEventListener('focus', onFocus)
    a.addEventListener('blur', onBlur)
    return () => {
      a.removeEventListener('mouseenter', onEnter)
      a.removeEventListener('mouseleave', onLeave)
      a.removeEventListener('focus', onFocus)
      a.removeEventListener('blur', onBlur)
    }
  }, [anchorRef, delay])

  useEffect(() => {
    if (!open && !forcedOpen) return
    const a = anchorRef.current
    if (!a) return
    const rect = a.getBoundingClientRect()
    setPos({ top: rect.top + window.scrollY - 8, left: rect.left + window.scrollX + rect.width / 2 })
  }, [open, forcedOpen, anchorRef])

  const visible = forcedOpen ?? open
  useEffect(() => {
    const a = anchorRef.current
    if (!a) return
    if (visible) a.setAttribute('aria-describedby', id)
    else a.removeAttribute('aria-describedby')
  }, [visible, anchorRef, id])

  const tipRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!visible) return
    const tip = tipRef.current
    if (!tip) return
    tip.style.setProperty('--tt-top', `${pos.top}px`)
    tip.style.setProperty('--tt-left', `${pos.left}px`)
  }, [visible, pos])

  if (!visible) return null

  return (
    <Portal>
      <div role="tooltip" id={id} className="tooltip" ref={tipRef}>
        {text}
      </div>
    </Portal>
  )
}
