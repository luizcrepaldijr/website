import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site || new URL("https://www.transformatechadvisors.com");

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      `Sitemap: ${new URL("sitemap-index.xml", baseUrl).href}`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
