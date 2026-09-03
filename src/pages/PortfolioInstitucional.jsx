// src/pages/PortfolioInstitucional.jsx

import { MetaTags } from '../components/MetaTags';
import { useRef } from 'react';
import './PortfolioInstitucional.css';
import { Button } from '../components/ui/button';
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import { ClientLogos } from '../components/ClientLogos';

// Imagens
import logoH2D from '../assets/logoH2D.png';
import heroBackground from '../assets/galpao-moderno-0.jpg';
import industrialImage from '../assets/steel-frame-structure.JPG';

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

export default function PortfolioInstitucional() {
  const formRef = useRef(null);

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    formRef.current?.focus();
  };

  const clientLogos = [
    { src: logoVenturoso, alt: 'Venturo Valentini' },
    { src: logoSiderugicaSJM, alt: 'Siderurgica São Joaquim' },
    { src: logoVittia, alt: 'Vittia' },
    { src: logoVLI, alt: 'VLI' },
    { src: logoAltaMogiana, alt: 'Alta Mogiana' },
    { src: logoSodrugestvo, alt: 'Sodrugestvo' },
    { src: logoBunge, alt: 'Bunge' },
    { src: logoCargill, alt: 'Cargill' },
    { src: logoAmbev, alt: 'Ambev' },
    { src: logoCopercana, alt: 'Copercana' },
    { src: logoVale, alt: 'Vale' },
    { src: logoADM, alt: 'ADM' },
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

  const cases = [
    {
      title: 'Centro de Triagem de Resíduos Sólidos',
      location: 'São Joaquim da Barra - SP',
      description: 'Implantação completa de centro de triagem com fundações, estrutura metálica, cobertura, piso e instalações.',
      services: ['Fundações', 'Estrutura Metálica', 'Cobertura', 'Piso de Concreto', 'Instalações'],
    },
    {
      title: 'Manutenção, Caldeiraria e Montagem Industrial',
      description: 'Recuperação, fabricação e instalação de componentes e estruturas para operação industrial contínua.',
      services: ['Caldeiraria', 'Manutenção', 'Fabricação', 'Instalação'],
    },
    {
      title: 'Estruturas Metálicas e Instalações',
      description: 'Galpões, coberturas, plataformas e ampliações para diferentes necessidades operacionais.',
      services: ['Galpões', 'Coberturas', 'Plataformas', 'Ampliações'],
    },
  ];

  const segments = ['Indústrias e Agroindústrias', 'Usinas e Unidades de Processamento', 'Agronegócio', 'Logística e Armazenagem', 'Comércio e Empresas de Serviços', 'Obras Públicas e Infraestrutura', 'Propriedades Rurais', 'Empreendimentos Privados'];

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
              <div className="flex items-center gap-3">
                <MapPin className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>São Joaquim da Barra - SP</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[var(--h2d-yellow)] flex-shrink-0" size={20} />
                <span>Entre em contato para mais informações</span>
              </div>
            </div>
          </div>
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

        {/* ===== 9. CASES REALIZADOS ===== */}
        <section id="cases" className="py-20 px-4 bg-gray-50 print-page-break">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[var(--h2d-blue-dark)]">Cases Realizados</h2>
              <div className="h-1 w-16 bg-[var(--h2d-yellow)]"></div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[var(--h2d-yellow)]">
                <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-2">{cases[0].title}</h3>
                <p className="text-sm text-[var(--h2d-blue-medium)] font-semibold mb-4">{cases[0].location}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{cases[0].description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600">Serviços envolvidos:</p>
                  <div className="flex flex-wrap gap-2">
                    {cases[0].services.map((service, idx) => (
                      <span key={idx} className="bg-blue-50 text-[var(--h2d-blue-dark)] px-3 py-1 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[var(--h2d-yellow)]">
                <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">{cases[1].title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{cases[1].description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600">Serviços envolvidos:</p>
                  <div className="flex flex-wrap gap-2">
                    {cases[1].services.map((service, idx) => (
                      <span key={idx} className="bg-blue-50 text-[var(--h2d-blue-dark)] px-3 py-1 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-[var(--h2d-yellow)] lg:col-span-2 lg:max-w-xl">
                <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">{cases[2].title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{cases[2].description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-600">Serviços envolvidos:</p>
                  <div className="flex flex-wrap gap-2">
                    {cases[2].services.map((service, idx) => (
                      <span key={idx} className="bg-blue-50 text-[var(--h2d-blue-dark)] px-3 py-1 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

            <ClientLogos logos={clientLogos} />
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
                  <MapPin size={20} className="text-[var(--h2d-yellow)]" />
                  <span>São Joaquim da Barra - SP</span>
                </div>
                <p className="text-gray-300">Visite nosso site e entre em contato conosco</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 no-print">
                <a href="https://wa.me/5516997161155" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-bold px-8 py-3 rounded-lg transition-colors">
                  WhatsApp
                  <Phone size={20} />
                </a>
                <Button onClick={handleScrollToForm} className="bg-white text-[var(--h2d-blue-dark)] hover:bg-gray-100 font-bold px-8 py-3 text-base">
                  Solicitar Contato
                </Button>
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
      <WhatsAppButton />
      <CookieConsentBanner />
    </>
  );
}
