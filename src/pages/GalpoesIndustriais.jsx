// src/pages/GalpoesIndustriais.jsx
// (Esta é a Landing Page específica para INDÚSTRIA)

import { MetaTags } from '../components/MetaTags';
import { useRef } from 'react';
import '../App.css';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
// --- MUDANÇA: Ícones focados na Indústria ---
import { Factory, Maximize, MoveUp, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsentBanner } from '../components/CookieConsentBanner';

// --- 1. IMPORTE OS NOVOS COMPONENTES ESPECÍFICOS ---
import { TrustBar } from '../components/TrustBar';
import { VantagensAco } from '../components/VantagensAco';
import { PortfolioEstrutura } from '../components/PortfolioEstrutura';
import { TestimonialsIndustria } from '../components/TestimonialsIndustria';
// (Você também pode criar um 'BeneficiosAgro.jsx' se quiser)
import { ClientLogos } from '../components/ClientLogos';
import { TeamSection } from '../components/TeamSection';
import { FAQIndustria } from '../components/FAQIndustria';

// --- Imagens ---
import logoH2D from '../assets/logoH2D.png';
import heroBackground from '../assets/galpao-moderno-0.jpg';
// import galpaoIndustrialHero from '../assets/galpao-moderno-0.jpg';
// import galpaoIndustrial1 from '../assets/galpao-logistico-1.jpg';
// import galpaoIndustrial2 from '../assets/galpao-logistico-2.webp';
// import galpaoIndustrial3 from '../assets/galpao-logistico-3.jpg';
// import steel_frame_structure1 from '../assets/steel-frame-structure1.jpg';

import logoVenturoso from '../assets/logos/logo-vv.png';
import logoSiderugicaSJM from '../assets/logos/logo-siderugicaSJM.png';
import logoVittia from '../assets/logos/logo-vittia.png';
import logoVLI from '../assets/logos/logo-vli.png';
import logoAltaMogiana from '../assets/logos/logo-AltaMogiana.png';
import logoSodrugestvo from '../assets/logos/logo-sodrugetvo.png';

