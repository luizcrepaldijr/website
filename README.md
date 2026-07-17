# Transformatech

Site institucional da Transformatech, empresa de tecnologia especializada em Internet das Coisas (IoT), Robotica e Realidade Digital. O projeto foi desenvolvido utilizando o framework Astro, com geracao de site estatico (SSG), animacoes avancadas por meio do GSAP e suporte nativo a multiplos idiomas (PT, EN, ES).

---

## Stack Tecnica

* **Framework Principal**: Astro (^5.17)
* **Animacoes**: GSAP (^3.14) com ScrollTrigger
* **Rolagem Suave**: Lenis (^1.3)
* **Carrosseis**: Embla Carousel (^8.6)
* **Iconografia**: astro-icon (^1.1) para renderizacao de SVGs inline
* **Processamento de Conteudo**: MDX (@astrojs/mdx ^4.3) para publicacao de cases dinamicos
* **Tipografia**: Raleway via @fontsource
* **Estilizacao**: Vanilla CSS (sem frameworks adicionais de CSS, com suporte nativo a nesting)

---

## Estrutura do Projeto

```
transformatech/
├── public/                     # Arquivos estaticos expostos diretamente
│   └── videos/                 # Videos WebM otimizados para animacoes de fundo
│       ├── iot/
│       ├── robotica/
│       └── realidade-digital/
├── src/
│   ├── components/             # Componentes da aplicacao
│   │   ├── buttons/            # Botoes customizados com animacoes especificas
│   │   ├── carroussel/         # Carrosseis de workflow e cases
│   │   ├── header/             # Barra de navegacao e seletores de idioma
│   │   ├── Accordion.astro     # Componente generico de sanfona
│   │   ├── Badge.astro
│   │   ├── Counter.astro       # Contador numerico animado
│   │   ├── FaleConosco.astro   # Secao de contato em Portugues
│   │   ├── FaleConoscoEn.astro # Secao de contato em Ingles
│   │   ├── FaleConoscoEs.astro # Secao de contato em Espanhol
│   │   ├── Footer.astro        # Rodape em Portugues
│   │   ├── FooterEn.astro      # Rodape em Ingles
│   │   ├── FooterEs.astro      # Rodape em Espanhol
│   │   ├── SolucoesSection.astro    # Seletor interativo de solucoes em Portugues
│   │   ├── SolucoesSectionEn.astro  # Seletor interativo de solucoes em Ingles
│   │   ├── SolucoesSectionEs.astro  # Seletor interativo de solucoes em Espanhol
│   │   ├── TeamCard.astro      # Card de apresentacao de membro do time
│   │   └── TestimonialsMarquee.astro# Area de depoimentos com efeito marquee
│   ├── content/                # Arquivos MDX para definicao dos Cases
│   ├── i18n/                   # Utilitarios e dicionarios de traducao
│   │   ├── ui.ts               # Dicionarios de termos estaticos da interface
│   │   └── utils.ts            # Helpers de resolucao de rotas e prefixos
│   ├── images/                 # Imagens estaticas em formato WebP
│   ├── icons/                  # Icones SVG customizados utilizados pelo astro-icon
│   ├── layouts/
│   │   └── Layout.astro        # Layout basico e inicializacao de scripts globais
│   ├── pages/                  # Estrutura de rotas da aplicacao (PT por padrao)
│   │   ├── en/                 # Rotas com prefixo /en/ (Ingles)
│   │   ├── es/                 # Rotas com prefixo /es/ (Espanhol)
│   │   └── solucoes/           # Subpaginas especificas de cada vertical tecnologica
│   └── styles/                 # Diretório centralizador de estilos CSS
│       ├── components/         # CSS compartilhado por componentes multilingues (Novo)
│       │   ├── fale-conosco.css
│       │   ├── fale-conosco-big.css
│       │   ├── footer.css
│       │   └── solucoes-section.css
│       ├── pages/              # Estilos isolados por pagina (ex: iot.css, home.css)
│       ├── global.css          # Estilos gerais de reset e tipografia global
│       └── variables.css       # Tokens de design (paleta de cores, tipografia, breakpoints)
├── astro.config.mjs            # Configuracoes do Astro e integracoes (MDX, Icon)
├── package.json
└── tsconfig.json
```

---

## Arquitetura de Internacionalizacao (i18n)

O site adota uma abordagem de rotas estaticas explicitas para lidar com multiplos idiomas. Cada pagina ou estrutura possui seu correspondente dentro de subdiretorios especificos (`src/pages/en/` e `src/pages/es/`).

### Roteamento e Idiomas Suportados

| Idioma | Prefixo na URL | Pagina Exemplo |
|---|---|---|
| Portugues (Padrao) | `/` | `/solucoes/iot` |
| Ingles | `/en/` | `/en/solutions/iot` |
| Espanhol | `/es/` | `/es/soluciones/iot` |

### Dicionarios e Utilitarios de Traducao

As definicoes de chaves estaticas estao centralizadas no arquivo `src/i18n/ui.ts`. Os utilitarios em `src/i18n/utils.ts` disponibilizam helpers cruciais para o desenvolvimento:
* `getLangFromUrl(url)`: Analisa a URL atual e retorna o idioma ativo (`pt-br`, `en`, ou `es`).
* `useTranslations(lang)`: Retorna uma funcao de traducao estatica baseada na chave fornecida no arquivo `ui.ts`.
* `useTranslatedPath(lang)`: Gera caminhos de navegacao com os prefixos corretos para manter o usuario no idioma atual ao clicar em links.

