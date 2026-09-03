// src/components/ClientLogos.jsx
// VERSÃO REUTILIZÁVEL (com Props)

/**
 * Componente ClientLogos (Reutilizável)
 * Agora, ele recebe 'title', 'subtitle', e 'logosToShow' como propriedades (props).
 * A PÁGINA que o utiliza é quem define o que será exibido.
 * * @param {object} props
 * @param {string} props.title - O título principal da seção (ex: "Quem Confia no Agro")
 * @param {string} props.subtitle - O texto de apoio abaixo do título
 * @param {Array<object>} props.logosToShow - O array de logos para exibir
 */
export function ClientLogos({ title, subtitle, logosToShow = [] }) {
  // Se 'logosToShow' não for fornecido ou estiver vazio, o componente não renderiza nada.
  if (!logosToShow || logosToShow.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* 1. Título e Subtítulo agora são dinâmicos (via props) */}
        <h2 className="text-center text-3xl font-bold text-[var(--h2d-blue-dark)] mb-4">
          {title}
        </h2>
        <p className="text-center text-lg leading-8 text-gray-600 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* 2. Mapeamento usa a lista dinâmica 'logosToShow' */}
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:max-w-none lg:grid-cols-6">
          {logosToShow.map((logo) => (
            <img
              key={logo.alt}
              className="w-full max-h-12 object-contain filter grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
              src={logo.src}
              alt={logo.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}