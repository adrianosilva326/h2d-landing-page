// src/components/AnalyticsTracker.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente: AnalyticsTracker
 * * Propósito: Rastrear visualizações de página (pageviews) em uma
 * Single Page Application (SPA) como o React.
 * * Funcionamento: Ele "escuta" as mudanças na URL (location)
 * causadas pelo React Router. Quando a URL muda, ele dispara
 * um evento 'page_view' manual para o Google Analytics,
 * garantindo que as navegações internas sejam computadas.
 */
const AnalyticsTracker = () => {
  const location = useLocation();
  const measurementId = 'G-PYNBEOCFF2'; // Seu ID do Google Analytics

  useEffect(() => {
    // Recalcula o consentimento sempre que a rota mudar
    const hasConsent =
      document.cookie.includes('h2dEngenhariaCookieConsent=') ||
      (window.google_tag_data && window.google_tag_data.ics);

    // Verifica se a função gtag existe (garantindo que o script carregou)
    if (typeof window.gtag === 'function' && hasConsent) {
      /**
       * Dispara um evento 'page_view'.
       * * Diferente do 'config', o 'event' é usado especificamente
       * para enviar eventos subsequentes (como mudanças de rota no SPA)
       * sem reconfigurar a tag inteira.
       */
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href, // Envia a URL completa
        page_title: document.title, // Envia o título atual da página
        send_to: measurementId, // Especifica para qual ID enviar
      });

      // Log para depuração
      console.log(`Analytics SPA pageview tracked for: ${location.pathname + location.search}`);
    } else {
      console.log('gtag function not found for Analytics SPA tracking.');
    }
  }, [location]); // Adiciona measurementId às dependências

  return null; // Este componente não renderiza nada
};

export default AnalyticsTracker;
