// src/components/ContactForm.jsx

// Adicionamos useRef, useImperativeHandle e useLocation
import { useState, forwardRef, useRef, useImperativeHandle } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Importa o hook para navegação
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { IMaskInput } from 'react-imask';

// NOVOS IMPORTS DO SHADCN
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';

const services = [
  { id: 'estrutura_metalica', label: 'Estrutura Metálica' },
  { id: 'pre_moldado', label: 'Pré-moldado' },
  { id: 'projeto_completo', label: 'Projeto Completo (Turn-Key)' },
  { id: 'reforma', label: 'Reforma ou Ampliação' },
];

const portfolioServices = [
  { id: 'engenharia_projetos', label: 'Engenharia e Projetos' },
  { id: 'caldeiraria_fabricacao', label: 'Caldeiraria e Fabricação' },
  { id: 'montagem_manutencao', label: 'Montagem e Manutenção' },
  { id: 'estruturas_galpoes_coberturas', label: 'Estruturas, Galpões e Coberturas' },
  { id: 'transportadores', label: 'Transportadores' },
  { id: 'equipamentos_agroindustriais', label: 'Equipamentos Agroindustriais' },
  { id: 'obras_civis_infraestrutura', label: 'Obras Civis e Infraestrutura' },
  { id: 'outro', label: 'Outro' },
];

export const ContactForm = forwardRef(({ variant = 'default' }, ref) => {
  const navigate = useNavigate(); // Inicializa o hook
  const location = useLocation(); // <-- NOVO: Pega a localização atual
  const isPortfolio = variant === 'portfolio';
  const availableServices = isPortfolio ? portfolioServices : services;

  // --- Refs para a Melhoria de Foco ---
  const internalCardRef = useRef(null); // Ref para o Card (para scrollIntoView)
  const firstInputRef = useRef(null); // Ref para o primeiro input (para foco)

  // --- useImperativeHandle (Melhoria Bônus) ---
  // Expõe métodos personalizados para o 'ref' do componente pai (formRef)
  useImperativeHandle(ref, () => ({
    // 1. Método para focar o primeiro input
    focus: () => {
      firstInputRef.current?.focus();
    },
    // 2. Método para permitir o scrollIntoView (que agora usa o internalCardRef)
    scrollIntoView: (args) => {
      internalCardRef.current?.scrollIntoView(args);
    },
    // Expomos o elemento do card para compatibilidade, caso 'scrollIntoView' seja chamado diretamente no .current
    get element() {
      return internalCardRef.current;
    }
  }), []);
  // --- Fim da Melhoria Bônus ---

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tamanhoProjeto: '',
    servicosInteresse: [],
    mensagem: '',
    projeto: '', // Este campo será sobrescrito
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (value) => {
    setFormData({ ...formData, tamanhoProjeto: value });
  };

  const handleCheckboxChange = (serviceId) => {
    const currentServices = formData.servicosInteresse;
    if (currentServices.includes(serviceId)) {
      setFormData({
        ...formData,
        servicosInteresse: currentServices.filter((id) => id !== serviceId),
      });
    } else {
      setFormData({
        ...formData,
        servicosInteresse: [...currentServices, serviceId],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // --- Lógica da Origem Dinâmica ---
    const pathAtual = location.pathname; // Ex: "/galpoes-agronegocio"
    let origemFormatada = 'LP - Site Principal (Formulário Otimizado)'; // Valor Padrão

    if (pathAtual && pathAtual !== '/') {
      // Remove a barra inicial e usa o caminho
      // Resultado: "LP - galpoes-agronegocio (Formulário Otimizado)"
      origemFormatada = `LP - ${pathAtual.substring(1)} (Formulário Otimizado)`;
    }
    // --- Fim da Lógica da Origem ---

    // Formata os dados para o envio
    const servicosSelecionados = isPortfolio
      ? availableServices.filter((service) => formData.servicosInteresse.includes(service.id)).map((service) => service.label).join(', ')
      : formData.servicosInteresse.join(', ');
    const corpoEmail = isPortfolio
      ? `
      Necessidade: ${servicosSelecionados || 'Nenhuma opção selecionada'}
      ---
      Descrição da necessidade:
      ${formData.mensagem}
    `
      : `
      Tamanho do Projeto: ${formData.tamanhoProjeto || 'Não informado'}
      Serviços de Interesse: ${servicosSelecionados || 'Nenhum selecionado'}
      ---
      Mensagem:
      ${formData.mensagem}
    `;

    try {
      const response = await fetch('https://h2dengenharia.com.br/api/enviar-contato.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          empresa: formData.empresa,
          projeto: corpoEmail, // Envia os dados formatados no campo "projeto"
          origem: origemFormatada, // <-- ALTERADO: Usa a origem dinâmica
        }),
      });

      const result = await response.json();

      // --- OTIMIZAÇÃO AQUI ---
      if (result.success === true) {
        navigate('/obrigado'); // Redireciona para a página de obrigado em caso de sucesso
      } else {
        setMessage(result.message || 'Ocorreu um erro. Tente novamente.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erro detalhado da conexão:', error);
      setMessage('Falha na comunicação com o servidor. Verifique sua conexão.');
      setIsSubmitting(false);
    } finally {
      // --- ALTERAÇÃO IMPORTANTE ---
      // Remova o setIsSubmitting(false) daqui, ou deixe-o condicional
      // Mas para este caso, é melhor já ter tratado nos blocos 'else' e 'catch'
      // Então, podemos remover a linha de dentro do finally.
      // setIsSubmitting(false); // <--- REMOVA OU COMENTE ESTA LINHA
    }
  };

  const inputClasses =
    'flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300';

    return (
      // Aplicamos o 'internalCardRef' aqui para o scroll
      <Card ref={internalCardRef} className={`w-full ${isPortfolio ? 'max-w-6xl' : 'max-w-lg'} bg-white/95 backdrop-blur-sm border-gray-200 shadow-2xl`}>
        <CardHeader className={isPortfolio ? 'p-4 text-center md:p-6 md:text-left' : 'text-center p-4'}>
          <CardTitle className="text-2xl lg:text-3xl font-bold text-[var(--h2d-blue-dark)]">Fale com um Engenheiro</CardTitle>
          <CardDescription className="text-gray-600">Preencha abaixo e receba um orçamento sem compromisso.</CardDescription>
        </CardHeader>
        <CardContent className={isPortfolio ? 'p-4 md:p-6' : 'p-4'}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className={isPortfolio ? 'grid grid-cols-1 gap-4 md:grid-cols-2' : 'space-y-4'}>
              {/* Aplicamos o 'firstInputRef' aqui para o foco */}
              <Input ref={firstInputRef} name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} required className={inputClasses} />
              <Input name="email" type="email" placeholder="E-mail profissional" value={formData.email} onChange={handleChange} required className={inputClasses} />
              <IMaskInput
                mask="(00) 00000-0000"
                name="telefone"
                placeholder="Telefone / WhatsApp"
                value={formData.telefone}
                onAccept={(value) => handleChange({ target: { name: 'telefone', value } })}
                className={`${inputClasses} w-full p-2 border rounded-md text-sm`}
                required
              />
              <Input name="empresa" placeholder="Sua empresa (opcional)" value={formData.empresa} onChange={handleChange} className={inputClasses} />
            </div>
  
            {!isPortfolio && (
              <div className="space-y-3">
                <Label className="font-semibold text-gray-800">Qual o tamanho estimado do seu galpão?</Label>
                <RadioGroup onValueChange={handleRadioChange} className="grid grid-cols-2 gap-4">
                  <div><Label className="flex items-center gap-2 font-normal cursor-pointer p-3 border rounded-md bg-white has-[:checked]:bg-yellow-100 has-[:checked]:border-yellow-400"><RadioGroupItem value="ate_500m2" />Até 500m²</Label></div>
                  <div><Label className="flex items-center gap-2 font-normal cursor-pointer p-3 border rounded-md bg-white has-[:checked]:bg-yellow-100 has-[:checked]:border-yellow-400"><RadioGroupItem value="501_a_2000m2" />501 a 2.000m²</Label></div>
                  <div><Label className="flex items-center gap-2 font-normal cursor-pointer p-3 border rounded-md bg-white has-[:checked]:bg-yellow-100 has-[:checked]:border-yellow-400"><RadioGroupItem value="acima_de_2000m2" />Acima de 2.000m²</Label></div>
                  <div><Label className="flex items-center gap-2 font-normal cursor-pointer p-3 border rounded-md bg-white has-[:checked]:bg-yellow-100 has-[:checked]:border-yellow-400"><RadioGroupItem value="nao_sei" />Ainda não sei</Label></div>
                </RadioGroup>
              </div>
            )}
  
            {/* Serviços de Interesse - Checkboxes */}
            <div className="space-y-3">
              <Label className="font-semibold text-gray-800">{isPortfolio ? 'Qual é a sua necessidade?' : 'Quais serviços te interessam?'}</Label>
              <div className={isPortfolio ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-4'}>
                {availableServices.map((service) => (
                  <div key={service.id} className="flex items-center space-x-2">
                    <Checkbox className={isPortfolio ? 'border-2 border-slate-500 bg-white data-[state=checked]:border-[var(--h2d-blue-dark)]' : 'bg-white'} id={service.id} onCheckedChange={() => handleCheckboxChange(service.id)} />
                    <Label htmlFor={service.id} className="font-normal cursor-pointer">{service.label}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mensagem Opcional */}
            <Textarea
              name="mensagem"
              placeholder={isPortfolio ? 'Descreva brevemente sua necessidade, equipamento, estrutura ou serviço.' : 'Se preferir, deixe mais detalhes sobre o projeto aqui...'}
              value={formData.mensagem}
              onChange={handleChange}
              className={`${inputClasses} h-12`}
            />
  
            <Button type="submit" disabled={isSubmitting} className={`${isPortfolio ? 'w-full sm:ml-auto sm:block sm:w-auto sm:min-w-72' : 'w-full'} bg-[var(--h2d-blue-dark)] hover:bg-[var(--h2d-blue-medium)] text-white font-semibold py-3 text-lg cursor-pointer`}>
              {isSubmitting ? 'ENVIANDO...' : 'FALAR COM UM ESPECIALISTA'}
            </Button>
  
            {message && <div className="text-sm p-3 rounded bg-red-100 text-red-700 border border-red-300">{message}</div>}
          </form>
        </CardContent>
      </Card>
    );
});
