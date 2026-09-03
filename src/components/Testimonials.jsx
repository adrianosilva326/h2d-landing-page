// src/components/Testimonials.jsx
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

// Você pode criar um array de depoimentos para adicionar mais no futuro
const testimonialData = {
  text: "A H2D Engenharia superou nossas expectativas. O profissionalismo, a qualidade técnica e o cumprimento do prazo foram impecáveis. Recomendo fortemente!",
  name: "João da Silva",
  title: "Diretor de Operações, Logística XYZ",
};

// const testimonialData2 = {
//   text: "O galpão que a H2D construiu para nossa fazenda ficou excelente. A estrutura é robusta e a obra foi entregue antes do prazo da colheita. Recomendo!",
//   name: "Carlos Silveira",
//   title: "Gerente, Fazenda Santa Maria",
// };

export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--h2d-blue-dark)] mb-12">O que nossos clientes dizem</h2>
        <Card className="bg-gray-50 border-gray-200 shadow-lg">
          <CardContent className="p-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />)}
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "{testimonialData.text}"
            </blockquote>
            <p className="font-bold text-lg text-[var(--h2d-blue-dark)]">{testimonialData.name}</p>
            <p className="text-gray-500">{testimonialData.title}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}