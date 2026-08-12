# Transformatech

Site institucional da Transformatech, empresa de tecnologia especializada em Internet das Coisas (IoT), Robótica e Realidade Digital. O projeto foi desenvolvido utilizando o framework **Astro** com geração de site estático (SSG), rotas de API Serverless via adaptador **Vercel**, animações avançadas por meio do **GSAP** e suporte nativo a múltiplos idiomas (PT, EN, ES).

---

## Stack Técnica

* **Framework Principal**: Astro (^5.17)
* **Adaptador de Deploy**: `@astrojs/vercel` (^8.2) com suporte a rotas Serverless (`/api/contact`)
* **Animações**: GSAP (^3.14) com ScrollTrigger
* **Rolagem Suave**: Lenis (^1.3)
* **Carrosséis**: Embla Carousel (^8.6) com Autoplay (`embla-carousel-autoplay`)
* **Iconografia**: `astro-icon` (^1.1) e `phosphor-astro` (^2.1) para renderização de ícones e SVGs
* **Backend & Envio de E-mails**: API Resend (`resend` ^6.18)
* **Processamento de Conteúdo**: MDX (`@astrojs/mdx` ^4.3) para publicação de cases dinâmicos
* **Tipografia**: Raleway via `@fontsource/raleway`
* **Estilização**: Vanilla CSS (sem frameworks adicionais de CSS, com suporte nativo a nesting)

---

## Estrutura do Projeto

```
transformatech/
├── public/                     # Arquivos estáticos expostos diretamente
│   └── videos/                 # Vídeos WebM otimizados para animações de fundo
│       ├── iot/
│       ├── robotica/
│       └── realidade-digital/
├── src/
│   ├── assets/                 # Recursos de imagem e mídias internas do Astro
│   ├── components/             # Componentes da aplicação
│   │   ├── buttons/            # Botões customizados com animações específicas
│   │   ├── carroussel/         # Carrosséis de workflow e cases
│   │   ├── header/             # Barra de navegação e seletores de idioma
│   │   ├── Accordion.astro     # Componente genérico de sanfona
│   │   ├── Badge.astro         # Badge visual padrão
│   │   ├── Badge2.astro        # Variação alternativa de badge
│   │   ├── BadgeFlag.astro     # Badge com indicador visual de bandeiras/idiomas
│   │   ├── ContactModal.astro  # Modal global interativo de contato e solicitação de orçamento
│   │   ├── Counter.astro       # Contador numérico animado
│   │   ├── FaleConosco.astro   # Seção de contato padrão em Português
│   │   ├── FaleConoscoEn.astro # Seção de contato padrão em Inglês
│   │   ├── FaleConoscoEs.astro # Seção de contato padrão em Espanhol
│   │   ├── FaleConoscoBig.astro# Seção de contato estendida em Português
│   │   ├── FaleConoscoBigEn.astro # Seção de contato estendida em Inglês
│   │   ├── FaleConoscoBigEs.astro # Seção de contato estendida em Espanhol
│   │   ├── Footer.astro        # Rodapé em Português
│   │   ├── FooterEn.astro      # Rodapé em Inglês
│   │   ├── FooterEs.astro      # Rodapé em Espanhol
│   │   ├── ParceirosMarquee.astro  # Carrossel marquee de parceiros e clientes
│   │   ├── ScrollProgressBar.astro # Barra de progresso de rolagem no topo da página
│   │   ├── SolucoesSection.astro   # Seletor interativo de soluções em Português
│   │   ├── SolucoesSectionEn.astro # Seletor interativo de soluções em Inglês
│   │   ├── SolucoesSectionEs.astro # Seletor interativo de soluções em Espanhol
│   │   ├── TeamCard.astro      # Card de apresentação de membro do time
│   │   ├── TechIcon.astro      # Renderizador dinâmico de ícones de tecnologia
│   │   ├── TecnologiasMarquee.astro# Carrossel marquee de stack tecnológica
│   │   └── TestimonialsMarquee.astro # Área de depoimentos com efeito marquee
│   ├── content/                # Arquivos MDX para definição dos Cases por idioma
│   │   ├── cases/              # Collections dos cases (en/, es/, pt/)
│   │   └── config.ts           # Schema de validação Zod das coleções do Astro
│   ├── i18n/                   # Utilitários e dicionários de tradução
│   │   ├── ui.ts               # Dicionários de termos estáticos da interface
│   │   └── utils.ts            # Helpers de resolução de rotas e prefixos
│   ├── images/                 # Imagens estáticas em formato WebP
│   ├── icons/                  # Ícones SVG customizados utilizados pelo astro-icon
│   ├── layouts/
│   │   └── Layout.astro        # Layout básico e inicialização de scripts globais
│   ├── pages/                  # Estrutura de rotas da aplicação (PT por padrão)
│   │   ├── api/
│   │   │   └── contact.ts      # Endpoint Serverless para processar formulários via Resend
│   │   ├── en/                 # Rotas com prefixo /en/ (Inglês)
│   │   │   ├── cases/          # Rotas dinâmicas de cases em Inglês
│   │   │   ├── solutions/      # Subpáginas de soluções em Inglês
│   │   │   ├── about-us.astro  # Página Quem Somos em Inglês
│   │   │   ├── cases.astro     # Listagem de cases em Inglês
│   │   │   ├── index.astro     # Home em Inglês
│   │   │   └── solutions.astro # Visão geral de soluções em Inglês
│   │   ├── es/                 # Rotas com prefixo /es/ (Espanhol)
│   │   │   ├── casos/          # Rotas dinâmicas de cases em Espanhol
│   │   │   ├── soluciones/     # Subpáginas de soluções em Espanhol
│   │   │   ├── casos.astro     # Listagem de cases em Espanhol
│   │   │   ├── index.astro     # Home em Espanhol
│   │   │   ├── sobre-nosotros.astro # Página Quem Somos em Espanhol
│   │   │   └── soluciones.astro# Visão geral de soluções em Espanhol
│   │   ├── solucoes/           # Subpáginas específicas de soluções (PT)
│   │   ├── cases/              # Rotas dinâmicas de cases em Português
│   │   ├── cases.astro         # Listagem de cases em Português
│   │   ├── index.astro         # Home em Português
│   │   ├── sobre-nos.astro     # Página Quem Somos em Português
│   │   └── solucoes.astro      # Visão geral de soluções em Português
│   └── styles/                 # Diretório centralizador de estilos CSS
│       ├── components/         # CSS compartilhado por componentes multilíngues
│       │   ├── fale-conosco.css
│       │   ├── fale-conosco-big.css
│       │   ├── footer.css
│       │   └── solucoes-section.css
│       ├── pages/              # Estilos isolados por página (ex: iot.css, home.css)
│       ├── global.css          # Estilos gerais de reset e tipografia global
│       └── variables.css       # Tokens de design (paleta de cores, tipografia, breakpoints)
├── astro.config.mjs            # Configurações do Astro e integrações (MDX, Icon, Vercel)
├── package.json
└── tsconfig.json
```

