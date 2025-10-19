import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
//import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";
import icon from "astro-icon";
import { shield } from '@kindspells/astro-shield';

// https://astro.build/config
export default defineConfig({
  server: command => ({
    port: command === 'dev' ? 6000 : 5000
  }),
  site: "https://holgerpriess.com",
  integrations: [tailwind(), 
                //image({
                //  serviceEntryPoint: "@astrojs/image/sharp"
                //}),
                mdx(), 
                sitemap(), 
                critters(),
                icon(),
                shield({
                  sri: { enableStatic: false },
                }),]
});