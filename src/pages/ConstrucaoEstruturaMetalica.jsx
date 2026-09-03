// src/pages/ConstrucaoEstruturaMetalica.jsx
// ARQUIVO REATORADO E FOCADO PARA ADS (INDÚSTRIA)

import { MetaTags } from '../components/MetaTags';
import { useRef } from 'react';
import '../App.css';
import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsentBanner } from '../components/CookieConsentBanner';

import { TrustBar } from '../components/TrustBar';

// --- 1. IMPORTE OS NOVOS COMPONENTES ESPECÍFICOS ---
import { VantagensAco } from '../components/VantagensAco';
import { PortfolioEstrutura } from '../components/PortfolioEstrutura';
import { TestimonialsIndustria } from '../components/TestimonialsIndustria';
// (Você também pode criar um 'BeneficiosAgro.jsx' se quiser)
import { ClientLogos } from '../components/ClientLogos';
import { TeamSection } from '../components/TeamSection';
import { FAQIndustria } from '../components/FAQIndustria';

// --- Imagens ---
import logoH2D from '../assets/logoH2D.png';
// Imagem de fundo para o Hero (pode ser a mesma do Agro ou uma industrial)
import heroBackground from '../assets/galpao-moderno-0.jpg';

import logoVenturoso from '../assets/logos/logo-vv.png';
// import galpaoModerno2 from '../assets/galpao-moderno-2.jpg';
import logoSiderugicaSJM from '../assets/logos/logo-siderugicaSJM.png';
import logoVittia from '../assets/logos/logo-vittia.png';
import logoVLI from '../assets/logos/logo-vli.png';
import logoAltaMogiana from '../assets/logos/logo-AltaMogiana.png';
import logoSodrugestvo from '../assets/logos/logo-sodrugetvo.png';

export default function ConstrucaoEstruturaMetalica() {
  const formRef = useRef(null);

  // Função para rolar suavemente até o formulário
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current.focus(); // Foca no primeiro campo do formulário
  };

  // --- 2. CRIE A LISTA DE LOGOS DO AGRO ---
  const logosDaIndustria = [
    { src: logoVenturoso, alt: 'Venturo Valentini' },
    { src: logoSiderugicaSJM, alt: 'Siderurgica São Joaquim - Laminação' },
    { src: logoVittia, alt: 'Vittia - Bio Soja' },
    { src: logoVLI, alt: 'VLI - Guará' },
    { src: logoAltaMogiana, alt: 'Ambev' },
    { src: logoSodrugestvo, alt: 'Vale' },
  ];

  return (
    <>
      {/* --- 2. METATAGS CORRIGIDAS E FOCADAS --- */}
      <MetaTags
        title="Construção em Estrutura Metálica | H2D Engenharia"
        description="Agilidade e custo-benefício em galpões de estrutura metálica. Soluções para indústria e logística. Fale com nossos engenheiros."
        canonicalPath="/construcao-estrutura-metalica"
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
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Construção em Estrutura Metálica: <span className="text-[var(--h2d-yellow)]">Agilidade e Custo-Benefício.</span>
              </h1>
              <p className="text-xl text-blue-100">Soluções eficientes para galpões industriais, logísticos e comerciais. Maximize seu espaço e acelere seu retorno sobre o investimento com a engenharia do aço.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-semibold px-8 py-3 text-lg uppercase cursor-pointer">
                  Fale com um Engenheiro
                </Button>
              </div>
            </div>
            {/* --- Formulário (Obrigatório na 1ª dobra) --- */}
            <ContactForm ref={formRef} />
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