---

## Variáveis de Ambiente (`.env`)

Para o correto funcionamento do envio de e-mails via modal/formulário de contato em ambiente de desenvolvimento ou produção, crie um arquivo `.env` na raiz do projeto contendo a sua API Key do Resend:

```env
RESEND_API_KEY=re_123456789...
```

---

## Arquitetura de Internacionalização (i18n)

O site adota uma abordagem de rotas estáticas explícitas para lidar com múltiplos idiomas. Cada página possui seu correspondente nos subdiretórios `src/pages/en/` e `src/pages/es/`.

### Roteamento e Idiomas Suportados

| Idioma | Prefixo na URL | Página Exemplo | Quem Somos | Cases |
|---|---|---|---|---|
| Português (Padrão) | `/` | `/solucoes/iot` | `/sobre-nos` | `/cases` |
| Inglês | `/en/` | `/en/solutions/iot` | `/en/about-us` | `/en/cases` |
| Espanhol | `/es/` | `/es/soluciones/iot` | `/es/sobre-nosotros` | `/es/casos` |

### Dicionários e Utilitários de Tradução

As definições de chaves estáticas estão centralizadas no arquivo `src/i18n/ui.ts`. Os utilitários em `src/i18n/utils.ts` disponibilizam helpers cruciais para o desenvolvimento:
* `getLangFromUrl(url)`: Analisa a URL atual e retorna o idioma ativo (`pt-br`, `en`, ou `es`).
* `useTranslations(lang)`: Retorna uma função de tradução estática baseada na chave fornecida no arquivo `ui.ts`.
* `useTranslatedPath(lang)`: Gera caminhos de navegação com os prefixos corretos para manter o usuário no idioma atual ao clicar em links.

---

## Gerenciamento de Estilos de Componentes

Para otimizar o fluxo de manutenção e evitar redundâncias no código, os componentes que possuem arquivos separados por idioma (`Footer.astro`, `FooterEn.astro`, `FooterEs.astro`, etc.) **não** devem conter blocos `<style>` declarados de forma individual dentro de cada arquivo Astro.

Os estilos são centralizados na pasta `src/styles/components/` e importados no bloco frontmatter (javascript/typescript) do Astro.

### Como funciona a importação de estilos

