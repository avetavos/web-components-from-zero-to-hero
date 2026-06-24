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
