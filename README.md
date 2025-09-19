# Overlays Demo (React + Vite + TS)

Demonstração prática de Layers e Overlays com acessibilidade: Modal, Popover, Tooltip e Toast.

## 🚀 Deploy na Nuvem

Este projeto pode ser facilmente implantado em várias plataformas de cloud. Confira o [README completo](./overlays-demo/README.md) para instruções detalhadas.

### Opções Rápidas:
- **Vercel**: Conecte ao GitHub e importe a pasta `overlays-demo` 
- **Netlify**: Use as configurações em `netlify.toml`
- **GitHub Pages**: Ativado automaticamente via GitHub Actions
- **Docker**: Use `docker-compose up --build` na raiz

## 💻 Desenvolvimento Local

```bash
cd overlays-demo
npm install
npm run dev
```

## 🧩 Componentes

- `Modal`: dialog acessível com backdrop, trap de foco, ESC e clique-fora.
- `Popover`: ancorado a um botão, fecha por ESC/clique-fora.
- `Tooltip`: aparece ao hover/foco; `aria-describedby` no anchor.
- `ToastRegion`/`useToast`: fila de toasts com `aria-live`.

## 🎨 Tokens e Z-Index

- Definidos em `src/styles/tokens.css` e usados em `src/styles/overlays.css`.

## 🌀 Portal

- Overlays renderizam em `#overlay-root` (ver `index.html`), isolando stacking context.