Exemplo de estrutura no topo do componente:
```astro
---
import { Image } from "astro:assets";
import { useTranslatedPath } from "../i18n/utils";
import "../styles/components/footer.css"; // Estilo unificado

const translatePath = useTranslatedPath("en");
---
<footer class="container">
    <!-- Estrutura HTML -->
</footer>
```

### Regras para Edição e Criação de Componentes

Ao realizar manutenção ou criar novos módulos na interface do site:

1. **Alterações Visuais**: Modifique apenas o arquivo correspondente em `src/styles/components/`. A alteração será propagada automaticamente para as versões em Português, Inglês e Espanhol do componente.
2. **Diferenças de Idioma na Estrutura**: Caso existam particularidades estruturais de texto ou tags específicas de um idioma no layout, manipule apenas as tags HTML do respectivo arquivo `.astro`, mantendo as mesmas classes CSS para garantir consistência visual.
3. **Novos Componentes Multilíngues**: Se criar um componente que precise ser duplicado para suportar diferentes estruturas de tradução:
   * Crie as versões correspondentes na pasta `src/components/` (ex: `MeuComponente.astro`, `MeuComponenteEn.astro`).
   * Crie um único arquivo CSS em `src/styles/components/meu-componente.css`.
   * Importe este arquivo CSS em todas as declarações Astro do componente.

---

## Procedimentos de Desenvolvimento

### Comandos Disponíveis

```bash
# Instalação das dependências do projeto
npm install

# Inicialização do servidor de desenvolvimento local (localhost:4321 por padrão)
npm run dev

# Compilação do site estático e funções serverless para ambiente de produção
npm run build

# Execução de um servidor local para testar a pasta dist compilada
npm run preview
```

### Requisitos do Sistema

* **Node.js**: Versão `>= 18`
* **npm**: Versão `>= 9`

---

## Deploy

O projeto utiliza o adaptador `@astrojs/vercel`. A execução de `npm run build` compila o site estático e as funções Serverless na pasta `dist/`. O deploy na Vercel pode ser realizado conectando diretamente o repositório GitHub ou utilizando o Vercel CLI.

---

## Gerenciamento de Conteúdo

Atualmente, o conteúdo dinâmico do site (como os cases de sucesso) é gerenciado de forma baseada em arquivos estáticos (File-based CMS) usando Astro Content Collections.

### Como Editar e Adicionar Novos Cases (Markdown/MDX)
1. **Localização**: Os arquivos de conteúdo estão localizados em `src/content/cases/` divididos pelas pastas de idiomas (`pt/`, `en/`, `es/`).
2. **Formato**: Cada case é um arquivo `.md` ou `.mdx` estruturado com um bloco de metadados no topo (Frontmatter), seguido do conteúdo da página em Markdown.
3. **Validação**: As propriedades do frontmatter são validadas pelo schema Zod configurado em `src/content/config.ts`.

---

## Sugestões para Evolução (Abordagem No-Code / Headless CMS)

Se houver a necessidade de permitir que pessoas não técnicas editem ou publiquem novos cases e páginas sem alterar código ou depender de deploys via Git, recomenda-se integrar um **Headless CMS**.

Seguem as alternativas mais indicadas para esta arquitetura Astro:

### 1. Tina CMS / Decap CMS (Baseados em Git)
* **Como funciona**: Funcionam como uma interface visual que edita diretamente os arquivos Markdown no seu repositório do GitHub.
* **Vantagens**: Não requerem um banco de dados externo ou servidor. O conteúdo continua salvo em arquivos no Git, mantendo o site estático e gratuito.
* **Recomendação**: Tina CMS é ideal para edição visual inline em tempo real no próprio navegador.

### 2. Sanity.io (Cloud-hosted Headless CMS)
* **Como funciona**: O conteúdo fica em uma plataforma cloud gerenciada pela Sanity. Através da integração com o Astro, os dados são consumidos via API (GraphQL/GROQ) em tempo de build.
* **Vantagens**: Interface extremamente customizável, excelente suporte para múltiplos idiomas nativos, edição colaborativa em tempo real e CDN global de mídias.
* **Recomendação**: Ótima escolha caso o volume de conteúdo cresça e seja necessário separar completamente o banco de dados de conteúdo do código fonte.

### 3. Directus / Strapi (Self-hosted ou Cloud)
* **Como funciona**: CMSs robustos que se conectam diretamente a um banco de dados SQL (PostgreSQL/MySQL) e fornecem APIs REST/GraphQL consumidas pelo Astro.
* **Vantagens**: Controle total sobre a infraestrutura de dados e banco relacional. Excelente para quando o site institucional necessita integrar-se a outros sistemas internos de TI.
* **Recomendação**: Recomendado caso a Transformatech já possua ou prefira manter a infraestrutura de servidores interna.
