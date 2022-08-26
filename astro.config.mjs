import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mephi.dev",
  trailingSlash: "ignore",
  integrations: [svelte(), tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed"
    }
  }
});