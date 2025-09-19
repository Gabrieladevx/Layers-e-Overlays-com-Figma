import { useState } from 'react'

export type Toast = { id: string; text: string }

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  function push(text: string) {
    const id = Math.random().toString(36).slice(2)
    setToasts(t => [...t, { id, text }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000)
  }
  return { toasts, push, remove: (id: string) => setToasts(t => t.filter(x => x.id !== id)) }
}