---

## Gerenciamento de Estilos de Componentes

Para otimizar o fluxo de manutencao e evitar redundancias no codigo, os componentes que possuem arquivos separados por idioma (`Footer.astro`, `FooterEn.astro`, `FooterEs.astro`, etc.) **nao** devem conter blocos `<style>` declarados de forma individual dentro de cada arquivo Astro.

Os estilos sao centralizados na pasta `src/styles/components/` e importados no bloco frontmatter (javascript/typescript) do Astro.

### Como funciona a importacao de estilos

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

### Regras para Edicao e Criacao de Componentes

Ao realizar manutencao ou criar novos modulos na interface do site:

1. **Alteracoes Visuais**: Modifique apenas o arquivo correspondente em `src/styles/components/`. A alteracao sera propagada automaticamente para as versoes em Portugues, Ingles e Espanhol do componente.
2. **Diferencas de Idioma na Estrutura**: Caso existam particularidades estruturais de texto ou tags especificas de um idioma no layout, manipule apenas as tags HTML do respectivo arquivo `.astro`, mantendo as mesmas classes CSS para garantir consistencia visual.
3. **Novos Componentes Multilingues**: Se criar um componente que precise ser duplicado para suportar diferentes estruturas de traducao:
   * Crie as versoes correspondentes na pasta `src/components/` (ex: `MeuComponente.astro`, `MeuComponenteEn.astro`).
   * Crie um unico arquivo CSS em `src/styles/components/meu-componente.css`.
   * Importe este arquivo CSS em todas as declaracoes Astro do componente.

---

## Procedimentos de Desenvolvimento

### Comandos Disponiveis

```bash
# Instalacao das dependencias do projeto
npm install

# Inicializacao do servidor de desenvolvimento local (localhost:4321 por padrao)
npm run dev

# Compilacao do site estatico para ambiente de producao
npm run build

# Execucao de um servidor local para testar a pasta dist compilada
npm run preview
```

### Requisitos do Sistema

* **Node.js**: Versao `>= 18`
* **npm**: Versao `>= 9`

---

## Deploy

A execucao de `npm run build` cria a pasta `dist/` contendo arquivos estaticos (HTML, CSS, JS e ativos de midia) altamente otimizados. Esta pasta pode ser hospedada em qualquer servico de CDN ou hospedagem estatica como Vercel, Netlify, Cloudflare Pages ou GitHub Pages.

---

## Gerenciamento de Conteudo

Atualmente, o conteudo dinamico do site (como os cases de sucesso) e gerenciado de forma baseada em arquivos estaticos (File-based CMS) usando Astro Content Collections.

### Como Editar e Adicionar Novos Cases (Markdown/MDX)
1. **Localizacao**: Os arquivos de conteudo estao localizados em `src/content/cases/`.
2. **Formato**: Cada case e um arquivo `.md` ou `.mdx` estruturado com um bloco de metadados no topo (Frontmatter), seguido do conteudo da pagina em Markdown.
3. **Traducao de Conteudo**: Para manter a paridade com o roteamento i18n, utilize arquivos separados para cada idioma ou configure campos especificos de traducao dentro do frontmatter do arquivo MDX.

---

## Sugestoes para Evolucao (Abordagem No-Code / Headless CMS)

Se houver a necessidade de permitir que pessoas nao tecnicas editem ou publiquem novos cases e paginas sem alterar codigo ou depender de deploys via Git, recomenda-se integrar um **Headless CMS**.

Seguem as alternativas mais indicadas para esta arquitetura Astro:

### 1. Tina CMS / Decap CMS (Baseados em Git)
* **Como funciona**: Funcionam como uma interface visual que edita diretamente os arquivos Markdown no seu repositorio do GitHub.
* **Vantagens**: Nao requerem um banco de dados externo ou servidor. O conteudo continua salvo em arquivos no Git, mantendo o site estatico e gratuito.
* **Recomendacao**: Tina CMS e ideal para edicao visual inline em tempo real no proprio navegador.

### 2. Sanity.io (Cloud-hosted Headless CMS)
* **Como funciona**: O conteudo fica em uma plataforma cloud gerenciada pela Sanity. Atraves da integracao com o Astro, os dados sao consumidos via API (GraphQL/GROQ) em tempo de build.
* **Vantagens**: Interface extremamente customizavel, excelente suporte para multiplos idiomas nativos, edicao colaborativa em tempo real e CDN global de midias.
* **Recomendacao**: Otima escolha caso o volume de conteudo cresca e seja necessario separar completamente o banco de dados de conteudo do codigo fonte.

### 3. Directus / Strapi (Self-hosted ou Cloud)
* **Como funciona**: CMSs robustos que se conectam diretamente a um banco de dados SQL (PostgreSQL/MySQL) e fornecem APIs REST/GraphQL consumidas pelo Astro.
* **Vantagens**: Controle total sobre a infraestrutura de dados e banco relacional. Excelente para quando o site institucional necessita integrar-se a outros sistemas internos de TI.
* **Recomendacao**: Recomendado caso a Transformatech ja possua ou prefira manter a infraestrutura de servidores interna.

