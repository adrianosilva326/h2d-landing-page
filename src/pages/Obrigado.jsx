// src/pages/Obrigado.jsx

import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Obrigado() {
  // Este bloco garante que o código só rode uma vez quando a página carregar
  useEffect(() => {
    // Verifica se a função gtag do Google existe na página
    if (typeof window.gtag === 'function') {
      // COLE SEU SNIPPET DE EVENTO AQUI
      window.gtag('event', 'conversion', {
        send_to: 'AW-991605100/edbqCLanq6AbEOzi6tgD',
        value: 0,     // opcional
        currency: 'BRL' // opcional
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-lg">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[var(--h2d-blue-dark)] mb-4">Mensagem Recebida!</h1>
        <p className="text-lg text-gray-700 mb-8">Obrigado por entrar em contato.</p>
        <p className="text-lg text-gray-700 mb-8">Um de nossos especialistas da H2D Engenharia analisará sua mensagem e retornará em breve.</p>
        <Link to="/" className="inline-block bg-[var(--h2d-yellow)] text-[var(--h2d-blue-dark)] hover:bg-yellow-400 font-semibold px-8 py-3 rounded-lg text-lg transition-colors">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
