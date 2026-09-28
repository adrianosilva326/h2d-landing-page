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

// Imagens
import logoH2D from '../assets/logoH2D.png';
import heroBackground from '../assets/portfolio/hero-obra-ilustrativa.webp';
import atuacaoCaldeiraria from '../assets/portfolio/atuacao-caldeiraria.webp';
import atuacaoMontagem from '../assets/portfolio/atuacao-montagem.webp';
import atuacaoEstruturasImg from '../assets/portfolio/atuacao-estruturas.webp';
import atuacaoTransportadores from '../assets/portfolio/atuacao-transportadores.webp';
import atuacaoEquipamentosAgro from '../assets/portfolio/atuacao-equipamentos-agroindustriais.webp';
import atuacaoDutos from '../assets/portfolio/atuacao-dutos-exaustao.webp';
import caseManutencao from '../assets/portfolio/case-manutencao-industrial.webp';
import caseEstruturasInstalacoes from '../assets/portfolio/case-estruturas-instalacoes.webp';
import caseFabricacao from '../assets/portfolio/case-fabricacao-equipamentos.webp';
import caseObrasC from '../assets/portfolio/case-obras-civis.webp';
import caseTransportadores from '../assets/portfolio/case-transportadores.webp';
import caseEquipamentosAgro from '../assets/portfolio/case-equipamentos-agroindustriais.webp';
import caseMezaninos from '../assets/portfolio/case-mezaninos-acessos.webp';
import caseDutos from '../assets/portfolio/case-dutos-exaustao.webp';

// Galeria - Manutenção
import manutencaoImg02 from '../assets/portfolio/gallery/manutencao/manutencao-02.webp';
import manutencaoImg03 from '../assets/portfolio/gallery/manutencao/manutencao-03.webp';
import manutencaoImg04 from '../assets/portfolio/gallery/manutencao/manutencao-04.webp';

// Galeria - Estruturas
import estruturasImg02 from '../assets/portfolio/gallery/estruturas/estrutura-02.webp';
import estruturasImg03 from '../assets/portfolio/gallery/estruturas/estrutura-03.webp';
import estruturasImg04 from '../assets/portfolio/gallery/estruturas/estrutura-04.webp';

// Galeria - Fabricação
import fabricacaoImg02 from '../assets/portfolio/gallery/fabricacao/fabricacao-02.webp';
import fabricacaoImg03 from '../assets/portfolio/gallery/fabricacao/fabricacao-03.webp';
import fabricacaoImg04 from '../assets/portfolio/gallery/fabricacao/fabricacao-04.webp';

// Galeria - Obras Civis
import obrasImg02 from '../assets/portfolio/gallery/obras-civis/obra-civil-02.webp';
import obrasImg03 from '../assets/portfolio/gallery/obras-civis/obra-civil-03.webp';
import obrasImg04 from '../assets/portfolio/gallery/obras-civis/obra-civil-04.webp';

// Galeria - Transportadores
import transportadoresImg02 from '../assets/portfolio/gallery/transportadores/transportador-02.webp';
import transportadoresImg03 from '../assets/portfolio/gallery/transportadores/transportador-03.webp';
import transportadoresImg04 from '../assets/portfolio/gallery/transportadores/transportador-04.webp';

// Galeria - Equipamentos Agroindustriais
import agroImg02 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-02.webp';
import agroImg03 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-03.webp';
import agroImg04 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-04.webp';

// Galeria - Mezaninos
import mezaninosImg02 from '../assets/portfolio/gallery/mezaninos/mezanino-02.webp';
import mezaninosImg03 from '../assets/portfolio/gallery/mezaninos/mezanino-03.webp';
import mezaninosImg04 from '../assets/portfolio/gallery/mezaninos/mezanino-04.webp';

// Galeria - Dutos
import dutosImg02 from '../assets/portfolio/gallery/dutos/dutos-02.webp';
import dutosImg03 from '../assets/portfolio/gallery/dutos/dutos-03.webp';
import dutosImg04 from '../assets/portfolio/gallery/dutos/dutos-04.webp';

