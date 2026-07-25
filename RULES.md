# REGRAS DO PROJETO & POST-MORTEM DE BUGS (TRANSFORMATECH)

> **DOCUMENTO DE REGRAS MANDATÓRIAS DE DESENVOLVIMENTO**
> Este documento registra o mapeamento de todos os bugs que causaram quebras no layout global e nas páginas de IoT (PT, EN, ES), e estabelece as regras técnicas universais para evitar regressões futuros no projeto.

---

## 📌 MAPEAMENTO DOS BUGS QUE QUEBRARAM AS PÁGINAS

### Bug 1: Fechamento Precoce da Tag `<Layout>`
- **Causa:** Nas páginas de IoT em Inglês (`/en/solutions/iot.astro`) e Espanhol (`/es/soluciones/iot.astro`), a tag `</Layout>` estava fechada precocemente no meio do arquivo (por volta da linha 210, após o footer do LoRaWAN).
- **Consequência:** As abas globais (`iot-global-tabs`), os painéis animados do GSAP e o script `<script>` do cliente ficaram renderizados **fora** da estrutura do layout. Isso quebrou os estilos CSS globais, impediu a injeção do Footer e corrompeu a execução dos scripts de animação.
- **Regra:** A tag `</Layout>` **DEVE SER SEMPRE A ÚLTIMA LINHA DE QUALQUER PÁGINA ASTRO**. 100% do HTML e dos scripts da página devem ficar contidos dentro de `<Layout>`.

---

### Bug 2: Desativação do Header Sticky por `overflow-x: hidden` na raiz
- **Causa:** No CSS global (`global.css`) e no CSS da página de IoT (`iot.css`), foi aplicado `overflow-x: hidden;` na tag `html` e `body`. Em todos os navegadores modernos (Chrome, Firefox, Safari), declarar `overflow-x: hidden` no `html`/`body` cria um contêiner de rolagem de contexto, o que **desativa completamente** o funcionamento do `position: sticky` em elementos filhos (como o `<header>`).
- **Consequência:** O header rolava para fora da tela junto com o fluxo do documento. Ao rolar para cima, o JavaScript removia a classe `.header-hidden`, mas como o `sticky` tinha quebrado, o header continuava estático na coordenada `y=0` no topo do documento (fora da área de visão do usuário).
- **Regra:**
  1. O `<header>` **DEVE USAR** `position: fixed; top: 0; left: 0; right: 0; z-index: 99999;` acompanhado pela `<div class="header-spacer"></div>` para garantir 100% de alinhamento no viewport independente de GSAP pinning, Lenis ou estruturas de contêineres.
  2. Use **SEMPRE** `overflow-x: clip;` em vez de `overflow-x: hidden;` no `html` e `body`. O `overflow-x: clip` corta vazamentos horizontais **sem criar contêineres de scroll** que quebrem elementos fixos/pegajosos.

---

### Bug 3: Estouro de Largura do Viewport por uso de `width: 100vw`
- **Causa:** Elementos como linhas separadoras e contêineres usavam `width: 100vw`.
- **Consequência:** O valor `100vw` inclui a largura da barra de rolagem vertical padrão do navegador (~15 a 17px no Windows/Linux). Isso fazia o elemento estourar a tela em ~17px, gerando barra de rolagem horizontal indesejada e uma margem/espaço escuro no canto direito.
- **Regra:** **NUNCA** use `width: 100vw` em contêineres normais. Use `width: 100%; max-width: 100%;`. Pseudo-elementos decorativos que utilizem `100vw` para linhas edge-to-edge devem obrigatoriamente estar protegidos por `overflow-x: clip;` na raiz.

---

### Bug 4: Travamento de Largura Mínima no `.container-boxed`
- **Causa:** O `.container-boxed` usava `width: clamp(1100px, 90%, 1620px);` sem a propriedade `max-width: 100%;`.
- **Consequência:** Em telas de laptops e tablets com resolução entre 801px e 1180px, o contêiner forçava uma largura mínima de 1100px (+ 40px de padding), fazendo o conteúdo transbordar lateralmente.
- **Regra:** O `.container-boxed` **DEVE SEMPRE** ser definido com dimensionamento fluido e limite de 100%:
  ```css
  .container-boxed {
      width: clamp(300px, 90%, 1620px);
      max-width: 100%;
      margin-inline: auto;
      padding-inline: clamp(15px, 4vw, 40px);
  }
  ```

---

### Bug 5: Conflito de Ciclo de Vida dos Scripts GSAP e Lenis
- **Causa:** O plugin `ScrollTrigger` do GSAP com `pin: true` gera elementos pin-spacers ao redor dos blocos fixados (como a seção `.iot-hero`). Ao trocar de abas na página de IoT ou reinicializar animações, se os scripts escutassem `DOMContentLoaded` que já havia disparado, a inicialização falhava silenciosamente.
- **Regra:**
  1. Scripts com lógica de carregamento devem verificar se o documento já está carregado (`document.readyState === "complete"`) além do listener de `DOMContentLoaded`.
  2. Ao alternar abas ou reinicializar animações GSAP, use callbacks duplos em `requestAnimationFrame` para permitir que os pin-spacers do GSAP sejam descalculados antes do recálculo do layout.

---

## 🛠️ CHECKLIST DE VALIDAÇÃO MANDATÓRIA (RODAR ANTES DE CADA COMMIT)

Antes de finalizar qualquer tarefa no projeto:
1. [ ] Rodar `npm run build` e confirmar compilação com 0 erros.
2. [ ] Garantir que a tag `</Layout>` é a última linha de todos os arquivos em `src/pages/`.
3. [ ] Testar a rolagem da página para cima e confirmar que o Header reaparece imediatamente.
4. [ ] Verificar se as páginas de IoT em PT (`/solucoes/iot`), EN (`/en/solutions/iot`) e ES (`/es/soluciones/iot`) estão 100% funcionais.
