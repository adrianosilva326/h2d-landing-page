// src/components/WhatsAppButton.jsx

import React from 'react';

// Este é o componente do botão
export function WhatsAppButton() {
  // --- CONFIGURE AQUI ---
  const phoneNumber = '5516997971044'; // Substitua pelo número da H2D (formato DDI+DDD+Número)
  const message = 'Olá! Vi o site e gostaria de um orçamento.'; // Mensagem inicial
  const googleAdsConversionLabel = 'AW-991605100/vWThCIOssKIbEOzi6tgD'; // NOVO LABEL para esta conversão específica

//   <!-- Event snippet for Contato com WhatsApp conversion page -->
// <script>
//   gtag('event', 'conversion', {'send_to': 'AW-991605100/vWThCIOssKIbEOzi6tgD'});
// </script>


  // Função que será chamada no clique
  const handleWhatsAppClick = () => {
    // 1. Rastreia a conversão no Google Ads
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
          'send_to': googleAdsConversionLabel,
      });
      console.log('Conversão de clique no WhatsApp enviada para o Google Ads.');
    } else {
      console.log('gtag não encontrado. O clique não será rastreado como conversão.');
    }

    // 2. Abre o link do WhatsApp (faremos isso após um pequeno atraso para dar tempo ao rastreamento)
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }, 300); // Atraso de 300 milissegundos
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 animate-bob"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <WhatsAppIcon />
    </button>
  );
}

// Componente do ícone do WhatsApp (SVG) para não depender de bibliotecas externas
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-8 h-8 text-white fill-current"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 .1-59.2-23.1-115-65.1-157.1zM223.9 439.6c-38.2 0-73.9-14.9-100.6-41.5L60.3 422.4l43.4-105.7c-16.8-31.5-25.8-67-25.8-103.3 0-95.2 77.2-172.4 172.4-172.4 46.8 0 90.5 18.4 122.2 50.1 31.7 31.7 50.1 75.4 50.1 122.2 0 95.2-77.2 172.4-172.4 172.4zm105.9-158.4c-6.1-3.1-36.2-17.9-41.9-19.9-5.7-2-9.8-3.1-13.9 3.1-4.1 6.1-15.9 19.9-19.5 24-3.6 4.1-7.2 4.6-13.3 1.5-6.1-3.1-25.8-9.5-49.1-30.3-18.1-16.2-30.6-36.2-34.2-42.3-3.6-6.1-.4-9.3 2.7-12.4 2.8-2.8 6.1-7.2 9.2-10.8 3.1-3.6 4.1-6.1 6.1-10.2 2-4.1 1-7.7-.5-10.8-1.5-3.1-13.9-33.5-19-45.9-5.1-12.4-10.3-10.8-14.4-10.8h-10.2c-4.1 0-10.8 1.5-15.9 7.7-5.1 6.1-19.5 19-19.5 48.6 0 29.6 20 56.4 22.5 60.5 2.5 4.1 42.4 64.6 103.1 91.2 14.4 6.4 27.2 10.2 36.8 13.1 14.1 4.5 27.1 3.8 37.6 2.3 12.1-1.8 36.2-14.9 41.3-29.6 5.1-14.7 5.1-27.1 3.6-29.6-1.5-2.5-5.7-4.1-11.8-7.1z" />
  </svg>
);