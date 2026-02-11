
import React from 'react';
import { Leaf, Activity, ShieldCheck, Sun } from 'lucide-react';

const Approach: React.FC = () => {
  const steps = [
    {
      icon: <Activity className="text-emerald-600" />,
      title: "Bioquímica Individual",
      desc: "Análise profunda de exames e histórico para entender sua genética e metabolismo único."
    },
    {
      icon: <Leaf className="text-emerald-600" />,
      title: "Estilo de Vida",
      desc: "Ajustes personalizados em sono, nutrição e manejo de estresse para sustentar sua saúde."
    },
    {
      icon: <Sun className="text-emerald-600" />,
      title: "Equilíbrio Hormonal",
      desc: "Otimização metabólica para que você tenha energia e clareza mental todos os dias."
    },
    {
      icon: <ShieldCheck className="text-emerald-600" />,
      title: "Suporte Contínuo",
      desc: "Acompanhamento próximo para ajustes de rota e manutenção dos resultados alcançados."
    }
  ];

  return (
    <section id="abordagem" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/20 blur-3xl -z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Uma abordagem completa e humana</h2>
          <p className="text-stone-400 text-lg">
            Nossa metodologia foca nos quatro pilares fundamentais para uma transformação real e duradoura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-stone-800/50 border border-stone-700 p-8 rounded-3xl hover:bg-emerald-900/20 transition-all group">
              <div className="w-12 h-12 bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{step.title}</h3>
              <p className="text-stone-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
