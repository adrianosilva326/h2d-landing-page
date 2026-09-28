// src/App.jsx

import { MetaTags } from './components/MetaTags'; // 1. IMPORTE O COMPONENTE
import { useState, useRef } from 'react'; // NOVO: Importando os hooks necessários
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Building2, Wrench, FileText, CheckCircle, Star, Phone, Mail, MapPin, X } from 'lucide-react'; // NOVO: Importando ícone X
import { ContactForm } from './components/ContactForm';
import { Link } from 'react-router-dom'; // Importe o Link
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsentBanner } from './components/CookieConsentBanner';

import { TrustBar } from './components/TrustBar';
import { TeamSection } from './components/TeamSection';

import logoH2D from './assets/logoH2D.png';
import galpaoModerno0 from './assets/galpao-moderno-0.jpg';
// import galpaoModerno1 from './assets/galpao-moderno-1.webp';
import galpaoModerno2 from './assets/galpao-moderno-2.jpg';
import galpaoLogistico1 from './assets/galpao-logistico-1.jpg';
import galpaoLogistico2 from './assets/galpao-logistico-2.webp';
import galpaoLogistico3 from './assets/galpao-logistico-3.jpg';
import steel_frame_structure1 from './assets/steel-frame-structure.JPG';
// NOVO: Adicionando mais imagens para a galeria
// --- SUAS NOVAS IMAGENS IMPORTADAS ---
import galpaoEtapa1 from './assets/extra-image-1.jpg';
import galpaoEtapa2 from './assets/extra-image-2.jpg';
import galpaoEtapa3 from './assets/extra-image-3.jpg';
import galpaoEtapa4 from './assets/extra-image-4.jpg';
import detalheSolda from './assets/extra-image-9.jpg';
import estruturaArco from './assets/extra-image-5.jpg';
import estruturaEntardecer from './assets/extra-image-6.jpg';
import estruturaDetalhe from './assets/extra-image-8.jpg';
import estruturaTreliça from './assets/extra-image-10.jpg';