// =========================================================================
// *** MUDANÇA 1: NOME DA FUNÇÃO ***
// =========================================================================
export default function GalpoesIndustriais() {
  const formRef = useRef(null);

  // Função para rolar suavemente até o formulário
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current.focus(); // Foca no primeiro campo do formulário
  };

  // --- DADOS DOS BENEFÍCIOS (FOCO INDUSTRIAL) ---
  const beneficiosIndustriais = [
    {
      icon: Maximize,
      title: 'Vãos Livres Otimizados',
      description: 'Layouts flexíveis que permitem grandes vãos livres para linhas de produção e maquinário pesado.',
    },
    {
      icon: MoveUp,
      title: 'Pé-Direito Elevado',
      description: 'Projetos com altura ideal para pontes rolantes, porta-paletes e verticalização de estoque.',
    },
    {
      icon: Factory,
      title: 'Pronto para a Produção',
      description: 'Estruturas projetadas para suportar as demandas da sua indústria, com rapidez na montagem.',
    },
  ];

  // --- 2. CRIE A LISTA DE LOGOS DO AGRO ---
  const logosDaIndustria = [
    { src: logoVenturoso, alt: 'Venturo Valentini' },
    { src: logoSiderugicaSJM, alt: 'Siderurgica São Joaquim - Laminação' },
    { src: logoVittia, alt: 'Vittia - Bio Soja' },
    { src: logoVLI, alt: 'VLI - Guará' },
    { src: logoAltaMogiana, alt: 'Ambev' },
    { src: logoSodrugestvo, alt: 'Vale' },
  ];

  // --- DADOS DA GALERIA (VOCÊ VAI TROCAR AS IMAGENS) ---
  // const galleryImages = [
  //   { src: galpaoIndustrial1, alt: 'Galpão industrial com ponte rolante' },
  //   { src: galpaoIndustrial2, alt: 'Estrutura metálica para fábrica' },
  //   { src: galpaoIndustrial3, alt: 'Centro de distribuição H2D' },
  // ];

  return (
    <>
      {/* --- 2. METATAGS CORRIGIDAS E FOCADAS --- */}
      <MetaTags
        title="Galpões Industriais - Estrutura Metálica | H2D Engenharia"
        description="Construção de galpões industriais e fábricas em estrutura metálica. Vãos livres, pé-direito alto e pontes rolantes."
        canonicalPath="/galpoes-industriais"
        imageUrl={heroBackground} // Usa a imagem principal da página
      />

      <div className="min-h-screen bg-white">
        {/* --- 3. HERO SECTION FOCADA --- */}
        <section className="relative bg-cover bg-center text-white py-20 px-4 overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})` }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            {/* --- Mensagem Focada --- */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logoH2D} alt="Logo da H2D" className="h-10 w-10" />
                <span className="text-2xl font-bold text-[var(--h2d-yellow)]">H2D ENGENHARIA</span>
              </div>
              {/* <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Construção em Estrutura Metálica: <span className="text-[var(--h2d-yellow)]">Agilidade e Custo-Benefício.</span>
              </h1>
              <p className="text-xl text-blue-100">Soluções eficientes para galpões industriais, logísticos e comerciais. Maximize seu espaço e acelere seu retorno sobre o investimento com a engenharia do aço.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-semibold px-8 py-3 text-lg uppercase cursor-pointer">
                  Fale com um Engenheiro
                </Button>
              </div> */}
              {/* ========================================================================= */}
              {/* *** MUDANÇA 3: H1 (TÍTULO PRINCIPAL) *** */}
              {/* ========================================================================= */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-down">
                Galpões <span className="text-[var(--h2d-yellow)]">Industriais</span> e <span className="text-[var(--h2d-yellow)]">Fábricas</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up">Projetos em estrutura metálica otimizados para linhas de produção, pontes rolantes e logística interna.</p>
              <Button onClick={handleScrollToForm} size="lg" className="text-lg px-8 py-6 bg-[var(--h2d-yellow)] text-gray-900 hover:bg-yellow-400 animate-fade-in-up animation-delay-300">
                SOLICITAR ORÇAMENTO
              </Button>
            </div>
            {/* --- Formulário (Obrigatório na 1ª dobra) --- */}
            <ContactForm ref={formRef} />
          </div>
        </section>

        {/* --- Seção de Benefícios (FOCO INDUSTRIAL) --- */}
        <section id="solucoes" className="py-16 md:py-24 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Engenharia de Ponta para sua <span className="text-[var(--h2d-yellow)]">Indústria</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beneficiosIndustriais.map((item, index) => (
                <Card key={index} className="bg-gray-900 border-gray-700 text-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[var(--h2d-yellow)]">
                  <CardContent className="p-6 text-center">
                    <item.icon className="h-12 w-12 text-[var(--h2d-yellow)] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. PROVA SOCIAL (LOGOS) --- */}
        {/* --- 3. USE O COMPONENTE PASSANDO PROPS DIFERENTES --- */}
        <ClientLogos title="Quem Confia na Nossa Engenharia Industrial" subtitle="Soluções em estrutura metálica para os maiores nomes da indústria e logística." logosToShow={logosDaIndustria} />

        {/* --- 4. SEÇÕES FOCADAS (Componentes) --- */}

        <VantagensAco />

        {/* ADICIONE A ALAVANCA 1 AQUI */}
        <TrustBar />

        {/* ---  --- */}
        <PortfolioEstrutura />

        {/* --- 5. DEPOIMENTOS FOCADOS --- */}
        <TestimonialsIndustria />

        {/* --- 6. AUTORIDADE (EQUIPE) --- */}
        <TeamSection />

        {/* --- 7. QUEBRA DE OBJEÇÕES (FAQ) --- */}
        <FAQIndustria />

        {/* --- 5. CTA FINAL (Formulário) --- */}
        <section className="py-16 px-4 bg-[var(--h2d-yellow)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Pronto para Construir seu Próximo Galpão?</h2>
            <p className="text-xl text-[var(--h2d-blue-dark)] mb-8">Descubra como nossa expertise em estrutura metálica pode acelerar seu projeto. Fale com um especialista e receba uma consultoria gratuita.</p>
            <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-blue-dark)] hover:bg-[var(--h2d-blue-medium)] text-white font-semibold px-12 py-4 text-lg uppercase cursor-pointer">
              Receber Consultoria Gratuita
            </Button>
          </div>
        </section>

        {/* --- 6. FOOTER SIMPLIFICADO --- */}
        <footer className="bg-[var(--h2d-gray-dark)] text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <img src={logoH2D} alt="Logo da H2D" className="h-10 w-10" />
                  <span className="text-2xl font-bold text-[var(--h2d-yellow)]">H2D</span>
                  <span className="text-xl font-medium">ENGENHARIA</span>
                </div>
                <p className="text-gray-300 mb-6">Especialistas em fabricação, execução e projetos de galpões.</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[var(--h2d-yellow)]" />
                    <span className="text-gray-300">(16) 99797-1044</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[var(--h2d-yellow)]" />
                    <span className="text-gray-300">São Joaquim da Barra, SP - Brasil</span>
                  </div>
                </div>
              </div>

              {/* Links essenciais (Obrigatórios para Ads) */}
              <div className="text-center md:text-right">
                <p className="text-gray-400">© 2025 H2D Engenharia. Todos os direitos reservados.</p>
                <p className="text-gray-400 text-sm">CNPJ: XX.XXX.XXX/0001-XX</p>
                <div className="mt-4 text-sm text-gray-400">
                  <Link to="/politica-de-privacidade" className="hover:text-white mx-2">
                    Política de Privacidade
                  </Link>
                  |
                  <Link to="/termos-de-uso" className="hover:text-white mx-2">
                    Termos de Uso
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* --- Componentes Flutuantes (Obrigatórios) --- */}
        <WhatsAppButton />
        <CookieConsentBanner />
      </div>
    </>
  );
}
