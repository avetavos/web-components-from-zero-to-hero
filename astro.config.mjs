// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. Update `site` to your GitHub username and `base`
  // to your repo name if they differ.
  site: 'https://avetavos.github.io',
  base: '/web-components-from-zero-to-hero',
  output: 'static',
  integrations: [starlight({
      title: 'Web Components — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/web-components-from-zero-to-hero/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/web-components-from-zero-to-hero/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/web-components-from-zero-to-hero/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/web-components-from-zero-to-hero/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#059669' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "Web Components" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/web-components-from-zero-to-hero/sw.js',{scope:'/web-components-from-zero-to-hero/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/web-components-from-zero-to-hero' }],
      sidebar: [
        { label: 'Intro & Custom Elements', items: [{ autogenerate: { directory: 'intro-custom-elements' } }] },
        { label: 'Lifecycle Callbacks', items: [{ autogenerate: { directory: 'lifecycle' } }] },
        { label: 'Shadow DOM', items: [{ autogenerate: { directory: 'shadow-dom' } }] },
        { label: 'Templates & Slots', items: [{ autogenerate: { directory: 'templates-slots' } }] },
        { label: 'Styling', items: [{ autogenerate: { directory: 'styling' } }] },
        { label: 'Attributes, Properties & Events', items: [{ autogenerate: { directory: 'attributes-properties-events' } }] },
        { label: 'Patterns & Composition', items: [{ autogenerate: { directory: 'patterns-composition' } }] },
        { label: 'Lit & Tooling', items: [{ autogenerate: { directory: 'lit-and-tooling' } }] },
      ],
      }), preact()],
});
