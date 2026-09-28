import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.dirname(currentDirectory);
const distDirectory = path.join(projectRoot, 'dist');
const homeHtmlPath = path.join(distDirectory, 'index.html');
const homeHtml = await readFile(homeHtmlPath, 'utf8');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function insertBeforeHeadClose(html, tag) {
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
}

function setMeta(html, attribute, key, content) {
  const expression = new RegExp(`<meta\\s+${attribute}=(['"])${escapeRegExp(key)}\\1[^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return expression.test(html) ? html.replace(expression, tag) : insertBeforeHeadClose(html, tag);
}

function setCanonical(html, url) {
  const expression = /<link\s+rel=(['"])canonical\1[^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeAttribute(url)}" />`;
  return expression.test(html) ? html.replace(expression, tag) : insertBeforeHeadClose(html, tag);
}

async function writeRouteHtml(route, transform) {
  const routeDirectory = path.join(distDirectory, route);
  const routeHtml = transform(homeHtml);
  await mkdir(routeDirectory, { recursive: true });
  await Promise.all([
    writeFile(path.join(routeDirectory, 'index.html'), routeHtml, 'utf8'),
    writeFile(path.join(distDirectory, `${route}.html`), routeHtml, 'utf8'),
  ]);
}

const portfolioTitle = 'Portfólio Institucional | H2D Engenharia';
const portfolioDescription = 'Conheça obras, equipamentos e soluções desenvolvidas pela H2D Engenharia para operações industriais, agroindustriais e de infraestrutura.';
const portfolioUrl = 'https://h2dengenharia.com.br/portfolio';
const socialImage = 'https://h2dengenharia.com.br/og-image.jpg';
const socialImageAlt = 'H2D Engenharia - soluções industriais, agroindustriais e de infraestrutura';

await writeRouteHtml('portfolio', (sourceHtml) => {
  let html = setTitle(sourceHtml, portfolioTitle);
  html = setMeta(html, 'name', 'description', portfolioDescription);
  html = setCanonical(html, portfolioUrl);
  html = setMeta(html, 'property', 'og:title', portfolioTitle);
  html = setMeta(html, 'property', 'og:description', portfolioDescription);
  html = setMeta(html, 'property', 'og:url', portfolioUrl);
  html = setMeta(html, 'property', 'og:type', 'website');
  html = setMeta(html, 'property', 'og:site_name', 'H2D Engenharia');
  html = setMeta(html, 'property', 'og:locale', 'pt_BR');
  html = setMeta(html, 'property', 'og:image', socialImage);
  html = setMeta(html, 'property', 'og:image:width', '1200');
  html = setMeta(html, 'property', 'og:image:height', '630');
  html = setMeta(html, 'property', 'og:image:alt', socialImageAlt);
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image');
  html = setMeta(html, 'name', 'twitter:title', portfolioTitle);
  html = setMeta(html, 'name', 'twitter:description', portfolioDescription);
  html = setMeta(html, 'name', 'twitter:image', socialImage);
  html = setMeta(html, 'name', 'twitter:image:alt', socialImageAlt);
  return html;
});

await writeRouteHtml('portfolio-pdf', (sourceHtml) => {
  let html = setTitle(sourceHtml, 'Portfólio Institucional para PDF | H2D Engenharia');
  html = setMeta(html, 'name', 'description', 'Ferramenta interna de preparação do portfólio institucional da H2D Engenharia.');
  html = setMeta(html, 'name', 'robots', 'noindex, nofollow');
  html = setCanonical(html, 'https://h2dengenharia.com.br/portfolio-pdf');
  return html;
});
