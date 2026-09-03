// src/components/FAQAgro.jsx

/**
 * Componente FAQAgro
 * Responde as dúvidas mais comuns do produtor rural (quebra de objeções)
 * antes que ele precise perguntar, aumentando a chance de conversão.
 */
export function FAQAgro() {
  const faqs = [
    {
      question: 'Qual o tempo médio para montar um barracão de médio porte?',
      answer: 'Com a fundação pronta, nossa equipe especializada monta a estrutura principal do galpão em tempo recorde, geralmente entre 15 a 30 dias, dependendo do tamanho e complexidade.',
    },
    {
      question: 'Vocês atendem a minha fazenda? Qual a região de atendimento?',
      answer: 'Nossa sede está em São Joaquim da Barra - SP, e atendemos com excelência toda a região, incluindo o sul de Minas Gerais e o triângulo mineiro. Consulte-nos sobre a sua localização.',
    },
    {
      question: 'Eu preciso ter a fundação (piso/radier) pronta?',
      answer: 'Nós podemos cuidar de tudo! Oferecemos a solução completa (turn-key), incluindo o projeto e a execução da fundação, ou podemos apenas montar a estrutura metálica sobre a fundação que você já executou.',
    },
    {
      question: 'Qual a garantia da estrutura contra ferrugem?',
      answer: 'Todas as nossas estruturas recebem tratamento anticorrosivo de alta performance, ideal para o ambiente de fazenda. Oferecemos garantia total contra defeitos de fabricação e durabilidade.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Dúvidas Frequentes do Produtor</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">Respostas rápidas para as perguntas mais comuns sobre seu galpão rural.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group border-b border-gray-200 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span className="text-lg font-medium text-[var(--h2d-blue-dark)] group-hover:text-[var(--h2d-blue-medium)]">{faq.question}</span>
                <span className="text-[var(--h2d-yellow)] transition-transform duration-200 transform group-open:rotate-45">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </summary>
              <p className="text-gray-700 mt-3 ml-2 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
