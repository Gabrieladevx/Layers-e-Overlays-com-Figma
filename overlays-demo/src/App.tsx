import { useRef, useState } from 'react'
import './App.css'
import { Modal } from './overlay/Modal'
import { Popover } from './overlay/Popover'
import { Tooltip } from './overlay/Tooltip'
import { useTooltipAnchor } from './overlay/useTooltipAnchor'
import { ToastRegion } from './overlay/Toast'
import { useToast } from './overlay/useToast'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const popoverButtonRef = useRef<HTMLButtonElement>(null)
  const tooltipAnchor = useTooltipAnchor<HTMLButtonElement>()
  const { toasts, push, remove } = useToast()

  return (
  <div className="page">
      <h1>Overlays Demo</h1>
      <p>Exemplos acessíveis de Modal, Popover, Tooltip e Toast.</p>

      <div className="row">
        <button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>

        <button
          ref={popoverButtonRef}
          onClick={() => setIsPopoverOpen(v => !v)}
          aria-expanded={isPopoverOpen ? 'true' : 'false'}
          aria-controls="demo-popover"
        >
          Alternar Popover
        </button>

        <button ref={tooltipAnchor}>Passe o mouse aqui</button>

        <button onClick={() => push('Operação concluída!')}>Mostrar Toast</button>
      </div>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Confirmação">
        Este é um modal acessível. Pressione ESC para fechar.
      </Modal>

      <Popover open={isPopoverOpen} anchorRef={popoverButtonRef} onClose={() => setIsPopoverOpen(false)}>
        <div id="demo-popover">
          Popover ancorado ao botão. Clique fora ou ESC para fechar.
        </div>
      </Popover>

      <Tooltip anchorRef={tooltipAnchor} text="Eu sou um tooltip" />

      <ToastRegion toasts={toasts} remove={remove} />
    </div>
  )
}

export default App