// Logos de clientes
import logoVenturoso from '../assets/logos/logo-vv.png';
import logoSiderugicaSJM from '../assets/logos/logo-siderugicaSJM.png';
import logoVittia from '../assets/logos/logo-vittia.png';
import logoVLI from '../assets/logos/logo-vli.png';
import logoAltaMogiana from '../assets/logos/logo-AltaMogiana.png';
import logoSodrugestvo from '../assets/logos/logo-sodrugetvo.png';
import logoBunge from '../assets/logos/logo-bunge.png';
import logoCargill from '../assets/logos/logo-cargill.png';
import logoAmbev from '../assets/logos/logo-ambev.png';
import logoCopercana from '../assets/logos/logo-copercana.png';
import logoVale from '../assets/logos/logo-vale.png';
import logoADM from '../assets/logos/logo-adm.png';

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

  const clientLogos = [
    { src: logoVenturoso, alt: 'Venturo Valentini', name: 'Venturo Valentini' },
    { src: logoSiderugicaSJM, alt: 'Siderurgica São Joaquim', name: 'Siderurgica São Joaquim' },
    { src: logoVittia, alt: 'Vittia', name: 'Vittia' },
    { src: logoVLI, alt: 'VLI', name: 'VLI' },
    { src: logoAltaMogiana, alt: 'Alta Mogiana', name: 'Alta Mogiana' },
    { src: logoSodrugestvo, alt: 'Sodrugestvo', name: 'Sodrugestvo' },
    { src: logoBunge, alt: 'Bunge', name: 'Bunge' },
    { src: logoCargill, alt: 'Cargill', name: 'Cargill' },
    { src: logoAmbev, alt: 'Ambev', name: 'Ambev' },
    { src: logoCopercana, alt: 'Copercana', name: 'Copercana' },
    { src: logoVale, alt: 'Vale', name: 'Vale' },
    { src: logoADM, alt: 'ADM', name: 'ADM' },
  ];

  const solutions = [
    {
      title: 'Engenharia e Projetos Técnicos',
      description: 'Projetos executivos, memoriais técnicos, quantitativos e responsabilidade técnica com ART.',
    },
    {
      title: 'Caldeiraria e Fabricação Metálica',
      description: 'Tanques, reservatórios, dutos, tubulações e componentes sob medida.',
    },
    {
      title: 'Montagem Mecânica e Manutenção',
      description: 'Montagem, desmontagem, manutenção corretiva, preventiva e em paradas programadas.',
    },
    {
      title: 'Estruturas Metálicas e Galpões',
      description: 'Galpões industriais, coberturas, ampliações, mezaninos e plataformas.',
    },
    {
      title: 'Obras Civis e Infraestrutura',
      description: 'Fundações, estruturas, drenagem, pisos, terraplenagem e contenções.',
    },
    {
      title: 'Instalação de Máquinas e Equipamentos',
      description: 'Mobilização, instalação e suporte técnico em operações industriais.',
    },
  ];

  const workMethods = [
    {
      step: 1,
      title: 'Entendimento da Necessidade',
      description: 'Análise do problema, local, restrições operacionais e objetivos.',
    },
    {
      step: 2,
      title: 'Definição da Solução',
      description: 'Estudo técnico, escopo, materiais, recursos e cronograma.',
    },
    {
      step: 3,
      title: 'Planejamento e Mobilização',
      description: 'Organização de equipe, ferramentas, equipamentos e documentação.',
    },
    {
      step: 4,
      title: 'Execução Controlada',
      description: 'Acompanhamento, comunicação com cliente e controle de qualidade.',
    },
    {
      step: 5,
      title: 'Entrega e Suporte Técnico',
      description: 'Verificação final, organização de informações e apoio operacional.',
    },
  ];

  const fieldActivities = [
    {
      title: 'Caldeiraria e Fabricação',
      description: 'Estruturas, equipamentos, reservatórios, componentes e peças fabricadas sob medida para aplicações industriais.',
      image: atuacaoCaldeiraria,
      alt: 'Componentes e estruturas metálicas fabricadas em caldeiraria industrial',
    },
    {
      title: 'Montagem e Manutenção Industrial',
      description: 'Intervenções programadas e corretivas, desmontagens, reparos, instalações e suporte técnico em campo.',
      image: atuacaoMontagem,
      alt: 'Equipe realizando montagem e manutenção de equipamentos industriais',
    },
    {
      title: 'Estruturas Metálicas',
      description: 'Galpões, coberturas, ampliações, mezaninos, plataformas, passarelas e acessos industriais.',
      image: atuacaoEstruturasImg,
      alt: 'Estrutura metálica de galpão industrial em construção e montagem',
    },
    {
      title: 'Transportadores e Movimentação de Materiais',
      description: 'Transportadores de correia, roscas e equipamentos desenvolvidos para movimentação de produtos e materiais.',
      image: atuacaoTransportadores,
      alt: 'Transportador de correia e sistema de movimentação de materiais em operação',
    },
    {
      title: 'Equipamentos Agroindustriais',
      description: 'Equipamentos de pré-limpeza, mistura, moagem e apoio ao processamento de grãos e produtos.',
      image: atuacaoEquipamentosAgro,
      alt: 'Equipamento agroindustrial de pré-limpeza e processamento de grãos',
    },
    {
      title: 'Dutos, Exaustão e Componentes de Processo',
      description: 'Exaustores, dutos, curvas, bicas, transições e componentes metálicos integrados à operação.',
      image: atuacaoDutos,
      alt: 'Sistema de dutos e exaustão integrado à operação industrial',
    },
  ];

  const cases = [
    {
      title: 'Centro de Triagem de Resíduos Sólidos',
      location: 'São Joaquim da Barra - SP',
      description: 'Implantação completa de centro de triagem com fundações, estrutura metálica, cobertura, piso e instalações.',
      services: ['Fundações', 'Estrutura Metálica', 'Cobertura', 'Piso de Concreto', 'Instalações'],
      placeholder: 'Inserir foto externa do galpão ou da execução da obra.',
    },
    {
      title: 'Manutenção, Caldeiraria e Montagem Industrial',
      description: 'Recuperação, fabricação e instalação de componentes e estruturas para operação industrial contínua.',
      services: ['Caldeiraria', 'Manutenção', 'Fabricação', 'Instalação'],
      image: caseManutencao,
      gallery: [
        { src: caseManutencao, alt: 'Serviço de caldeiraria e montagem industrial em execução', caption: 'Manutenção e recuperação de componentes' },
        { src: manutencaoImg02, alt: 'Detalhe de soldagem e fabricação em trabalho de caldeiraria', caption: 'Processo de fabricação e soldagem' },
        { src: manutencaoImg03, alt: 'Equipamento montado após serviço de manutenção industrial', caption: 'Equipamento finalizado' },
        { src: manutencaoImg04, alt: 'Equipe finalizando montagem de estrutura metálica', caption: 'Conclusão da montagem' },
      ],
    },
    {
      title: 'Estruturas Metálicas e Instalações',
      description: 'Galpões, coberturas, plataformas e ampliações para diferentes necessidades operacionais.',
      services: ['Galpões', 'Coberturas', 'Plataformas', 'Ampliações'],
      image: caseEstruturasInstalacoes,
      gallery: [
        { src: caseEstruturasInstalacoes, alt: 'Estrutura metálica de galpão industrial em fase final de montagem', caption: 'Galpão em construção' },
        { src: estruturasImg02, alt: 'Detalhe da cobertura metálica instalada no galpão', caption: 'Sistema de cobertura' },
        { src: estruturasImg03, alt: 'Plataforma industrial montada sobre estrutura principal', caption: 'Plataforma de acesso' },
        { src: estruturasImg04, alt: 'Estrutura metálica completa com ampliação executada', caption: 'Estrutura finalizada' },
      ],
    },
    {
      title: 'Fabricação de Equipamentos e Dispositivos',
      description: 'Fabricação de conjuntos metálicos, peças, dispositivos e gabaritos para aplicações industriais.',
      services: ['Fabricação', 'Peças Sob Medida', 'Dispositivos', 'Gabaritos'],
      image: caseFabricacao,
      gallery: [
        { src: caseFabricacao, alt: 'Equipamento industrial fabricado sob medida em processo de conclusão', caption: 'Equipamento em produção' },
        { src: fabricacaoImg02, alt: 'Detalhe de componentes metálicos fabricados e ajustados', caption: 'Componentes fabricados' },
        { src: fabricacaoImg03, alt: 'Peças sob medida em fase de acabamento e montagem', caption: 'Peças em acabamento' },
        { src: fabricacaoImg04, alt: 'Equipamento finalizado e testado pronto para entrega', caption: 'Equipamento entregue' },
      ],
    },
    {
      title: 'Obras Civis e Infraestrutura',
      description: 'Execução de fundações, pisos, contenções, alvenarias e complementos para instalações operacionais.',
      services: ['Fundações', 'Pisos', 'Contenções', 'Infraestrutura'],
      image: caseObrasC,
      gallery: [
        { src: caseObrasC, alt: 'Obra civil com estrutura de fundação e infraestrutura em andamento', caption: 'Fundação e infraestrutura' },
        { src: obrasImg02, alt: 'Piso industrial sendo aplicado sobre fundação preparada', caption: 'Aplicação de pisos' },
        { src: obrasImg03, alt: 'Sistema de contenção e drenagem implementado na obra', caption: 'Contenção e drenagem' },
        { src: obrasImg04, alt: 'Obra civil concluída mostrando infraestrutura final', caption: 'Obra finalizada' },
      ],
    },
    {
      title: 'Projetos de Engenharia e Drenagem',
      description: 'Estudos, levantamentos, projetos executivos e soluções para infraestrutura e adequações técnicas.',
      services: ['Projetos', 'Levantamentos', 'Drenagem', 'Infraestrutura'],
      placeholder: 'Inserir foto de levantamento em campo, projeto técnico, drenagem ou implantação de infraestrutura.',
    },
    {
      title: 'Transportadores e Movimentação de Materiais',
      description: 'Fabricação e adequação de transportadores de correia, roscas e conjuntos para movimentação contínua de produtos.',
      services: ['Transportadores', 'Roscas', 'Acionamentos', 'Componentes'],
      image: caseTransportadores,
      gallery: [
        { src: caseTransportadores, alt: 'Transportador de correia instalado e em operação de movimentação de materiais', caption: 'Sistema de transportador' },
        { src: transportadoresImg02, alt: 'Detalhe do sistema de polia e correia do transportador', caption: 'Sistema de correia' },
        { src: transportadoresImg03, alt: 'Transportador de rosca para movimentação de grãos ou pó', caption: 'Transportador de rosca' },
        { src: transportadoresImg04, alt: 'Transportador completo em operação dentro da unidade', caption: 'Sistema em operação' },
      ],
    },
    {
      title: 'Equipamentos Agroindustriais e Pré-Limpeza',
      description: 'Fabricação, montagem e adequação de equipamentos destinados à preparação e ao processamento de produtos agroindustriais.',
      services: ['Pré-Limpeza', 'Mistura', 'Processamento', 'Montagem'],
      image: caseEquipamentosAgro,
      gallery: [
        { src: caseEquipamentosAgro, alt: 'Equipamento agroindustrial de pré-limpeza e processamento montado', caption: 'Equipamento agroindustrial' },
        { src: agroImg02, alt: 'Detalhe do sistema de peneiramento e limpeza do equipamento', caption: 'Sistema de pré-limpeza' },
        { src: agroImg03, alt: 'Equipamento de mistura e processamento de produtos agrícolas', caption: 'Sistema de mistura' },
        { src: agroImg04, alt: 'Equipamento completo integrado à linha de processamento da usina', caption: 'Sistema integrado' },
      ],
    },
    {
      title: 'Mezaninos, Plataformas e Guarda-Corpos',
      description: 'Estruturas auxiliares, acessos e proteções coletivas desenvolvidos conforme as condições de uso e operação.',
      services: ['Mezaninos', 'Plataformas', 'Escadas', 'Guarda-Corpos'],
      image: caseMezaninos,
      gallery: [
        { src: caseMezaninos, alt: 'Mezanino industrial com plataforma e acesso montado dentro da estrutura', caption: 'Mezanino e plataforma' },
        { src: mezaninosImg02, alt: 'Escada de acesso ao mezanino com guarda-corpo de segurança instalado', caption: 'Acesso e guarda-corpo' },
        { src: mezaninosImg03, alt: 'Detalhe da estrutura do mezanino com piso e proteção em operação', caption: 'Estrutura e piso' },
        { src: mezaninosImg04, alt: 'Mezanino completo com os acessos e proteções finalizados', caption: 'Mezanino finalizado' },
      ],
    },
    {
      title: 'Dutos, Exaustão e Componentes de Processo',
      description: 'Fabricação e instalação de exaustores, dutos, curvas, bicas e transições para sistemas industriais.',
      services: ['Exaustão', 'Dutos', 'Curvas', 'Bicas e Transições'],
      image: caseDutos,
      gallery: [
        { src: caseDutos, alt: 'Sistema de dutos e exaustão industrial em fase final de montagem', caption: 'Sistema de exaustão' },
        { src: dutosImg02, alt: 'Detalhe das curvas e transições de dutos soldadas conforme especificação', caption: 'Curvas e transições' },
        { src: dutosImg03, alt: 'Exaustor industrial montado na saída do sistema de dutos', caption: 'Exaustor montado' },
        { src: dutosImg04, alt: 'Sistema completo de dutos e exaustão em operação na unidade', caption: 'Sistema em operação' },
      ],
    },
  ];

  const segments = ['Indústrias e Agroindústrias', 'Usinas e Unidades de Processamento', 'Agronegócio', 'Logística e Armazenagem', 'Comércio e Empresas de Serviços', 'Obras Públicas e Infraestrutura', 'Propriedades Rurais', 'Empreendimentos Privados'];

  const officialPhone = '(16) 99797-1044';
  const whatsappUrl = 'https://wa.me/5516997971044';
  const officialEmail = 'contato@h2dengenharia.com.br';
  const emailUrl = 'mailto:contato@h2dengenharia.com.br';

  return (
    <>
      <MetaTags title="Portfólio Institucional | H2D Engenharia" description="Engenharia, fabricação, montagem e manutenção para operações industriais e agroindustriais. Conheça nossa experiência e soluções integradas." canonicalPath="/portfolio" imageUrl={heroBackground} />

      <main className="portfolio-page min-h-screen bg-white">
        {/* ===== 1. CAPA / HERO ===== */}
        <section
          id="hero"
          className="portfolio-hero relative bg-cover bg-center text-white py-32 px-4 overflow-hidden print-page-break"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${heroBackground})`,
          }}
        >
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <img src={logoH2D} alt="Logo H2D Engenharia" className="h-12 w-12" />
              <h1 className="text-2xl font-bold">H2D ENGENHARIA</h1>
            </div>

            <div className="space-y-6 max-w-3xl">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">Engenharia, Fabricação, Montagem e Manutenção</h2>

              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">Para Operações Industriais e Agroindustriais</p>

              <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">Soluções técnicas para transformar demandas complexas em entregas seguras, planejadas e eficientes.</p>

              <div className="pt-8">
                <Button onClick={handleScrollToForm} className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-bold px-8 py-6 text-lg no-print">
                  Solicite uma Avaliação Técnica
                </Button>
              </div>
            </div>

            <div className="mt-16 flex flex-col md:flex-row gap-8 text-sm md:text-base">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                <Phone className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>{officialPhone}</span>
              </a>
              <a href={emailUrl} className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors">
                <Mail className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>{officialEmail}</span>
              </a>
            </div>
          </div>

          {/* Legenda ilustrativa no canto inferior direito */}
          <div className="absolute bottom-4 right-6 text-xs text-gray-300 print:hidden">Imagem ilustrativa</div>
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
                <article key={idx} className="portfolio-case-card bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[var(--h2d-yellow)]">
                  <div className="portfolio-case-media">
                    {caseItem.image ? (
                      <>
                        <PortfolioImage src={caseItem.image} alt={`Projeto de ${caseItem.title}`} className="rounded-none" />
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
                        {caseItem.services.map((service, serviceIdx) => (
                          <span key={serviceIdx} className="bg-blue-50 text-[var(--h2d-blue-dark)] px-3 py-1 rounded-full text-sm font-medium">
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
        {galleryState.caseIndex >= 0 && cases[galleryState.caseIndex]?.gallery && <PortfolioGallery open={galleryState.open} onClose={closeGallery} title={cases[galleryState.caseIndex].title} images={cases[galleryState.caseIndex].gallery} initialIndex={galleryState.initialIndex} />}

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
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Empresas que Confiam na H2D</h2>
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
        <section ref={formRef} id="formulario" className="py-20 px-4 bg-white print-page-break">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Entre em Contato</h2>
              <p className="text-lg text-gray-700">Nos envie uma mensagem que logo retornaremos com uma solução para sua demanda.</p>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)] mx-auto"></div>
            </div>

            <ContactForm />
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
