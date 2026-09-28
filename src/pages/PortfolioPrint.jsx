import { useMemo, useState } from 'react';
import { MetaTags } from '../components/MetaTags';
import { Button } from '../components/ui/button';
import {
  cases,
  clientLogos,
  fieldActivities,
  heroBackground,
  logoH2D,
  portfolioContacts,
  solutions,
  workMethods,
} from '../data/portfolioData';
import './PortfolioPrint.css';

const chunk = (items, size) => Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size));

const getCaseImages = (caseItem) => {
  const candidates = [
    caseItem.image && { src: caseItem.image, alt: caseItem.alt || caseItem.title },
    ...(caseItem.gallery || []),
  ].filter(Boolean);
  const seen = new Set();

  return candidates.filter((image) => {
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  }).slice(0, 3);
};

function PageFooter({ pageNumber }) {
  return (
    <footer className="portfolio-pdf-footer">
      <span>H2D Engenharia • Portfólio Institucional</span>
      <span>{pageNumber}</span>
    </footer>
  );
}

function PortfolioPdfPage({ children, className = '', pageNumber, cover = false }) {
  return (
    <section className={`portfolio-pdf-page ${className}`.trim()}>
      <div className="portfolio-pdf-page-content">{children}</div>
      {!cover && <PageFooter pageNumber={pageNumber} />}
    </section>
  );
}

