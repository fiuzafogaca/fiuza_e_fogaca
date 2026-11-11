import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const cnamePath = fileURLToPath(new URL("./public/CNAME", import.meta.url));
const domain = existsSync(cnamePath) ? readFileSync(cnamePath, "utf8").trim() : "";

const base = domain ? "/" : "/fiuza_e_fogaca/";
const siteUrl = domain
  ? `https://${domain}`
  : "https://omacieljoao.github.io/fiuza_e_fogaca";

function seoFiles() {
  return {
    name: "seo-files",
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replaceAll("%SITE_URL%", siteUrl),
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n  </url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), seoFiles()],
});
