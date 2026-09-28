// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

// Importando os componentes de arquivos separados
import Root from './Root.jsx';
import App from './App.jsx';
import { Obrigado } from './pages/Obrigado.jsx';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosUso from './pages/TermosUso';
// 1. IMPORTE A NOVA PÁGINA
import ConstrucaoEstruturaMetalica from './pages/ConstrucaoEstruturaMetalica';
// 1. IMPORTE A NOVA PÁGINA DO AGRO AQUI
import GalpoesAgro from './pages/GalpoesAgro';
import GalpoesIndustriais from './pages/GalpoesIndustriais';
import PortfolioInstitucional from './pages/PortfolioInstitucional';
import PortfolioPrint from './pages/PortfolioPrint';

// Cria o roteador com as duas rotas
const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: '/', element: <App /> },
      { path: '/obrigado', element: <Obrigado /> },
      { path: '/politica-de-privacidade', element: <PoliticaPrivacidade /> },
      { path: '/termos-de-uso', element: <TermosUso /> },
      // 2. ADICIONE A NOVA ROTA
      { path: '/construcao-estrutura-metalica', element: <ConstrucaoEstruturaMetalica /> },
      // 3. ADICIONE A ROTA DO AGRO AQUI
      { path: '/galpoes-agronegocio', element: <GalpoesAgro /> },
      { path: '/galpoes-industriais', element: <GalpoesIndustriais /> },
      { path: '/portfolio', element: <PortfolioInstitucional /> },
      { path: '/portfolio-pdf', element: <PortfolioPrint /> },
      // GalpoesIndustriais.jsx
      // VOCÊ PODE ADICIONAR QUANTAS QUISER:
      // { path: '/galpoes-agronegocio', element: <PaginaGalpoesAgro /> },
      // { path: '/galpoes-logisticos', element: <PaginaGalpoesLogistica /> },
      // { path: '/coberturas-metalicas', element: <PaginaCoberturas /> },
    ],
  },
]);

// 3. ATUALIZE A RENDERIZAÇÃO PARA USAR O COMPONENTE ROOT
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
