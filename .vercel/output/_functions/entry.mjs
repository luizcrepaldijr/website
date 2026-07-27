import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_9nkkdxPH.mjs';
import { manifest } from './manifest_BjE41RdB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/cases/_slug_.astro.mjs');
const _page3 = () => import('./pages/cases.astro.mjs');
const _page4 = () => import('./pages/en/about-us.astro.mjs');
const _page5 = () => import('./pages/en/cases/_slug_.astro.mjs');
const _page6 = () => import('./pages/en/cases.astro.mjs');
const _page7 = () => import('./pages/en/solutions/digital-reality.astro.mjs');
const _page8 = () => import('./pages/en/solutions/iot.astro.mjs');
const _page9 = () => import('./pages/en/solutions/robotics.astro.mjs');
const _page10 = () => import('./pages/en/solutions.astro.mjs');
const _page11 = () => import('./pages/en.astro.mjs');
const _page12 = () => import('./pages/es/casos/_slug_.astro.mjs');
const _page13 = () => import('./pages/es/casos.astro.mjs');
const _page14 = () => import('./pages/es/sobre-nosotros.astro.mjs');
const _page15 = () => import('./pages/es/soluciones/iot.astro.mjs');
const _page16 = () => import('./pages/es/soluciones/realidad-digital.astro.mjs');
const _page17 = () => import('./pages/es/soluciones/robotica.astro.mjs');
const _page18 = () => import('./pages/es/soluciones.astro.mjs');
const _page19 = () => import('./pages/es.astro.mjs');
const _page20 = () => import('./pages/sobre-nos.astro.mjs');
const _page21 = () => import('./pages/solucoes/iot.astro.mjs');
const _page22 = () => import('./pages/solucoes/realidade-digital.astro.mjs');
const _page23 = () => import('./pages/solucoes/robotica.astro.mjs');
const _page24 = () => import('./pages/solucoes.astro.mjs');
const _page25 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/cases/[slug].astro", _page2],
    ["src/pages/cases.astro", _page3],
    ["src/pages/en/about-us.astro", _page4],
    ["src/pages/en/cases/[slug].astro", _page5],
    ["src/pages/en/cases.astro", _page6],
    ["src/pages/en/solutions/digital-reality.astro", _page7],
    ["src/pages/en/solutions/iot.astro", _page8],
    ["src/pages/en/solutions/robotics.astro", _page9],
    ["src/pages/en/solutions.astro", _page10],
    ["src/pages/en/index.astro", _page11],
    ["src/pages/es/casos/[slug].astro", _page12],
    ["src/pages/es/casos.astro", _page13],
    ["src/pages/es/sobre-nosotros.astro", _page14],
    ["src/pages/es/soluciones/iot.astro", _page15],
    ["src/pages/es/soluciones/realidad-digital.astro", _page16],
    ["src/pages/es/soluciones/robotica.astro", _page17],
    ["src/pages/es/soluciones.astro", _page18],
    ["src/pages/es/index.astro", _page19],
    ["src/pages/sobre-nos.astro", _page20],
    ["src/pages/solucoes/iot.astro", _page21],
    ["src/pages/solucoes/realidade-digital.astro", _page22],
    ["src/pages/solucoes/robotica.astro", _page23],
    ["src/pages/solucoes.astro", _page24],
    ["src/pages/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d41d91e2-35ed-418b-9816-a8ea032dd830",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