// As diretivas robots evitam indexação voluntária, mas não constituem autenticação nem controle de acesso.
export default function PortfolioPrint() {
  const [includeClients, setIncludeClients] = useState(true);
  const [selectedClients, setSelectedClients] = useState(() => clientLogos.map((client) => client.name));
  const [isPreparing, setIsPreparing] = useState(false);
  const casePages = useMemo(() => chunk(cases, 2), []);
  const selectedClientLogos = clientLogos.filter((client) => selectedClients.includes(client.name));
  const finalPageNumber = 4 + casePages.length;

  const toggleClient = (name) => {
    setSelectedClients((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  };

  const handlePrint = async () => {
    setIsPreparing(true);

    try {
      if (document.fonts?.ready) await document.fonts.ready;

      const imagePromises = Array.from(document.images).map((image) => {
        if (image.complete) return image.decode?.().catch(() => undefined) || Promise.resolve();
        return new Promise((resolve) => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        });
      });

      await Promise.all(imagePromises);
      window.print();
    } finally {
      setIsPreparing(false);
    }
  };

  return (
    <>
      <MetaTags
        title="Portfólio Institucional para PDF | H2D Engenharia"
        description="Ferramenta interna de preparação do portfólio institucional da H2D Engenharia."
        canonicalPath="/portfolio-pdf"
        imageUrl="/og-image.jpg"
        robots="noindex, nofollow"
      />

      <main className="portfolio-print-route">
        <aside className="portfolio-print-tool" aria-label="Ferramenta interna de preparação do portfólio">
          <div>
            <p className="portfolio-print-tool__eyebrow">USO INTERNO</p>
            <h1>Ferramenta interna de preparação do portfólio</h1>
            <p>Selecione as empresas que devem aparecer antes de gerar o PDF pelo navegador.</p>
          </div>

          <label className="portfolio-print-tool__master">
            <input type="checkbox" checked={includeClients} onChange={(event) => setIncludeClients(event.target.checked)} />
            Incluir seção de empresas atendidas
          </label>

          <div className="portfolio-print-tool__actions">
            <button type="button" onClick={() => setSelectedClients(clientLogos.map((client) => client.name))}>Selecionar todas</button>
            <button type="button" onClick={() => setSelectedClients([])}>Limpar seleção</button>
          </div>

          <div className="portfolio-print-tool__clients">
            {clientLogos.map((client) => (
              <label key={client.name}>
                <input type="checkbox" checked={selectedClients.includes(client.name)} disabled={!includeClients} onChange={() => toggleClient(client.name)} />
                {client.name}
              </label>
            ))}
          </div>

          <Button type="button" onClick={handlePrint} disabled={isPreparing} className="portfolio-print-tool__print">
            {isPreparing ? 'Preparando imagens...' : 'Gerar / Salvar PDF'}
          </Button>
        </aside>

        <div className="portfolio-document">
          <PortfolioPdfPage className="portfolio-pdf-cover" pageNumber={1} cover>
            <img src={heroBackground} alt="Estrutura industrial utilizada como imagem ilustrativa da capa." className="portfolio-pdf-cover__image" />
            <div className="portfolio-pdf-cover__overlay" />
            <div className="portfolio-pdf-cover__body">
              <div className="portfolio-pdf-cover__brand">
                <img src={logoH2D} alt="H2D Engenharia" />
                <strong>H2D ENGENHARIA</strong>
              </div>
              <div className="portfolio-pdf-cover__copy">
                <span>PORTFÓLIO INSTITUCIONAL</span>
                <h1>Da demanda em campo à solução em operação.</h1>
                <p>Engenharia, fabricação, montagem e manutenção para operações industriais e agroindustriais.</p>
              </div>
              <div className="portfolio-pdf-cover__contacts">
                <p><strong>Comercial H2D:</strong> {portfolioContacts.commercialPhone}</p>
                <p><strong>Eng. Adriano:</strong> {portfolioContacts.engineerPhone}</p>
                <p>{portfolioContacts.email}</p>
                <p>{portfolioContacts.city}</p>
              </div>
              <span className="portfolio-pdf-cover__disclaimer">Imagem ilustrativa</span>
            </div>
          </PortfolioPdfPage>

          <PortfolioPdfPage pageNumber={2} className="portfolio-pdf-institutional">
            <header className="portfolio-pdf-section-heading">
              <span>H2D ENGENHARIA</span>
              <h2>Quem somos e como trabalhamos</h2>
            </header>
            <div className="portfolio-pdf-about">
              <p>A H2D Engenharia desenvolve e executa soluções para os setores industrial, agroindustrial, comercial e de infraestrutura.</p>
              <p>Nossa atuação integra engenharia, fabricação, montagem, manutenção e execução de obras, com planejamento e foco no resultado operacional do cliente.</p>
            </div>
            <h3 className="portfolio-pdf-subtitle">Soluções integradas</h3>
            <div className="portfolio-pdf-solutions">
              {solutions.map((solution) => (
                <article key={solution.title}>
                  <h4>{solution.title}</h4>
                  <p>{solution.description}</p>
                </article>
              ))}
            </div>
            <h3 className="portfolio-pdf-subtitle">Método de trabalho</h3>
            <ol className="portfolio-pdf-methods">
              {workMethods.map((method) => (
                <li key={method.step}>
                  <span>{method.step}</span>
                  <div><strong>{method.title}</strong><p>{method.description}</p></div>
                </li>
              ))}
            </ol>
          </PortfolioPdfPage>

          <PortfolioPdfPage pageNumber={3} className="portfolio-pdf-activities">
            <header className="portfolio-pdf-section-heading">
              <span>CAPACIDADE DE EXECUÇÃO</span>
              <h2>Atuação em Campo</h2>
              <p>Soluções executadas conforme a necessidade técnica e operacional de cada cliente.</p>
            </header>
            <div className="portfolio-pdf-activity-grid">
              {fieldActivities.map((activity) => (
                <article key={activity.title}>
                  <img src={activity.image} alt={activity.alt} />
                  <div><h3>{activity.title}</h3><p>{activity.description}</p></div>
                </article>
              ))}
            </div>
          </PortfolioPdfPage>

          {casePages.map((pageCases, pageIndex) => (
            <PortfolioPdfPage key={pageCases[0].title} pageNumber={pageIndex + 4} className="portfolio-pdf-cases">
              <header className="portfolio-pdf-section-heading portfolio-pdf-section-heading--compact">
                <span>PORTFÓLIO TÉCNICO</span>
                <h2>Soluções e experiências técnicas</h2>
              </header>
              <div className="portfolio-pdf-case-list">
                {pageCases.map((caseItem) => {
                  const images = getCaseImages(caseItem);
                  return (
                    <article key={caseItem.title} className="portfolio-pdf-case">
                      <div className={`portfolio-pdf-case__images portfolio-pdf-case__images--${images.length}`}>
                        {images.map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
                        {caseItem.illustrative && <span>Imagem ilustrativa</span>}
                      </div>
                      <div className="portfolio-pdf-case__copy">
                        <div>
                          <h3>{caseItem.title}</h3>
                          {caseItem.location && <p className="portfolio-pdf-case__location">{caseItem.location}</p>}
                        </div>
                        <p>{caseItem.description}</p>
                        <ul>{caseItem.services.map((service) => <li key={service}>{service}</li>)}</ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </PortfolioPdfPage>
          ))}

          <PortfolioPdfPage pageNumber={finalPageNumber} className="portfolio-pdf-closing">
            <div className="portfolio-pdf-closing__top">
              <img src={logoH2D} alt="H2D Engenharia" />
              <span>H2D ENGENHARIA</span>
            </div>
            {includeClients && selectedClientLogos.length > 0 && (
              <section className="portfolio-pdf-clients">
                <h2>Empresas Atendidas pela H2D</h2>
                <p>Experiência construída em serviços, projetos e soluções desenvolvidas para diferentes operações.</p>
                <div>
                  {selectedClientLogos.map((client) => (
                    <article key={client.name}><img src={client.src} alt={client.alt} /><span>{client.name}</span></article>
                  ))}
                </div>
              </section>
            )}
            <section className="portfolio-pdf-closing__cta">
              <p>CONVERSE COM NOSSA EQUIPE</p>
              <h2>Vamos transformar sua demanda em uma solução viável.</h2>
              <div>
                <p><strong>Comercial H2D</strong><span>{portfolioContacts.commercialPhone}</span></p>
                <p><strong>Eng. Adriano</strong><span>{portfolioContacts.engineerPhone}</span></p>
                <p><strong>E-mail</strong><span>{portfolioContacts.email}</span></p>
                <p><strong>Site</strong><span>{portfolioContacts.website}</span></p>
                <p><strong>Localização</strong><span>{portfolioContacts.city}</span></p>
              </div>
            </section>
          </PortfolioPdfPage>
        </div>
      </main>
    </>
  );
}
