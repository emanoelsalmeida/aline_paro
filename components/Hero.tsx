
import React from 'react';
import { ArrowRight, Video, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F7F5F2]">
      {/* Decorative background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] bg-stone-200 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-8 duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-medium text-sm mb-6 border border-emerald-100 uppercase tracking-widest">
            Medicina Funcional Integrativa
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-800 leading-[1.1] mb-6">
            Transformando vidas através do <span className="italic text-emerald-800">cuidado personalizado</span>.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
            Uma abordagem que vai além dos sintomas, focando na raiz do problema para promover saúde, bem-estar e longevidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#contato" className="bg-emerald-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all shadow-lg hover:shadow-emerald-200 group">
              Começar minha jornada <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-6 px-4">
              <div className="flex items-center gap-2 text-stone-600">
                <Video size={20} className="text-emerald-700" />
                <span className="text-sm font-medium">Online</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Calendar size={20} className="text-emerald-700" />
                <span className="text-sm font-medium">Presencial</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 py-4 border-t border-stone-200 max-w-xs">
            <span className="text-sm font-bold text-stone-500 uppercase tracking-tighter">Dra. Aline Paro</span>
            <div className="h-4 w-[1px] bg-stone-300"></div>
            <span className="text-sm text-stone-500">CRM 2625 AC</span>
          </div>
        </div>

        <div className="order-1 md:order-2 relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] max-w-md mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Dra. Aline Paro" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative frame elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-200 rounded-2xl -z-0"></div>
          <div className="absolute -top-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] hidden sm:block">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs font-medium text-stone-500 leading-tight">"O atendimento da Dra. Aline mudou minha percepção de saúde."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
