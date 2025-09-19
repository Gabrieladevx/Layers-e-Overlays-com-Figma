# Checklist Figma → Código (Overlays)

- Tokens de z-index mapeados: base, popover, tooltip, toast, modal
- Scrim: cor/opacidade definida e usada no backdrop
- Portal global: `#overlay-root` documentado e usado
- Modal: `aria-labelledby`, foco inicial, trap de foco, ESC/click fora, restore foco
- Popover: ancoragem, flip/shift em bordas, fecha por ESC/clique-fora
- Tooltip: `aria-describedby`, delays razoáveis, não captura foco
- Toast: `aria-live` e botão de fechar
- Motion: respeita `prefers-reduced-motion`
- Testes: foco, navegação por teclado, ESC, clique-fora
