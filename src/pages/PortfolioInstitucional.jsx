// src/pages/PortfolioInstitucional.jsx

import { MetaTags } from '../components/MetaTags';
import { useRef, useState } from 'react';
import './PortfolioInstitucional.css';
import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight, Image, Camera, Wrench } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import { PortfolioGallery } from '../components/PortfolioGallery';

import {
  cases,
  clientLogos,
  fieldActivities,
  heroBackground,
  logoH2D,
  portfolioContacts,
  segments,
  solutions,
  workMethods,
} from '../data/portfolioData';
function ImagePlaceholder({ title, description, aspect = '16 / 9', className = '' }) {
  const iconMap = {
    Image,
    Camera,
    Wrench,
  };

  const SelectedIcon = iconMap[title] || Image;

  return (
    <div className={`image-placeholder ${className}`.trim()} style={{ aspectRatio: aspect }}>
      <div className="image-placeholder__content">
        <div className="image-placeholder__icon-wrap">
          <SelectedIcon className="image-placeholder__icon" aria-hidden="true" />
        </div>
        <span className="image-placeholder__tag">Imagem em preparação</span>
        <p className="image-placeholder__description">{description}</p>
      </div>
    </div>
  );
}

function PortfolioImage({ src, alt, className = '', objectPosition = 'center', loading = 'lazy' }) {
  return <img src={src} alt={alt} className={`portfolio-image ${className}`.trim()} style={{ objectPosition }} loading={loading} />;
}

function ClientLogoCard({ src, alt, name }) {
  return (
    <div className="client-logo-card">
      <div className="client-logo-card__logo-wrap">
        <img src={src} alt={alt} className="client-logo-card__logo" />
      </div>
      <p className="client-logo-card__name">{name}</p>
    </div>
  );
}

