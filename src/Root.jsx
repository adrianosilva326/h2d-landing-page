// src/Root.jsx

import { Outlet } from 'react-router-dom';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';

// Componente Raiz que inclui o Tracker e as páginas
function Root() {
  return (
    <>
      <AnalyticsTracker />
      <Outlet /> {/* Aqui é onde App ou Obrigado será renderizado */}
    </>
  );
}

export default Root; // <-- ESSA LINHA É A CHAVE!