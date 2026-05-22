# Transformatech

Site institucional da **Transformatech** — empresa de tecnologia especializada em **IoT**, **Robótica** e **Realidade Digital**. Desenvolvido com Astro, com suporte a múltiplos idiomas (PT 🇧🇷 · EN 🇺🇸 · ES 🇦🇷) e animações avançadas via GSAP.

---

## 🚀 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Astro](https://astro.build) | ^5.17 | Framework principal (SSG) |
| [GSAP](https://gsap.com) | ^3.14 | Animações e scroll-triggered effects |
| [Lenis](https://lenis.darkroom.engineering) | ^1.3 | Smooth scroll |
| [Embla Carousel](https://www.embla-carousel.com) | ^8.6 | Carrosseis interativos |
| [astro-icon](https://github.com/natemoo-re/astro-icon) | ^1.1 | Sistema de ícones SVG |
| [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) | ^4.3 | Conteúdo em Markdown/MDX (cases) |
| [Raleway](https://fonts.google.com/specimen/Raleway) | ^5.2 | Tipografia principal |
| Vanilla CSS | — | Estilização (sem frameworks CSS) |

---

## 📁 Estrutura do Projeto

```
transformatech/
├── public/                   # Arquivos estáticos (vídeos, favicons, etc.)
│   └── videos/               # Vídeos WebM usados nas animações das páginas
│       ├── iot/
│       ├── robotica/
│       └── realidade-digital/
├── src/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── buttons/          # Botões animados
│   │   ├── carroussel/       # Carrossel de workflow
│   │   ├── header/           # Navegação / Header
│   │   ├── Accordion.astro
│   │   ├── Badge.astro
│   │   ├── Counter.astro
│   │   ├── FaleConosco.astro # Formulário de contato (PT/EN/ES)
│   │   ├── Footer.astro
│   │   ├── SolucoesSection.astro
│   │   ├── TeamCard.astro
│   │   └── TestimonialsMarquee.astro
│   ├── content/              # Conteúdo MDX (cases / blog)
│   ├── i18n/                 # Helpers de internacionalização
│   │   ├── ui.ts             # Strings da UI por idioma
│   │   └── utils.ts          # Utilitários de rota i18n
│   ├── images/               # Imagens estáticas (WebP)
│   ├── icons/                # Ícones SVG customizados
│   ├── layouts/
│   │   └── Layout.astro      # Layout base (head, SEO, fontes)
│   ├── pages/
│   │   ├── index.astro       # Home (PT)
│   │   ├── sobre-nos.astro   # Sobre Nós (PT)
│   │   ├── solucoes.astro    # Soluções hub (PT)
│   │   ├── cases.astro       # Cases (PT)
│   │   ├── cases/[slug].astro # Case individual (PT)
│   │   ├── solucoes/
│   │   │   ├── iot.astro
│   │   │   ├── robotica.astro
│   │   │   └── realidade-digital.astro
│   │   ├── en/               # Versão em inglês
│   │   │   ├── index.astro
│   │   │   ├── about-us.astro
│   │   │   ├── solutions.astro
│   │   │   ├── cases.astro
│   │   │   └── solutions/
│   │   │       ├── iot.astro
│   │   │       ├── robotics.astro
│   │   │       └── digital-reality.astro
│   │   └── es/               # Versão em espanhol
│   │       ├── index.astro
│   │       ├── sobre-nosotros.astro
│   │       ├── soluciones.astro
│   │       ├── cases.astro
│   │       └── soluciones/
│   │           ├── iot.astro
│   │           ├── robotica.astro
│   │           └── realidad-digital.astro
│   └── styles/
│       ├── global.css        # Reset e estilos base
│       ├── variables.css     # Design tokens (cores, espaçamentos)
│       └── pages/            # CSS por página (iot.css, robotica.css, etc.)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🌐 Rotas e Idiomas

O site suporta 3 idiomas com rotas separadas:

| Idioma | Prefixo | Exemplo |
|---|---|---|
| Português (padrão) | `/` | `/solucoes/iot` |
| Inglês | `/en/` | `/en/solutions/iot` |
| Espanhol | `/es/` | `/es/soluciones/iot` |

---

## 📄 Páginas

| Página | Descrição |
|---|---|
| **Home** | Apresentação da empresa, serviços e CTA |
| **Soluções** | Hub das 3 soluções principais |
| **IoT** | Página detalhada de Internet das Coisas com scroll animations |
| **Robótica** | Página de soluções em robótica |
| **Realidade Digital** | Página de realidade aumentada/virtual |
| **Cases** | Portfólio de cases com rotas dinâmicas via MDX |
| **Sobre Nós** | Apresentação da equipe e valores |

---

## ⚙️ Comandos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento (localhost:4321)
npm run dev

# Gerar build de produção
npm run build

# Pré-visualizar o build
npm run preview
```

---

## ✨ Destaques Técnicos

- **Scroll animations:** Animações de parallax e pin com GSAP ScrollTrigger em todas as páginas de solução
- **Globo IoT animado:** Vídeo WebM com máscara CSS e animação GSAP responsiva por breakpoint (`matchMedia`)
- **Smooth scroll:** Integração com Lenis para rolagem suave em toda a aplicação
- **SSG puro:** Sem servidor — todas as páginas são geradas estaticamente
- **Sem framework CSS:** Estilização 100% em Vanilla CSS com design tokens em `variables.css`
- **i18n manual:** Sistema de internacionalização próprio sem dependências externas

---

## 🛠️ Requisitos

- **Node.js** >= 18
- **npm** >= 9

---

## 📦 Deploy

O projeto gera arquivos estáticos via `npm run build` (pasta `dist/`), compatível com qualquer CDN ou serviço de hospedagem estática:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)
