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
import atuacaoTransportadores from '../assets/portfolio/atuacao-transportadores.webp';
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

// Galeria - Estruturas
import estruturasImg02 from '../assets/portfolio/gallery/estruturas/estrutura-02.webp';
import estruturasImg03 from '../assets/portfolio/gallery/estruturas/estrutura-03.webp';

// Galeria - Fabricação
import fabricacaoImg02 from '../assets/portfolio/gallery/fabricacao/fabricacao-02.webp';
import fabricacaoImg03 from '../assets/portfolio/gallery/fabricacao/fabricacao-03.webp';
import fabricacaoImg04 from '../assets/portfolio/gallery/fabricacao/fabricacao-04.webp';
import fabricacaoImg05 from '../assets/portfolio/gallery/fabricacao/fabricacao-05.webp';

// Galeria - Obras Civis
import obrasImg02 from '../assets/portfolio/gallery/obras-civis/obra-civil-02.webp';
import obrasImg03 from '../assets/portfolio/gallery/obras-civis/obra-civil-03.webp';
import obrasImg04 from '../assets/portfolio/gallery/obras-civis/obra-civil-04.webp';
import obrasImg05 from '../assets/portfolio/gallery/obras-civis/obra-civil-05.webp';

// Galeria - Transportadores
import transportadoresImg02 from '../assets/portfolio/gallery/transportadores/transportador-02.webp';
import transportadoresImg03 from '../assets/portfolio/gallery/transportadores/transportador-03.webp';
import transportadoresImg04 from '../assets/portfolio/gallery/transportadores/transportador-04.webp';

// Galeria - Equipamentos Agroindustriais
import agroImg02 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-02.webp';
import agroImg03 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-03.webp';
import agroImg04 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-04.webp';
import agroImg05 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-05.webp';
import agroImg06 from '../assets/portfolio/gallery/agroindustriais/agroindustrial-06.webp';

// Galeria - Mezaninos
import mezaninosImg02 from '../assets/portfolio/gallery/mezaninos/mezanino-02.webp';
import mezaninosImg03 from '../assets/portfolio/gallery/mezaninos/mezanino-03.webp';
import mezaninosImg04 from '../assets/portfolio/gallery/mezaninos/mezanino-04.webp';

// Galeria - Dutos
import dutosImg02 from '../assets/portfolio/gallery/dutos/dutos-02.webp';
import dutosImg03 from '../assets/portfolio/gallery/dutos/dutos-03.webp';

// Galeria - Centro de Triagem
import centroTriagemImg01 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-01.webp';
import centroTriagemImg02 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-02.webp';
import centroTriagemImg03 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-03.webp';
import centroTriagemImg04 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-04.webp';
import centroTriagemImg05 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-05.webp';
import centroTriagemImg06 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-06.webp';
import centroTriagemImg07 from '../assets/portfolio/gallery/centro-triagem/centro-triagem-07.webp';

// Imagem ilustrativa - Drenagem
import drenagemImg01 from '../assets/portfolio/gallery/drenagem/drenagem-01.webp';

// Galeria - Curvas de Gomos
import curvaGomosImg01 from '../assets/portfolio/gallery/curvas-gomos/curva-gomos-01.webp';
import curvaGomosImg02 from '../assets/portfolio/gallery/curvas-gomos/curva-gomos-02.webp';
import curvaGomosImg03 from '../assets/portfolio/gallery/curvas-gomos/curva-gomos-03.webp';

// Galeria - Tanques
import tanqueImg01 from '../assets/portfolio/gallery/tanques/tanque-01.webp';
import tanqueImg02 from '../assets/portfolio/gallery/tanques/tanque-02.webp';
import tanqueImg03 from '../assets/portfolio/gallery/tanques/tanque-03.webp';

