// src/components/MetaTags.jsx

import { Helmet } from 'react-helmet-async';

// Lembre-se de criar uma imagem representativa para redes sociais (1200x630 pixels)
// e colocá-la na pasta 'public'. Ex: public/og-image.jpg
// © Adriano Vieira — eng.adrianovieira.com
const OG_IMAGE_URL = 'https://h2dengenharia.com.br/og-image.jpg';
const BASE_URL = 'https://h2dengenharia.com.br';

export function MetaTags({
  title = "Galpões Industriais e Logísticos | H2D Engenharia",
  description = "Projetamos e construímos galpões industriais, comerciais e logísticos em estrutura metálica e pré-moldado. Soluções completas, do projeto à entrega. Fale com nossos engenheiros e peça um orçamento.",
  imageUrl = OG_IMAGE_URL,
  canonicalPath = "/" // <-- NOVO: Adicione um caminho padrão
}) {

  // Constrói a URL canônica completa dinamicamente
  const canonicalUrl = `${BASE_URL}${canonicalPath === "/" ? "" : canonicalPath}`; // Garante que a home não tenha barra dupla

  return (
    <Helmet>
      {/* --- Tags Padrão de SEO --- */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* --- CORRIGIDO: URL Canônica dinâmica --- */}
      <link rel="canonical" href={canonicalUrl} />

      {/* --- Tags Open Graph (para Facebook, LinkedIn, WhatsApp) --- */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="H2D Engenharia" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />

      {/* --- Tags Twitter Card (para o Twitter) --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@seu_twitter_se_tiver" /> {/* Opcional */}
    </Helmet>
  );
}