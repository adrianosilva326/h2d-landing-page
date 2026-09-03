// src/components/CookieConsentBanner.jsx
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

export function CookieConsentBanner() {
  /**
   * Função: handleAccept
   * * Esta função é disparada quando o usuário clica em "aceitar".
   * Ela envia o comando 'consent update' para o gtag,
   * informando ao Google que o usuário concedeu permissão
   * para armazenamento de dados de anúncios e analytics.
   */
  const handleAccept = () => {
    // Verifica se a função gtag está disponível
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      });
      console.log('Consentimento do Google atualizado para "granted".');
    } else {
      console.log('Função gtag não encontrada ao aceitar cookies.');
    }
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Entendi e aceito"
      cookieName="h2dEngenhariaCookieConsent"
      style={{ background: '#2B373B', fontSize: '14px' }}
      buttonStyle={{ color: '#4e503b', fontSize: '14px', background: '#FBBF24', borderRadius: '5px', padding: '10px 20px', fontWeight: 'bold' }}
      expires={150}
      // *** ESTA É A LINHA MAIS IMPORTANTE ***
      // Dispara a função handleAccept quando o usuário aceita.
      onAccept={handleAccept}
    >
      Este site utiliza cookies para garantir que você tenha a melhor experiência. Ao continuar navegando, você concorda com a nossa{' '}
      <Link to="/politica-de-privacidade" className="text-yellow-400 hover:text-yellow-300 underline">
        Política de Privacidade
      </Link>
      .
    </CookieConsent>
  );
}