// Galeria - Misturadores e Moinhos
import misturadorMoinhoImg01 from '../assets/portfolio/gallery/misturadores-moinhos/misturador-moinho-01.webp';
import misturadorMoinhoImg02 from '../assets/portfolio/gallery/misturadores-moinhos/misturador-moinho-02.webp';
import misturadorMoinhoImg03 from '../assets/portfolio/gallery/misturadores-moinhos/misturador-moinho-03.webp';
import misturadorMoinhoImg04 from '../assets/portfolio/gallery/misturadores-moinhos/misturador-moinho-04.webp';

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
      alt: 'Componente de caldeiraria em chapa de aço sendo fabricado em oficina industrial.',
    },
    {
      title: 'Montagem e Manutenção Industrial',
      description: 'Intervenções programadas e corretivas, desmontagens, reparos, instalações e suporte técnico em campo.',
      image: manutencaoImg02,
      alt: 'Guindaste realizando içamento de componente na área de evaporação de uma usina sucroenergética.',
    },
    {
      title: 'Estruturas, Galpões e Coberturas',
      description: 'Montagem de estruturas, tesouras, coberturas, ampliações, mezaninos, plataformas e acessos industriais.',
      image: centroTriagemImg01,
      alt: 'Tesouras metálicas montadas sobre pilares durante a execução da cobertura de um galpão.',
    },
    {
      title: 'Transportadores e Movimentação de Materiais',
      description: 'Transportadores de correia, roscas e equipamentos desenvolvidos para movimentação de produtos e materiais.',
      image: atuacaoTransportadores,
      alt: 'Transportador de correia móvel com estrutura metálica e correia com taliscas.',
    },
    {
      title: 'Equipamentos de Pré-Limpeza',
      description: 'Equipamentos para alimentação, peneiramento e preparação inicial de produtos agroindustriais.',
      image: caseEquipamentosAgro,
      alt: 'Equipamento agroindustrial de pré-limpeza com peneira e proteções amarelas.',
    },
    {
      title: 'Exaustores e Sistemas de Exaustão',
      description: 'Exaustores, acionamentos e componentes fabricados para sistemas de ventilação e exaustão industrial.',
      image: atuacaoDutos,
      alt: 'Exaustor centrífugo azul fabricado em oficina com motor elétrico acoplado.',
    },
    {
      title: 'Curvas de Gomos e Dutos Industriais',
      description: 'Curvas segmentadas e componentes metálicos fabricados sob medida para sistemas industriais.',
      image: curvaGomosImg02,
      alt: 'Conjunto de curvas de gomos metálicas fabricadas em diferentes diâmetros e ângulos.',
    },
    {
      title: 'Tanques e Reservatórios',
      description: 'Fabricação, montagem e integração de tanques metálicos conforme a aplicação e as condições operacionais.',
      image: tanqueImg01,
      alt: 'Tanque metálico vertical integrado a tubulações e equipamentos em área industrial.',
    },
    {
      title: 'Misturadores, Moinhos e Linhas Compactas',
      description: 'Equipamentos integrados para alimentação, moagem, mistura e preparação de produtos agroindustriais.',
      image: agroImg06,
      alt: 'Conjunto agroindustrial compacto com alimentador, moinho e misturador vertical.',
    },
  ];

  const cases = [
    {
      title: 'Centro de Triagem de Resíduos Sólidos',
      location: 'São Joaquim da Barra - SP',
      description: 'Registros das etapas de execução do centro de triagem, incluindo fabricação e montagem das tesouras metálicas, instalação da estrutura da cobertura e colocação das telhas.',
      services: ['Fundações', 'Estrutura Metálica', 'Cobertura', 'Piso de Concreto', 'Instalações'],
      image: centroTriagemImg01,
      alt: 'Tesouras metálicas montadas sobre pilares durante a execução da cobertura do centro de triagem.',
      gallery: [
        { src: centroTriagemImg01, alt: 'Tesouras metálicas montadas sobre pilares durante a execução da cobertura do centro de triagem.', caption: 'Montagem das tesouras metálicas sobre a estrutura do centro de triagem.' },
        { src: centroTriagemImg02, alt: 'Tesoura metálica sendo fabricada e soldada no canteiro de obras.', caption: 'Fabricação das tesouras metálicas antes do içamento.' },
        { src: centroTriagemImg03, alt: 'Pilares do centro de triagem preparados para receber a estrutura da cobertura.', caption: 'Estrutura vertical preparada para a montagem das tesouras metálicas.' },
        { src: centroTriagemImg04, alt: 'Tesouras metálicas sendo instaladas sobre os pilares do centro de triagem.', caption: 'Instalação das tesouras metálicas da cobertura.' },
        { src: centroTriagemImg05, alt: 'Estrutura metálica vista por baixo durante a instalação inicial das telhas.', caption: 'Estrutura da cobertura e início da colocação das telhas.' },
        { src: centroTriagemImg06, alt: 'Trabalhadores instalando telhas metálicas na cobertura do centro de triagem.', caption: 'Colocação das telhas metálicas sobre a estrutura.' },
        { src: centroTriagemImg07, alt: 'Vista inferior da cobertura metálica do centro de triagem em execução.', caption: 'Detalhes da estrutura e do fechamento da cobertura.' },
      ],
    },
    {
      title: 'Manutenção, Caldeiraria e Montagem Industrial',
      description: 'Recuperação, fabricação e instalação de componentes e estruturas para operação industrial contínua.',
      services: ['Caldeiraria', 'Manutenção', 'Fabricação', 'Instalação'],
      image: caseManutencao,
      alt: 'Vista geral da área de evaporação industrial com vasos, tubulações e plataformas metálicas.',
      gallery: [
        { src: caseManutencao, alt: 'Vista geral da área de evaporação industrial com vasos, tubulações e plataformas metálicas.', caption: 'Área de evaporação da unidade industrial.' },
        { src: manutencaoImg02, alt: 'Guindaste posicionado diante da área de evaporação para içamento de componente industrial.', caption: 'Içamento de componente de processo na área de evaporação.' },
        { src: manutencaoImg03, alt: 'Operação de içamento vista por outro ângulo entre tubulações e equipamentos da evaporação.', caption: 'Operação de içamento em área industrial com interferências existentes.' },
      ],
    },
    {
      title: 'Estruturas Metálicas e Instalações',
      description: 'Galpões, coberturas, plataformas e ampliações para diferentes necessidades operacionais.',
      services: ['Galpões', 'Coberturas', 'Plataformas', 'Ampliações'],
      image: caseEstruturasInstalacoes,
      alt: 'Mezanino metálico com plataformas e guarda-corpos ao redor de equipamentos industriais.',
      gallery: [
        { src: caseEstruturasInstalacoes, alt: 'Mezanino metálico com plataformas e guarda-corpos ao redor de equipamentos industriais.', caption: 'Mezanino e plataformas para acesso e operação dos equipamentos.' },
        { src: estruturasImg02, alt: 'Vista inferior de mezanino metálico mostrando pilares, vigas e piso em chapa.', caption: 'Estrutura inferior e piso do mezanino metálico.' },
        { src: estruturasImg03, alt: 'Escada metálica de acesso ao mezanino durante a etapa de instalação.', caption: 'Escada de acesso integrada à estrutura do mezanino.' },
      ],
    },
    {
      title: 'Fabricação de Equipamentos e Dispositivos',
      description: 'Fabricação de conjuntos metálicos, peças, dispositivos e gabaritos para aplicações industriais.',
      services: ['Fabricação', 'Peças Sob Medida', 'Dispositivos', 'Gabaritos'],
      image: caseFabricacao,
      alt: 'Módulo de transportador com estrutura metálica, roletes e conjunto de acionamento.',
      gallery: [
        { src: caseFabricacao, alt: 'Módulo de transportador com estrutura metálica, roletes e conjunto de acionamento.', caption: 'Módulo motorizado de transportador em fase de fabricação.' },
        { src: fabricacaoImg02, alt: 'Conjuntos estruturais verdes com diversos roletes metálicos para transportadores.', caption: 'Estruturas e roletes de transportadores fabricados sob medida.' },
        { src: fabricacaoImg03, alt: 'Válvula desviadora galvanizada instalada abaixo de uma moega.', caption: 'Válvula bifurcada para desvio do fluxo de grãos, também conhecida como perna de moça.' },
        { src: fabricacaoImg04, alt: 'Bica galvanizada com transição de seção quadrada para circular.', caption: 'Bica metálica com transição quadrado-redondo.' },
        { src: fabricacaoImg05, alt: 'Outra perspectiva de bica metálica galvanizada com saída circular.', caption: 'Detalhes construtivos da transição de seção quadrada para circular.' },
      ],
    },
    {
      title: 'Obras Civis e Infraestrutura',
      description: 'Execução de fundações, pisos, contenções, alvenarias e complementos para instalações operacionais.',
      services: ['Fundações', 'Pisos', 'Contenções', 'Infraestrutura'],
      image: caseObrasC,
      alt: 'Ampliação industrial com estrutura metálica, cobertura e alvenaria em execução.',
      gallery: [
        { src: caseObrasC, alt: 'Ampliação industrial com estrutura metálica, cobertura e alvenaria em execução.', caption: 'Execução integrada de estrutura metálica, cobertura e alvenaria.' },
        { src: obrasImg02, alt: 'Vista interna de cobertura com tesouras metálicas, terças e telhas.', caption: 'Detalhes das tesouras e do sistema de cobertura metálica.' },
        { src: obrasImg03, alt: 'Perspectiva externa da ampliação com pilares metálicos, cobertura e alvenaria.', caption: 'Estrutura metálica e componentes civis em fase de execução.' },
        { src: obrasImg04, alt: 'Vista interna pelo lado oposto mostrando cobertura metálica e alvenaria em execução.', caption: 'Outra perspectiva da cobertura e dos fechamentos ainda em execução.' },
        { src: obrasImg05, alt: 'Cobertura metálica com tesouras treliçadas e telhas sobre área operacional.', caption: 'Cobertura executada com tesouras metálicas treliçadas.' },
      ],
    },
    {
      title: 'Projetos de Engenharia e Drenagem',
      description: 'Estudos, levantamentos e projetos executivos para drenagem e infraestrutura. A imagem apresentada é ilustrativa e não representa uma obra executada pela H2D.',
      services: ['Projetos', 'Levantamentos', 'Drenagem', 'Infraestrutura'],
      image: drenagemImg01,
      alt: 'Representação ilustrativa de sistema de drenagem superficial e tubulação em área industrial.',
      illustrative: true,
    },
    {
      title: 'Transportadores e Movimentação de Materiais',
      description: 'Fabricação e adequação de transportadores de correia, roscas e conjuntos para movimentação contínua de produtos.',
      services: ['Transportadores', 'Roscas', 'Acionamentos', 'Componentes'],
      image: caseTransportadores,
      alt: 'Transportador helicoidal aberto mostrando calha, eixo e espiras.',
      gallery: [
        { src: caseTransportadores, alt: 'Transportador helicoidal aberto mostrando calha, eixo e espiras.', caption: 'Transportador de rosca helicoidal fabricado para movimentação de materiais.' },
        { src: transportadoresImg02, alt: 'Detalhe frontal de transportador helicoidal com mancal, eixo e espiras.', caption: 'Mancal e conjunto helicoidal vistos pela extremidade do transportador.' },
        { src: transportadoresImg03, alt: 'Vista longitudinal da calha aberta e do helicoide durante a montagem.', caption: 'Calha e rosca helicoidal em fase de fabricação.' },
        { src: transportadoresImg04, alt: 'Transportador helicoidal visto pela extremidade oposta com eixo e mancal.', caption: 'Outra perspectiva do eixo e do conjunto helicoidal.' },
      ],
    },
    {
      title: 'Equipamentos Agroindustriais e Pré-Limpeza',
      description: 'Fabricação, montagem e adequação de equipamentos para alimentação, peneiramento e pré-limpeza de produtos agroindustriais.',
      services: ['Pré-Limpeza', 'Peneiramento', 'Alimentação', 'Montagem'],
      image: caseEquipamentosAgro,
      alt: 'Equipamento agroindustrial de pré-limpeza com peneira e proteções amarelas.',
      gallery: [
        { src: caseEquipamentosAgro, alt: 'Equipamento agroindustrial de pré-limpeza com peneira e proteções amarelas.', caption: 'Equipamento de pré-limpeza para preparação de produtos agroindustriais.' },
        { src: agroImg02, alt: 'Moega de alimentação instalada sobre a estrutura de um equipamento de pré-limpeza.', caption: 'Moega e sistema de alimentação da pré-limpeza.' },
        { src: agroImg03, alt: 'Vista frontal da pré-limpeza mostrando peneira, acionamento e proteções.', caption: 'Conjunto de peneiramento e acionamento da pré-limpeza.' },
        { src: agroImg04, alt: 'Vista lateral e superior do equipamento de pré-limpeza com moegas de alimentação.', caption: 'Superfície peneirante e pontos de alimentação do equipamento.' },
        { src: agroImg05, alt: 'Conjunto de alimentação com moega instalado sobre estrutura metálica azul.', caption: 'Sistema de alimentação associado ao conjunto de pré-limpeza.' },
      ],
    },
    {
      title: 'Mezaninos, Plataformas e Guarda-Corpos',
      description: 'Estruturas auxiliares, acessos e proteções coletivas desenvolvidos conforme as condições de uso e operação.',
      services: ['Mezaninos', 'Plataformas', 'Escadas', 'Guarda-Corpos'],
      image: caseMezaninos,
      alt: 'Guarda-corpos metálicos amarelos instalados em plataforma junto a sistema industrial.',
      gallery: [
        { src: caseMezaninos, alt: 'Guarda-corpos metálicos amarelos instalados em plataforma junto a sistema industrial.', caption: 'Proteção coletiva instalada no perímetro da plataforma.' },
        { src: mezaninosImg02, alt: 'Guarda-corpos amarelos com painéis de tela e rodapés no perímetro da plataforma.', caption: 'Guarda-corpos com tela de proteção e rodapés metálicos.' },
        { src: mezaninosImg03, alt: 'Detalhe dos guarda-corpos junto ao acesso por escada da plataforma.', caption: 'Proteção da plataforma junto à escada de acesso.' },
        { src: mezaninosImg04, alt: 'Vista panorâmica dos guarda-corpos amarelos instalados em plataforma elevada.', caption: 'Guarda-corpos fabricados e instalados pela H2D.' },
      ],
    },
    {
      title: 'Exaustores e Sistemas de Exaustão',
      description: 'Fabricação e montagem de exaustores, acionamentos e componentes para sistemas de ventilação e exaustão industrial.',
      services: ['Exaustores', 'Sistemas de Exaustão', 'Acionamentos', 'Fabricação'],
      image: caseDutos,
      alt: 'Exaustor centrífugo azul visto pela entrada de ar e pelo rotor.',
      gallery: [
        { src: caseDutos, alt: 'Exaustor centrífugo azul visto pela entrada de ar e pelo rotor.', caption: 'Exaustor centrífugo fabricado pela H2D.' },
        { src: dutosImg02, alt: 'Vista lateral do exaustor centrífugo com carcaça, motor e saída de descarga.', caption: 'Outra perspectiva do exaustor e de seu acionamento elétrico.' },
      ],
    },
    {
      title: 'Curvas de Gomos e Componentes para Dutos',
      description: 'Fabricação sob medida de curvas segmentadas e componentes metálicos para condução de ar, gases e materiais em sistemas industriais.',
      services: ['Curvas de Gomos', 'Dutos Industriais', 'Caldeiraria', 'Fabricação Sob Medida'],
      image: dutosImg03,
      alt: 'Curva de gomos em chapa metálica durante a etapa de montagem e ponteamento.',
      gallery: [
        { src: dutosImg03, alt: 'Curva de gomos em chapa metálica durante a etapa de montagem e ponteamento.', caption: 'Curva segmentada durante a etapa de montagem.' },
        { src: curvaGomosImg01, alt: 'Conjunto vertical de curvas de gomos metálicas em diferentes ângulos.', caption: 'Curvas segmentadas fabricadas em diferentes geometrias.' },
        { src: curvaGomosImg02, alt: 'Conjunto de curvas de gomos metálicas em diferentes diâmetros e ângulos.', caption: 'Componentes curvos preparados para aplicações em sistemas industriais.' },
        { src: curvaGomosImg03, alt: 'Curvas de gomos metálicas finalizadas e organizadas em área de fabricação.', caption: 'Curvas metálicas finalizadas em diferentes configurações.' },
      ],
    },
    {
      title: 'Tanques e Reservatórios Industriais',
      description: 'Fabricação, montagem e instalação de tanques e reservatórios metálicos desenvolvidos conforme a aplicação e as condições operacionais.',
      services: ['Tanques Metálicos', 'Reservatórios', 'Caldeiraria', 'Montagem e Instalação'],
      image: tanqueImg01,
      alt: 'Tanque metálico vertical integrado a tubulações e equipamentos em área industrial.',
      gallery: [
        { src: tanqueImg01, alt: 'Tanque metálico vertical integrado a tubulações e equipamentos em área industrial.', caption: 'Tanque vertical instalado e integrado à área de processo.' },
        { src: tanqueImg02, alt: 'Vista ampla de área industrial com tanque, tubulações e conjunto de bombeamento.', caption: 'Integração do tanque com tubulações e equipamentos auxiliares.' },
        { src: tanqueImg03, alt: 'Vista aproximada de tanque metálico, suportes, tubulações e conjunto de bombeamento.', caption: 'Detalhes da instalação e das conexões associadas ao tanque.' },
      ],
    },
    {
      title: 'Misturadores, Moinhos e Linhas Compactas',
      description: 'Fabricação e integração de equipamentos para alimentação, moagem, mistura e preparação de produtos agroindustriais.',
      services: ['Misturadores', 'Moinhos de Martelo', 'Alimentação', 'Linhas Compactas'],
      image: agroImg06,
      alt: 'Conjunto agroindustrial compacto com alimentador, moinho e misturador vertical.',
      gallery: [
        { src: agroImg06, alt: 'Conjunto agroindustrial compacto com alimentador, moinho e misturador vertical.', caption: 'Linha compacta com equipamentos integrados para preparação de produtos.' },
        { src: misturadorMoinhoImg01, alt: 'Misturador vertical conectado a equipamento de alimentação em área de montagem.', caption: 'Conjunto de alimentação e mistura vertical.' },
        { src: misturadorMoinhoImg02, alt: 'Vista aproximada de misturador vertical metálico com acionamento superior.', caption: 'Detalhes construtivos do misturador vertical.' },
        { src: misturadorMoinhoImg03, alt: 'Moinho e conjunto de alimentação montados sobre estrutura metálica.', caption: 'Conjunto de moagem e alimentação de produto.' },
        { src: misturadorMoinhoImg04, alt: 'Vista superior de linha compacta com moinho, transportador e misturador vertical.', caption: 'Disposição integrada dos equipamentos da linha compacta.' },
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
          <div className="portfolio-hero-content max-w-7xl mx-auto relative z-10">
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
                <article key={caseItem.title} className="portfolio-case-card bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[var(--h2d-yellow)]">
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