function App() {
  // NOVO: Estados para a galeria e lightbox
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6); // Começamos mostrando 6

  // NOVO: Referência para o formulário
  const formRef = useRef(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // NOVO: Função para rolar e focar no formulário
  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      formRef.current.focus();
    }
  };

  // NOVO: Array completo de projetos
  // --- NOVA GALERIA COM TÍTULOS E DESCRIÇÕES MELHORADOS ---
  const allProjects = [
    { image: galpaoModerno0, title: 'Galpão Industrial Moderno', description: 'Projeto inovador com design contemporâneo' },
    { image: galpaoModerno2, title: 'Complexo Logístico', description: 'Estrutura otimizada para operações logísticas' },
    { image: galpaoLogistico1, title: 'Centro de Distribuição', description: 'Galpão de alta tecnologia para armazenagem' },
    { image: galpaoLogistico2, title: 'Galpão Industrial', description: 'Solução completa para produção industrial' },
    { image: galpaoLogistico3, title: 'Terminal Logístico', description: 'Infraestrutura para grandes operações' },
    { image: steel_frame_structure1, title: 'Projeto Personalizado', description: 'Solução sob medida para necessidades específicas' },
    // Adicionando os novos projetos que ficarão ocultos inicialmente
    { image: galpaoEtapa1, title: 'Case de Sucesso: Centro Logístico', description: 'Etapa 1: Terraplanagem e início da montagem das paredes pré-moldadas e pilares de sustentação.' },
    {
      image: galpaoEtapa2,
      title: 'Case de Sucesso: Centro Logístico',
      description: 'Etapa 2: Avanço da instalação da estrutura metálica principal, definindo a vasta área do complexo.',
    },
    {
      image: galpaoEtapa3,
      title: 'Case de Sucesso: Centro Logístico',
      description: 'Etapa 3: Início da instalação das telhas de cobertura sobre as treliças metálicas já posicionadas.',
    },
    {
      image: estruturaTreliça,
      title: 'Design e Engenharia',
      description: 'Vista arquitetônica da treliça metálica, projetada para máxima resistência e vãos livres amplos.',
    },
    {
      image: detalheSolda,
      title: 'Qualidade nos Detalhes',
      description: 'Nossa equipe em ação, garantindo a segurança e a perfeição em cada ponto de solda da estrutura.',
    },
    {
      image: estruturaEntardecer,
      title: 'Estrutura Imponente',
      description: 'A silhueta do galpão ao entardecer, demonstrando a escala e a beleza da engenharia bem executada.',
    },
    // Projetos que aparecerão ao clicar em "Ver Mais"
    {
      image: galpaoEtapa4,
      title: 'Case de Sucesso: Centro Logístico',
      description: 'Etapa 4: Cobertura quase finalizada, mostrando a agilidade e organização do nosso processo construtivo.',
    },
    {
      image: estruturaDetalhe,
      title: 'Tecnologia Construtiva',
      description: 'Detalhe da conexão entre as vigas e a cobertura, um exemplo da precisão do nosso sistema de montagem.',
    },
    {
      image: estruturaArco,
      title: 'Amplitude e Espaço',
      description: 'Visão interna da estrutura em arco, uma solução que proporciona um espaço interno vasto e sem obstruções.',
    },
  ];

  return (
    <>
      <MetaTags />
      <div className="min-h-screen bg-white">
        {/* NOVO: Lightbox/Modal da Imagem */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 cursor-pointer" onClick={() => setSelectedImage(null)}>
            <img src={selectedImage} alt="Visualização ampliada" className="max-w-[90vw] max-h-[80vh] rounded-lg object-contain" />
            <button className="absolute top-4 right-4 text-white hover:text-gray-300">
              <X size={32} />
            </button>
          </div>
        )}

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[var(--h2d-blue-dark)] to-[var(--h2d-blue-medium)] text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  {/* <logoH2D className="h-8 w-8 text-[var(--h2d-yellow)]" /> */}
                  <img src={logoH2D} alt="Logo da H2D" className="h-10 w-10" />
                  <span className="text-2xl font-bold text-[var(--h2d-yellow)]">H2D</span>
                  <span className="text-xl font-medium">ENGENHARIA</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">Seu Galpão Industrial Entregue no Prazo e Dentro do Orçamento</h1>
                <p className="text-xl text-blue-100">Especialistas em fabricação, execução e projetos de galpões que impulsionam a eficiência e o crescimento do seu negócio. Qualidade, prazo e inovação garantidos.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* ALTERADO: Adicionado onClick */}
                <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-semibold px-8 py-3 text-lg uppercase cursor-pointer">
                  Receba uma Consultoria Gratuita
                </Button>
                <div className="text-sm text-blue-100">✓ Mais de 300 projetos entregues com sucesso. Fale com um especialista sem compromisso.</div>
              </div>
            </div>

            {/* Contact Form - ALTERADO: Passando a ref */}
            <ContactForm ref={formRef} />
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-8">Seus Desafios, Nossa Solução: Construindo o Futuro do Seu Negócio</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">No dinâmico mercado atual, sabemos que construir ou expandir sua infraestrutura é um passo crucial. Você enfrenta desafios como:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {['Prazos apertados que comprometem sua operação?', 'Custos elevados que pesam no orçamento?', 'Falta de expertise para garantir a melhor solução?', 'Necessidade de otimização de espaço e fluxo logístico?'].map((challenge, index) => (
                <Card key={index} className="p-6 border-l-4 border-[var(--h2d-yellow)]">
                  <CardContent className="p-0">
                    <p className="text-gray-700 font-medium">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-lg text-[var(--h2d-blue-dark)] mt-8 font-semibold">Entendemos suas preocupações. A H2D Engenharia está aqui para transformar esses desafios em oportunidades de crescimento.</p>
          </div>
        </section>

        {/* ADICIONE A ALAVANCA 1 AQUI */}
        <TrustBar />

        {/* Solutions Section */}
        <section className="py-16 px-4 bg-[var(--h2d-gray-light)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Soluções Completas em Galpões: Qualidade e Eficiência em Cada Etapa</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">A H2D Engenharia oferece uma abordagem integrada e especializada para todas as suas necessidades em galpões. Cuidamos de cada detalhe para que você se concentre no que realmente importa: o seu negócio.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--h2d-yellow)]">
                <CardContent className="p-8 text-center">
                  <Building2 className="h-16 w-16 text-[var(--h2d-blue-medium)] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">Fabricação de Galpões</h3>
                  <p className="text-gray-700 leading-relaxed">Utilizamos tecnologia de ponta e materiais de alta resistência para a fabricação de estruturas metálicas e pré-moldadas, garantindo durabilidade, segurança e adaptabilidade ao seu projeto.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--h2d-yellow)]">
                <CardContent className="p-8 text-center">
                  <Wrench className="h-16 w-16 text-[var(--h2d-blue-medium)] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">Execução de Galpões</h3>
                  <p className="text-gray-700 leading-relaxed">Nossa equipe altamente qualificada assegura uma construção ágil, segura e dentro do cronograma. Da fundação à cobertura, cada etapa é supervisionada com rigor para entregar um galpão pronto para operar.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--h2d-yellow)]">
                <CardContent className="p-8 text-center">
                  <FileText className="h-16 w-16 text-[var(--h2d-blue-medium)] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)] mb-4">Elaboração de Projetos</h3>
                  <p className="text-gray-700 leading-relaxed">Desenvolvemos projetos personalizados que otimizam o uso do espaço, consideram a logística interna e externa, e incorporam as mais recentes inovações em engenharia, visando a máxima eficiência e sustentabilidade.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ADICIONE A ALAVANCA 2 AQUI */}
        <TeamSection />

        {/* Differentials Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Por Que Escolher a H2D Engenharia? Seus Benefícios, Nossa Prioridade.</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CheckCircle,
                  title: 'Expertise Comprovada',
                  description: 'Mais de duas décadas de experiência e um portfólio robusto de projetos bem-sucedidos em diversos setores.',
                },
                {
                  icon: Star,
                  title: 'Inovação e Tecnologia',
                  description: 'Aplicação das melhores práticas e tecnologias construtivas para garantir soluções modernas, eficientes e sustentáveis.',
                },
                {
                  icon: CheckCircle,
                  title: 'Qualidade e Segurança',
                  description: 'Compromisso inabalável com os mais altos padrões de qualidade e segurança em todas as fases do projeto e execução.',
                },
                {
                  icon: Building2,
                  title: 'Solução Turn-Key',
                  description: 'Gerenciamento completo do projeto, desde a concepção até a entrega das chaves, simplificando o processo para você.',
                },
                {
                  icon: Star,
                  title: 'Atendimento Personalizado',
                  description: 'Entendemos suas necessidades específicas e oferecemos soluções customizadas que se alinham perfeitamente aos seus objetivos de negócio.',
                },
              ].map((differential, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 text-center">
                    <differential.icon className="h-12 w-12 text-[var(--h2d-yellow)] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-[var(--h2d-blue-dark)] mb-3">{differential.title}</h3>
                    <p className="text-gray-700">{differential.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 px-4 bg-[var(--h2d-gray-light)]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Nossos Projetos: Transformando Visões em Realidade</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">Conheça alguns dos galpões que construímos e que hoje impulsionam grandes empresas. Cada projeto é um testemunho do nosso compromisso com a excelência e a inovação.</p>
            </div>

            {/* ALTERADO: Mapeando apenas os projetos visíveis */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {allProjects.slice(0, visibleProjects).map((project, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--h2d-blue-dark)] mb-2">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ALTERADO: Botão "Ver Mais" com lógica */}
            <div className="text-center">
              {visibleProjects < allProjects.length && (
                <Button onClick={() => setVisibleProjects(allProjects.length)} size="lg" className="bg-[var(--h2d-blue-dark)] hover:bg-[var(--h2d-blue-medium)] text-white px-8 py-3 cursor-pointer">
                  VEJA NOSSO PORTFÓLIO COMPLETO
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-[var(--h2d-blue-dark)] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Quem Confia na H2D Engenharia</h2>
              <p className="text-xl text-blue-100">A satisfação dos nossos clientes é a nossa maior conquista. Veja o que eles dizem sobre a experiência de construir com a H2D Engenharia.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: 'A H2D Engenharia superou nossas expectativas! O galpão foi entregue dentro do prazo e com uma qualidade impecável. Um parceiro essencial para o nosso crescimento.',
                  author: 'Carlos Silva',
                  position: 'Diretor de Operações',
                  company: 'LogiCorp Transportes',
                },
                {
                  quote: 'Profissionalismo e expertise técnica de primeira linha. A equipe da H2D entendeu perfeitamente nossas necessidades e entregou uma solução sob medida.',
                  author: 'Ana Paula Costa',
                  position: 'Gerente Industrial',
                  company: 'Indústria Alimentícia Pontes',
                },
                {
                  quote: 'Excelente custo-benefício e atendimento personalizado. Recomendamos a H2D para qualquer empresa que busque qualidade e confiabilidade.',
                  author: 'Ricardo Mendes',
                  position: 'CEO',
                  company: 'Distribuidora Serviços Ltda.',
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[var(--h2d-yellow)] fill-current" />
                      ))}
                    </div>
                    <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-bold text-[var(--h2d-yellow)]">{testimonial.author}</p>
                      <p className="text-blue-100">{testimonial.position}</p>
                      <p className="text-blue-200 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 bg-[var(--h2d-yellow)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Pronto para Impulsionar Seu Negócio?</h2>
            <p className="text-xl text-[var(--h2d-blue-dark)] mb-8">Não deixe seu projeto de galpão para depois. Fale com nossos especialistas e descubra como a H2D Engenharia pode oferecer a solução ideal para suas necessidades.</p>
            {/* ALTERADO: Adicionado onClick */}
            <Button onClick={handleScrollToForm} size="lg" className="bg-[var(--h2d-blue-dark)] hover:bg-[var(--h2d-blue-medium)] text-white font-semibold px-12 py-4 text-lg uppercase cursor-pointer">
              Receba uma Consultoria Gratuita
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[var(--h2d-gray-dark)] text-white py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  {/* <Building2 className="h-8 w-8 text-[var(--h2d-yellow)]" /> */}
                  <img src={logoH2D} alt="Logo da H2D" className="h-10 w-10" />
                  <span className="text-2xl font-bold text-[var(--h2d-yellow)]">H2D</span>
                  <span className="text-xl font-medium">ENGENHARIA</span>
                </div>
                <p className="text-gray-300 mb-6">Especialistas em fabricação, execução e projetos de galpões industriais e logísticos. Transformando visões em realidade há mais de 20 anos.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-[var(--h2d-yellow)]">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[var(--h2d-yellow)]" />
                    <span className="text-gray-300">(16) 99797-1044</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[var(--h2d-yellow)]" />
                    <span className="text-gray-300">contatos@h2dengenharia.com.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[var(--h2d-yellow)]" />
                    <span className="text-gray-300">São Joaquim da Barra, SP - Brasil</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 text-[var(--h2d-yellow)]">Serviços</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Fabricação de Galpões</li>
                  <li>Execução de Galpões</li>
                  <li>Elaboração de Projetos</li>
                  <li>Consultoria Técnica</li>
                  <li>Manutenção e Reformas</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-600 mt-8 pt-8 text-center">
              <p className="text-gray-400">© 2025 H2D Engenharia. Todos os direitos reservados.</p>
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
        </footer>

        {/* ADICIONE O BOTÃO AQUI */}
        <WhatsAppButton />
        <CookieConsentBanner />
      </div>
    </>
  );
}

export default App;