export default function PortfolioInstitucional() {
  const formRef = useRef(null);
  const [galleryState, setGalleryState] = useState({ open: false, caseIndex: -1, initialIndex: 0 });

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current?.focus();
  };

  const openGallery = (caseIndex, imageIndex = 0) => {
    setGalleryState({ open: true, caseIndex, initialIndex: imageIndex });
  };

  const closeGallery = () => {
    setGalleryState({ open: false, caseIndex: -1, initialIndex: 0 });
  };

  const {
    commercialPhone: officialPhone,
    commercialWhatsAppUrl: whatsappUrl,
    engineerPhone,
    engineerWhatsAppUrl,
    email: officialEmail,
    emailUrl,
    city,
  } = portfolioContacts;
  return (
    <>
      <MetaTags
        title="Portfólio Institucional | H2D Engenharia"
        description="Conheça obras, equipamentos e soluções desenvolvidas pela H2D Engenharia para operações industriais, agroindustriais e de infraestrutura."
        canonicalPath="/portfolio"
        imageUrl="/og-image.jpg"
        imageAlt="H2D Engenharia - soluções industriais, agroindustriais e de infraestrutura"
      />

      <main className="portfolio-page min-h-screen bg-white">
        {/* ===== 1. CAPA / HERO ===== */}
        <section
          id="hero"
          className="portfolio-hero relative bg-cover bg-center text-white py-32 px-4 overflow-hidden print-page-break"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 27, 54, 0.96) 0%, rgba(0, 51, 102, 0.86) 42%, rgba(0, 51, 102, 0.38) 74%, rgba(0, 27, 54, 0.2) 100%), url(${heroBackground})`,
          }}
        >
          <div className="portfolio-hero-content max-w-7xl mx-auto relative z-10">
            <div className="portfolio-hero-brand flex items-center space-x-3">
              <img src={logoH2D} alt="Logo H2D Engenharia" className="h-12 w-12" />
              <span className="text-2xl font-bold">H2D ENGENHARIA</span>
            </div>

            <div className="portfolio-hero-copy max-w-3xl">
              <p className="portfolio-hero-eyebrow">PORTFÓLIO INSTITUCIONAL</p>
              <h1 className="portfolio-hero-title">Da demanda em campo à solução em operação.</h1>

              <p className="portfolio-hero-lead">Engenharia, fabricação, montagem e manutenção para operações industriais e agroindustriais.</p>

              <p className="portfolio-hero-description">Conheça soluções desenvolvidas para estruturas, equipamentos, movimentação de materiais, processos agroindustriais, obras e infraestrutura.</p>

              <div className="portfolio-hero-actions no-print">
                <Button asChild className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-bold px-7 py-6 text-base">
                  <a href="#atuacao-em-campo">Conheça nossas soluções</a>
                </Button>
                <Button onClick={handleScrollToForm} variant="outline" className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-[var(--h2d-blue-dark)] font-bold px-7 py-6 text-base">
                  Fale com um engenheiro
                </Button>
              </div>
            </div>

            <div className="portfolio-hero-contacts">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                <Phone className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span><strong>Comercial H2D:</strong> {officialPhone}</span>
              </a>
              <a href={engineerWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                <Phone className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span><strong>Eng. Adriano:</strong> {engineerPhone}</span>
              </a>
              <a href={emailUrl} className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                <Mail className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>{officialEmail}</span>
              </a>
              <span className="flex items-center gap-3 text-white">
                <MapPin className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>{city}</span>
              </span>
            </div>
          </div>

          <div className="portfolio-hero-disclaimer print:hidden">Imagem ilustrativa</div>
        </section>

        {/* ===== 2. QUEM SOMOS ===== */}
        <section id="quem-somos" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Quem Somos</h2>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                A <strong>H2D Engenharia</strong> atua no desenvolvimento e na execução de soluções para os setores industrial, agroindustrial, comercial e de infraestrutura.
              </p>

              <p>
                Nossa atuação integra <strong>engenharia, fabricação, montagem, manutenção e execução de obras</strong>, permitindo conduzir diferentes etapas de uma demanda com visão técnica, planejamento e foco no resultado operacional do cliente.
              </p>

              <p className="text-xl font-semibold text-[var(--h2d-blue-medium)]">H2D Engenharia: Capacidade técnica para planejar, executar e manter.</p>
            </div>
          </div>
        </section>

        {/* ===== 3. SOLUÇÕES INTEGRADAS ===== */}
        <section id="solucoes" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Soluções Integradas</h2>
              <p className="text-lg text-gray-700">Uma empresa. Competências conectadas para sua operação.</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((sol, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[var(--h2d-yellow)]">
                  <h3 className="text-xl font-bold text-[var(--h2d-blue-dark)] mb-3">{sol.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{sol.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3.1. ATUAÇÃO EM CAMPO ===== */}
        <section id="atuacao-em-campo" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Atuação em Campo</h2>
              <p className="text-lg text-gray-700">Soluções executadas conforme a necessidade técnica e operacional de cada cliente.</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)] mx-auto md:mx-0"></div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {fieldActivities.map((activity, idx) => (
                <article key={idx} className="portfolio-activity-card bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden">
                  <PortfolioImage src={activity.image} alt={activity.alt} className="m-0" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-3">{activity.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. CALDEIRARIA E FABRICAÇÃO ===== */}
        <section id="caldeiraria" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Caldeiraria e Fabricação Metálica</h2>
              <p className="text-lg text-gray-700">Soluções fabricadas para a realidade da sua operação</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Executamos serviços de caldeiraria leve, média e pesada para demandas industriais, agroindustriais e mecânicas. Nossa atuação abrange fabricação, reforma, substituição e adequação de componentes, conjuntos e equipamentos metálicos, sempre observando as especificações técnicas e
              necessidades operacionais de cada cliente.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Tanques e Reservatórios Metálicos', 'Caixas, Dutos, Chaminés e Tubulações', 'Plataformas, Escadas e Passarelas', 'Estruturas Auxiliares e Suportes', 'Peças e Dispositivos sob Medida', 'Reformas e Adequações em Equipamentos'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--h2d-yellow)] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. MONTAGEM E MANUTENÇÃO ===== */}
        <section id="montagem" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Montagem Mecânica e Manutenção Industrial</h2>
              <p className="text-lg text-gray-700">Continuidade operacional com planejamento e controle</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Prestamos serviços de montagem, desmontagem, manutenção corretiva, preventiva e programada em equipamentos e instalações industriais. Atuamos em intervenções pontuais, períodos de entressafra, paradas programadas e adequações operacionais.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Montagem e Desmontagem de Equipamentos', 'Instalação de Máquinas e Conjuntos Industriais', 'Manutenção de Equipamentos e Estruturas', 'Reforma de Tanques e Caldeiras', 'Serviços em Sistemas Mecânicos', 'Apoio em Paradas Industriais'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--h2d-yellow)] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-base italic text-gray-600 pt-6 border-t-2 border-gray-200">
              <strong>Nosso compromisso:</strong> executar com método, reduzir interferências e contribuir para a retomada segura das atividades.
            </p>
          </div>
        </section>

        {/* ===== 6. ESTRUTURAS METÁLICAS ===== */}
        <section id="estruturas" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Estruturas Metálicas e Galpões</h2>
              <p className="text-lg text-gray-700">Estruturas pensadas para produzir, armazenar e crescer</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Desenvolvemos e executamos soluções em estruturas metálicas para aplicações industriais, comerciais, agrícolas e logísticas. Cada projeto é estudado conforme o uso da edificação, os vãos necessários, os equipamentos envolvidos e as possibilidades de expansão futura.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Galpões Industriais e Agroindustriais', 'Barracões para Armazenagem e Logística', 'Coberturas e Ampliações', 'Mezaninos, Plataformas e Passarelas', 'Estruturas para Máquinas e Equipamentos', 'Reformas e Adequações Estruturais'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--h2d-yellow)] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. ENGENHARIA E PROJETOS ===== */}
        <section id="engenharia" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Engenharia, Projetos e Responsabilidade Técnica</h2>
              <p className="text-lg text-gray-700">Decisão bem projetada reduz risco na execução</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              A engenharia é parte central da atuação da H2D. Desenvolvemos estudos, projetos, memoriais, quantitativos e soluções executivas que dão ao cliente clareza para decidir e segurança para executar. Nossa abordagem considera viabilidade técnica, condições de campo, interfaces, segurança,
              construtibilidade, custo e prazo.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Projetos Executivos e Detalhamentos', 'Projetos Estruturais e de Fundações', 'Estudos de Drenagem e Infraestrutura', 'Levantamentos, Memoriais e Especificações', 'Quantitativos e Estimativas de Custos', 'Planejamento Executivo e ART'].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-[var(--h2d-yellow)] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. MÉTODO DE TRABALHO ===== */}
        <section id="metodo" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Método de Trabalho</h2>
              <p className="text-lg text-gray-700">Da demanda à entrega, com visão de execução</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="space-y-8">
              {workMethods.map((method, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[var(--h2d-blue-dark)] text-white font-bold text-xl">{method.step}</div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-[var(--h2d-blue-dark)] mb-2">{method.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{method.description}</p>
                  </div>
                  {idx < workMethods.length - 1 && <div className="hidden md:block absolute right-1/3 h-32 w-0.5 bg-[var(--h2d-yellow)] opacity-30 -mt-20"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. SOLUÇÕES E EXPERIÊNCIAS TÉCNICAS ===== */}
        <section id="cases" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Soluções e Experiências Técnicas</h2>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {cases.map((caseItem, idx) => (
                <article id={`case-${caseItem.slug}`} key={caseItem.slug} className="portfolio-case-card bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[var(--h2d-yellow)]">
                  <div className="portfolio-case-media">
                    {caseItem.image ? (
                      <>
                        <PortfolioImage src={caseItem.image} alt={caseItem.alt || caseItem.gallery?.[0]?.alt || caseItem.title} className="rounded-none" />
                        {caseItem.illustrative && <span className="portfolio-image-badge">Imagem ilustrativa</span>}
                        {caseItem.gallery && (
                          <button type="button" onClick={() => openGallery(idx)} className="portfolio-gallery-trigger" aria-label={`Abrir galeria de ${caseItem.title}`}>
                            <span className="portfolio-gallery-trigger-label">Ver fotos</span>
                          </button>
                        )}
                      </>
                    ) : (
                      <ImagePlaceholder title="Image" description={caseItem.placeholder} className="rounded-none" />
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-2">{caseItem.title}</h3>
                    {caseItem.location && <p className="text-sm text-[var(--h2d-blue-medium)] font-semibold mb-4">{caseItem.location}</p>}
                    <p className="text-gray-700 leading-relaxed mb-6">{caseItem.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-600">Serviços envolvidos:</p>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.services.map((service) => (
                          <span key={service} className="bg-blue-50 text-[var(--h2d-blue-dark)] px-3 py-1 rounded-full text-sm font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria Modal */}
        {galleryState.open && galleryState.caseIndex >= 0 && cases[galleryState.caseIndex]?.gallery && <PortfolioGallery open={galleryState.open} onClose={closeGallery} title={cases[galleryState.caseIndex].title} images={cases[galleryState.caseIndex].gallery} initialIndex={galleryState.initialIndex} />}

        {/* ===== 10. SEGMENTOS ATENDIDOS ===== */}
        <section id="segmentos" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Segmentos Atendidos</h2>
              <p className="text-lg text-gray-700">Experiência para diferentes necessidades de operação</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <ArrowRight className="text-[var(--h2d-yellow)] flex-shrink-0" size={24} />
                  <p className="text-gray-700 font-medium">{segment}</p>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-700 pt-8 border-t-2 border-gray-200">Trabalhamos de forma colaborativa com gestores, equipes de manutenção, engenharia, produção e segurança para transformar necessidades em entregas viáveis.</p>
          </div>
        </section>

        {/* ===== 11. CLIENTES ===== */}
        <section id="clientes" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Empresas Atendidas pela H2D</h2>
              <p className="text-lg text-gray-700">Experiência construída em serviços, projetos e soluções desenvolvidas para diferentes operações.</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {clientLogos.map((logo, idx) => (
                <ClientLogoCard key={idx} src={logo.src} alt={logo.alt} name={logo.name} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== 12. ENCERRAMENTO ===== */}
        <section id="encerramento" className="py-20 px-4 bg-[var(--h2d-blue-dark)] text-white print-page-break">
          <div className="max-w-4xl mx-auto space-y-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Vamos Transformar Sua Demanda em uma Solução Viável</h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Seja para um projeto de <strong>engenharia, fabricação, montagem, manutenção ou obra de infraestrutura</strong>, a H2D Engenharia está preparada para entender a necessidade da sua operação e construir a melhor resposta técnica.
            </p>

            <div className="h-1 w-16 bg-[var(--h2d-yellow)] mx-auto"></div>

            <div className="space-y-6 pt-8">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">H2D ENGENHARIA</h3>
                <p className="text-lg text-gray-300">Engenharia, fabricação, montagem e manutenção para operações industriais e agroindustriais.</p>
              </div>

              <div className="space-y-4 py-8 border-y-2 border-gray-700">
                <div className="flex items-center justify-center gap-3">
                  <Phone size={20} className="text-[var(--h2d-yellow)]" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                    {officialPhone}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail size={20} className="text-[var(--h2d-yellow)]" />
                  <a href={emailUrl} className="text-white hover:text-gray-200 transition-colors">
                    {officialEmail}
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 no-print">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-bold px-8 py-3 rounded-lg transition-colors">
                  WhatsApp
                  <Phone size={20} />
                </a>
                <a href={emailUrl} className="inline-flex items-center justify-center gap-2 bg-white text-[var(--h2d-blue-dark)] hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-colors">
                  E-mail
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FORMULÁRIO FLUTUANTE ===== */}
        <section id="formulario" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Entre em Contato</h2>
              <p className="text-lg text-gray-700">Nos envie uma mensagem que logo retornaremos com uma solução para sua demanda.</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)] mx-auto"></div>
            </div>

            <ContactForm ref={formRef} variant="portfolio" />
          </div>
        </section>
      </main>

      {/* Componentes secundários */}
      <div className="portfolio-print-hidden">
        <WhatsAppButton />
      </div>
      <div className="portfolio-print-hidden">
        <CookieConsentBanner />
      </div>
    </>
  );
}
