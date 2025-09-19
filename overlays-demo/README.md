# Overlays Demo (React + Vite + TS)

Demonstração prática de Layers e Overlays com acessibilidade: Modal, Popover, Tooltip e Toast.

## 🚀 Deploy na Nuvem

Este projeto pode ser facilmente implantado em várias plataformas de cloud:

### Vercel (Recomendado)
1. Faça fork/clone deste repositório
2. Conecte sua conta Vercel ao GitHub
3. Importe o projeto selecionando a pasta `overlays-demo`
4. O deploy será automático! ✨

### Netlify  
1. Faça fork/clone deste repositório
2. Conecte sua conta Netlify ao GitHub
3. Selecione o repositório e defina:
   - **Base directory**: `overlays-demo`
   - **Build command**: `npm run build`
   - **Publish directory**: `overlays-demo/dist`

### GitHub Pages
1. Faça fork deste repositório
2. Vá em Settings > Pages
3. Selecione "GitHub Actions" como source
4. O workflow já está configurado - push para `main` fará o deploy automático

### Docker (Qualquer Cloud Provider)
```bash
# Build da imagem
docker build -t overlays-demo .

# Run local
docker run -p 8080:80 overlays-demo

# Ou use docker-compose
docker-compose up --build
```

### Deploy Manual (Build Static)
```bash
cd overlays-demo
npm install
npm run build:prod
# Upload da pasta 'dist' para qualquer hosting estático
```

## 💻 Desenvolvimento Local

### Rodar (Windows PowerShell)

```powershell
cd overlays-demo
npm install
npm run dev
```

### Rodar (Unix/Linux/Mac)

```bash
cd overlays-demo
npm install  
npm run dev
```

Abra a URL indicada (geralmente <http://localhost:5173>).

## 🧩 Componentes

- `Modal`: dialog acessível com backdrop, trap de foco, ESC e clique-fora.
- `Popover`: ancorado a um botão, fecha por ESC/clique-fora.
- `Tooltip`: aparece ao hover/foco; `aria-describedby` no anchor.
- `ToastRegion`/`useToast`: fila de toasts com `aria-live`.

## 🎨 Tokens e Z-Index

- Definidos em `src/styles/tokens.css` e usados em `src/styles/overlays.css`.

## 🌀 Portal

- Overlays renderizam em `#overlay-root` (ver `index.html`), isolando stacking context.

## 📦 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção  
- `npm run build:prod` - Build otimizado para deploy
- `npm run preview` - Preview do build local
- `npm run lint` - Verificar código
- `npm run test:e2e` - Testes E2E com Playwright
- `npm run docker:build` - Build da imagem Docker
- `npm run docker:run` - Run container local
- `npm run docker:up` - Docker compose
