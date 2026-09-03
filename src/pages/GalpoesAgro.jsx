// src/pages/GalpoesAgro.jsx
// ARQUIVO REATORADO E FOCADO PARA ADS

import { MetaTags } from '../components/MetaTags';
import { useRef } from 'react'; //useState,
import '../App.css';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tractor, Wheat, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsentBanner } from '../components/CookieConsentBanner';

import { TrustBar } from '../components/TrustBar';

// --- 1. IMPORTE OS NOVOS COMPONENTES ESPECÍFICOS ---
import { PortfolioAgro } from '../components/PortfolioAgro';
import { TestimonialsAgro } from '../components/TestimonialsAgro';
// (Você também pode criar um 'BeneficiosAgro.jsx' se quiser)
import { ClientLogos } from '../components/ClientLogos';
import { TeamSection } from '../components/TeamSection';
import { FAQAgro } from '../components/FAQAgro';

// --- IMAGENS ESPECÍFICAS DO AGRO (Substitua por imagens reais do Agro) ---
import logoH2D from '../assets/logoH2D.png';
import galpaoAgroHero from '../assets/extra-image-5.jpg'; // Imagem principal do Hero

// --- 1. IMPORTE OS LOGOS ESPECÍFICOS DO AGRO ---
// (Verifique os caminhos corretos)
import logoCopercana from '../assets/logos/logo-copercana.png';
import logoCargill from '../assets/logos/logo-cargill.png';
import logoADM from '../assets/logos/logo-adm.png';
import logoBunge from '../assets/logos/logo-bunge.png';
import logoVale from '../assets/logos/logo-vale.png';
import logoAmbev from '../assets/logos/logo-ambev.png';

// =========================================================================
// Componente FOCADO em Galpões para o Agronegócio
// =========================================================================
export default function GalpoesAgro() {
  const formRef = useRef(null);

  // Função para rolar suavemente até o formulário
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current.focus(); // Foca no primeiro campo do formulário
  };

  // --- BENEFÍCIOS ESPECÍFICOS DO AGRO ---
  const beneficiosAgro = [
    {
      icon: Tractor,
      title: 'Vãos Livres para Maquinário',
      description: 'Espaço otimizado para trânsito e armazenamento de colheitadeiras, tratores e implementos pesados.',
    },
    {
      icon: Wheat,
      title: 'Armazenagem Segura de Grãos',
      description: 'Projetos com ventilação e isolamento ideais para a conservação de grãos, sacarias e insumos.',
    },
    {
      icon: ShieldCheck,
      title: 'Durabilidade no Campo',
      description: 'Estruturas com tratamento especial contra corrosão e projetadas para resistir a intempéries severas.',
    },
  ];

  // --- 2. CRIE A LISTA DE LOGOS DO AGRO ---
  const logosDoAgro = [
    { src: logoCopercana, alt: 'Copercana' },
    { src: logoCargill, alt: 'Cargill' },
    { src: logoADM, alt: 'ADM' },
    { src: logoBunge, alt: 'Bunge' },
    { src: logoAmbev, alt: 'Ambev' },
    { src: logoVale, alt: 'Vale' },
  ];

  return (
    <>
      <MetaTags title="Galpões para Agronegócio - Estruturas Metálicas | H2D Engenharia" description="Construção de galpões metálicos para fazendas, armazenamento de grãos, maquinário agrícola e mais. Peça um orçamento." canonicalPath="/galpoes-agronegocio" imageUrl={galpaoAgroHero} />

      <div className="min-h-screen bg-white">
        {/* --- HERO SECTION FOCADA --- */}
        <section className="relative bg-cover bg-center text-white py-20 px-4 overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${galpaoAgroHero})` }}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-6">
                <img src={logoH2D} alt="Logo da H2D" className="h-10 w-10" />
                <span className="text-2xl font-bold text-[var(--h2d-yellow)]">H2D ENGENHARIA</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Galpões para o Agronegócio: <span className="text-[var(--h2d-yellow)]">Proteja sua Safra e Maquinário.</span>
              </h1>
              <p className="text-xl text-blue-100">Soluções em estrutura metálica para fazendas, armazéns de grãos e garagens de tratores. Construção rápida, resistente e com o melhor custo-benefício para o produtor rural.</p>
              <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-semibold px-8 py-3 text-lg uppercase cursor-pointer">
                Peça um Orçamento Gratuito
              </Button>
            </div>
            <ContactForm ref={formRef} />
          </div>
        </section>

        {/* --- 2. SEÇÃO DE BENEFÍCIOS FOCADA --- */}
        <section id="solucoes-agro" className="py-16 px-4 bg-[var(--h2d-gray-light)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Projetado para a Realidade do Campo</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">Nossos galpões resolvem os problemas diários do produtor rural.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {beneficiosAgro.map((item, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--h2d-yellow)]">
                  <CardContent className="p-8 text-center">
                    <item.icon className="h-16 w-16 text-[var(--h2d-blue-medium)] mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ADICIONE A ALAVANCA 1 AQUI */}
        <TrustBar />

        {/* --- 3. PROVA SOCIAL (LOGOS) --- */}
        {/* --- 3. USE O COMPONENTE PASSANDO AS PROPS --- */}
        <ClientLogos title="Grandes Nomes do Agronegócio Confiam na H2D" subtitle="Temos orgulho de ter executado projetos para as maiores usinas e cooperativas." logosToShow={logosDoAgro} />

        {/* --- 4. PORTFÓLIO FOCADO --- */}
        <PortfolioAgro />

        {/* --- 5. DEPOIMENTOS FOCADOS --- */}
        <TestimonialsAgro />

        {/* --- 6. AUTORIDADE (EQUIPE) --- */}
        <TeamSection />

        {/* --- 7. QUEBRA DE OBJEÇÕES (FAQ) --- */}
        <FAQAgro />

        {/* --- 8. CTA FINAL (Formulário) --- */}
        <section className="py-16 px-4 bg-[var(--h2d-yellow)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Pronto para sua Próxima Safra?</h2>
            <p className="text-xl text-[var(--h2d-blue-dark)] mb-8">Não deixe seu maquinário no tempo nem arrisque sua produção. Fale com nossos especialistas e receba um orçamento gratuito para seu galpão rural.</p>
            <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-blue-dark)] hover:bg-[var(--h2d-blue-medium)] text-white font-semibold px-12 py-4 text-lg uppercase cursor-pointer">
              Receber Orçamento Grátis
            </Button>
          </div>
        </section>

        {/* --- 9. FOOTER SIMPLIFICADO --- */}
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

        <WhatsAppButton />
        <CookieConsentBanner />
      </div>
    </>
  );
}
