# Overlays Demo (React + Vite + TS)

Demonstração prática de Layers e Overlays com acessibilidade: Modal, Popover, Tooltip e Toast.

## Rodar (Windows PowerShell)

```powershell
cd "c:\Users\gabri\OneDrive\Documentos\Layers e Overlays com Figma\overlays-demo"
npm install
npm run dev
```

## Componentes

- `Modal`: dialog acessível com backdrop, trap de foco, ESC e clique-fora.
- `Popover`: ancorado a um botão, fecha por ESC/clique-fora.
- `Tooltip`: aparece ao hover/foco; `aria-describedby` no anchor.
- `ToastRegion`/`useToast`: fila de toasts com `aria-live`.

## Tokens e Z-Index

- Definidos em `src/styles/tokens.css` e usados em `src/styles/overlays.css`.

## Portal

- Overlays renderizam em `#overlay-root` (ver `index.html`), isolando stacking context.
