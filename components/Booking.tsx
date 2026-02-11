
import React from 'react';
import { MessageSquare, Calendar, MapPin, Globe } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="consultas" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 overflow-hidden border border-stone-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-serif text-stone-800 mb-6">Pronta para transformar sua saúde?</h2>
              <p className="text-stone-600 mb-10 text-lg leading-relaxed">
                Agende sua consulta e dê o primeiro passo para uma vida com mais energia e equilíbrio. Atendimentos realizados com tempo e atenção dedicados exclusivamente a você.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold">Consulta Online</p>
                    <p className="text-sm text-stone-500">Telemedicina para todo o Brasil e exterior.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-bold">Presencial</p>
                    <p className="text-sm text-stone-500">Atendimento humanizado no Acre.</p>
                  </div>
                </div>
              </div>

              <div id="contato" className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=68992815110&text&type=phone_number&app_absent=0" 
                  className="bg-emerald-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-800 transition-all font-bold shadow-lg shadow-emerald-700/20"
                >
                  <MessageSquare size={20} /> Agendar via WhatsApp
                </a>
                <button className="border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-stone-50 transition-all font-bold">
                  <Calendar size={20} /> Ver Horários
                </button>
              </div>
            </div>

            <div className="hidden md:block bg-stone-100 relative">
               <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Consultório Médico" 
                className="w-full h-full object-cover grayscale-[20%] opacity-90"
              />
              <div className="absolute inset-0 bg-emerald-900/10"></div>
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl max-w-xs shadow-xl">
                 <p className="text-stone-800 font-serif italic mb-2">"A saúde não é apenas a ausência de doença, é a plenitude do ser."</p>
                 <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Dra. Aline Paro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
