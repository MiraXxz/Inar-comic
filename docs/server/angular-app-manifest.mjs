
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Inar-comic/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Inar-comic/home",
    "route": "/Inar-comic"
  },
  {
    "renderMode": 2,
    "route": "/Inar-comic/home"
  },
  {
    "renderMode": 2,
    "route": "/Inar-comic/chaptersList"
  },
  {
    "renderMode": 2,
    "route": "/Inar-comic/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28122, hash: 'a99f458c453e0f0c238175c96e09ec901bdf73f4d0b7953bce304ec0fdc84cb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17281, hash: '20d59018491a2289a4ce5baaac6f0bbe2df6d59cc04ef3ef80718bb3a5682887', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 51688, hash: '2c38ec4d2b9cf70003077170b30ac5412a72304d2293e500b4bac34e206ff028', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'chaptersList/index.html': {size: 47792, hash: '850462d3f7738a12b3656b31074dd485b3090d43e20208a1f011d96f2deb026f', text: () => import('./assets-chunks/chaptersList_index_html.mjs').then(m => m.default)},
    'styles-JQDI4U5L.css': {size: 238042, hash: 'LL8O8f0/ZeQ', text: () => import('./assets-chunks/styles-JQDI4U5L_css.mjs').then(m => m.default)}
  },
};
