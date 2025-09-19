import { Portal } from './Portal'
import '../styles/overlays.css'
import type { Toast } from './useToast'

export function ToastRegion({ toasts, remove }: { toasts: Toast[]; remove: (id: string) => void }) {
  return (
    <Portal>
      <div className="toast-region" aria-live="polite" aria-atomic="true">
        {toasts.map(t => (
          <div key={t.id} className="toast">
            <span>{t.text}</span>
            <button onClick={() => remove(t.id)} aria-label="Fechar">×</button>
          </div>
        ))}
      </div>
    </Portal>
  )
}
