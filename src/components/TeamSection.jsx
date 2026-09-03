// src/components/TeamSection.jsx

// Lembre-se de criar uma imagem com os dois engenheiros e importar aqui
import teamPhoto from '../assets/foto-engenheiros01.png'; // Crie e coloque essa imagem na pasta 'assets'

export function TeamSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-4">
          Fale Diretamente com Nossos Especialistas
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Na H2D, seu projeto é liderado por engenheiros experientes. Garantimos o acompanhamento técnico e a dedicação que sua obra merece, do início ao fim.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          {/* Coluna da Imagem */}
          <div>
            <img 
              src={teamPhoto} 
              alt="Engenheiros Adriano Vieira e André Luiz Vieira da H2D Engenharia"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Coluna das Informações */}
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)]">Eng. Adriano Vieira da Silva</h3>
              <p className="text-md text-[var(--h2d-blue-medium)] font-semibold">Eng. Civil – H2D Engenharia</p>
              <p className="text-sm text-gray-600">CREA/SP 5071220XXX</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--h2d-blue-dark)]">Eng. André Luiz Vieira da Silva</h3>
              <p className="text-md text-[var(--h2d-blue-medium)] font-semibold">Eng. Produção e Seg. do Trabalho – H2D Engenharia</p>
              <p className="text-sm text-gray-600">CREA/SP 2607135XXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}