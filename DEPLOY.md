# 🚀 Guia de Deploy na Nuvem

Este documento contém instruções passo-a-passo para implantar o projeto Overlays Demo em diferentes plataformas de cloud.

## 📋 Pré-requisitos

- Conta GitHub (gratuita)
- Fork ou clone deste repositório

## 🎯 Opções de Deploy

### 1. Vercel (Recomendado - Mais Fácil)

**Por que escolher:** Integração perfeita com React/Vite, SSL automático, CDN global

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique "New Project"
4. Selecione seu repositório
5. Configure:
   - **Root Directory**: `overlays-demo`
   - **Build Command**: `npm run build` (já detectado)
   - **Output Directory**: `dist` (já detectado)
6. Clique "Deploy"

✅ **Deploy automático a cada push!**

### 2. Netlify (Alternativa Excelente)

**Por que escolher:** Recursos avançados, forms, funções serverless

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique "New site from Git"
4. Selecione seu repositório
5. Configure:
   - **Base directory**: `overlays-demo`
   - **Build command**: `npm run build`
   - **Publish directory**: `overlays-demo/dist`
6. Clique "Deploy site"

✅ **Configuração automática via `netlify.toml`**

### 3. GitHub Pages (Gratuito)

**Por que escolher:** Totalmente gratuito, integrado ao GitHub

1. No seu repositório GitHub:
2. Vá em `Settings` > `Pages`
3. Source: "GitHub Actions"
4. O workflow já está configurado!

✅ **Deploy automático via Actions a cada push na branch main**

### 4. Railway (Para Apps Mais Complexos)

**Por que escolher:** Deploy de containers, banco de dados, escalabilidade

```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up
```

### 5. Digital Ocean App Platform

**Por que escolher:** Infraestrutura robusta, preços competitivos

1. Conecte sua conta GitHub
2. Selecione o repositório
3. Configure:
   - **Source Directory**: `overlays-demo`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 6. Docker (Qualquer Provedor)

**Por que escolher:** Máxima portabilidade, funciona em qualquer cloud

```bash
# Build local
docker build -t overlays-demo .
docker run -p 8080:80 overlays-demo

# Deploy em cloud providers:
# - Google Cloud Run
# - AWS ECS/Fargate  
# - Azure Container Instances
# - DigitalOcean Apps
```

## 🔧 Scripts Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build:prod

# Preview local do build
npm run preview

# Docker
npm run docker:build
npm run docker:run
```

## 🌐 Domínio Customizado

Após o deploy, você pode configurar um domínio personalizado:

- **Vercel**: Project Settings > Domains
- **Netlify**: Site Settings > Domain Management
- **GitHub Pages**: Settings > Pages > Custom domain

## 📊 Monitoramento

- **Vercel**: Analytics integrado
- **Netlify**: Analytics + Core Web Vitals
- **GitHub Pages**: GitHub Actions logs

## 🛠️ Troubleshooting

### Build falha?
```bash
cd overlays-demo
npm ci
npm run build:prod
```

### Rota não funciona?
- Verifique se o `base` no `vite.config.ts` está correto
- Para subdiretórios, ajuste a configuração

### Performance?
- Builds já incluem otimizações automáticas
- Compression automática (gzip/brotli)
- Tree shaking ativo

## 🚀 Deploy Recomendado por Uso

- **Protótipo rápido**: GitHub Pages
- **Produção profissional**: Vercel ou Netlify  
- **Enterprise**: Digital Ocean ou Railway
- **Máxima flexibilidade**: Docker + Cloud Provider