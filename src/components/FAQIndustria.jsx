// src/components/FAQIndustria.jsx

/**
 * Componente FAQIndustria
 * Responde as dúvidas mais comuns do cliente industrial (quebra de objeções)
 * sobre prazo, normas, garantia e escopo do projeto.
 */
export function FAQIndustria() {
    const faqs = [
      {
        question: "Qual a garantia oferecida para a estrutura metálica?",
        answer: "Oferecemos garantia total contra defeitos de fabricação e de projeto. Nossas estruturas seguem rigorosamente as normas da ABNT (como NBR 8800) e recebem tratamento anticorrosivo (como pintura ou galvanização) adequado para o ambiente industrial, assegurando máxima durabilidade."
      },
      {
        question: "O projeto de engenharia já está incluso no valor?",
        answer: "Sim. Oferecemos a solução 'turn-key'. Nosso time de engenharia desenvolve o projeto estrutural completo, incluindo o memorial de cálculo e a ART (Anotação de Responsabilidade Técnica), garantindo total segurança e conformidade."
      },
      {
        question: "Vocês também executam a fundação (piso/radier) do galpão?",
        answer: "Sim. Podemos gerenciar sua obra do início ao fim, desde o projeto de fundações e terraplanagem até a execução do piso industrial de alta resistência e a montagem final da estrutura. Cuidamos de tudo para você não ter dor de cabeça."
      },
      {
        question: "Qual o tempo médio de fabricação e montagem?",
        answer: "Uma das maiores vantagens do aço é a velocidade. Enquanto a fundação está sendo executada, a estrutura está sendo fabricada em paralelo em nossa oficina. Isso reduz drasticamente o tempo total de obra. Um galpão de médio porte pode ser montado em poucas semanas."
      }
    ];
  
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-6">Dúvidas Frequentes (Indústria)</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">Respostas diretas sobre seu projeto de estrutura metálica.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border-b border-gray-200 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium text-[var(--h2d-blue-dark)] group-hover:text-[var(--h2d-blue-medium)]">
                    {faq.question}
                  </span>
                  <span className="text-[var(--h2d-yellow)] transition-transform duration-200 transform group-open:rotate-45">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" /></svg>
                  </span>
                </summary>
                <p className="text-gray-700 mt-3 ml-2 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }