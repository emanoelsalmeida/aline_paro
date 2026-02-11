
import React from 'react';
import { Heart, Stethoscope, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif text-stone-800 mb-6">Uma nova visão sobre a sua saúde</h2>
          <p className="text-xl text-stone-600 leading-relaxed italic">
            "Minha missão é guiar você em uma jornada de redescoberta da sua vitalidade, unindo o melhor da ciência médica com uma escuta atenta e empática."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group overflow-hidden rounded-3xl">
             <img 
              src="https://genestudio.site/wp-content/uploads/2026/02/unnamed.jpg?auto=format&fit=crop&q=80&w=300" 
              alt="Consulta Médica" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                <Heart className="text-emerald-700" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Medicina Integrativa</h3>
                <p className="text-stone-600">Tratamos o paciente como um todo — corpo, mente e estilo de vida — ao invés de apenas focar em doenças isoladas.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                <Stethoscope className="text-stone-700" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Baseada em Evidências</h3>
                <p className="text-stone-600">Utilizamos protocolos modernos e cientificamente validados para garantir segurança e eficácia no seu tratamento.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                <Zap className="text-emerald-700" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">Foco na Prevenção</h3>
                <p className="text-stone-600">Identificamos desequilíbrios antes que se tornem doenças, promovendo uma longevidade saudável e ativa.</p>
              </div>
            </div>

            <div className="pt-4">
               <p className="text-stone-500 text-sm font-medium">CRM 2625 AC | Atendimento Presencial e por Telemedicina</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
