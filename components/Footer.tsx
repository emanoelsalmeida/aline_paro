
import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold text-stone-800 mb-6 block">Dra. Aline Paro</a>
            <p className="text-stone-500 max-w-sm mb-6 leading-relaxed">
              Médica focada em medicina funcional integrativa e qualidade de vida. Atendimento personalizado para quem busca saúde plena.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-emerald-700 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-emerald-700 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contato@draalineparo.com" className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-600 hover:bg-emerald-700 hover:text-white transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-stone-800 mb-6 uppercase text-xs tracking-widest">Links Rápidos</h4>
            <ul className="space-y-4 text-stone-600">
              <li><a href="#home" className="hover:text-emerald-700">Início</a></li>
              <li><a href="#sobre" className="hover:text-emerald-700">Sobre</a></li>
              <li><a href="#abordagem" className="hover:text-emerald-700">Abordagem</a></li>
              <li><a href="#consultas" className="hover:text-emerald-700">Agendamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-800 mb-6 uppercase text-xs tracking-widest">Informações</h4>
            <ul className="space-y-4 text-stone-600">
              <li className="flex flex-col">
                <span className="font-medium text-stone-800">CRM 2625 AC</span>
                <span className="text-xs">Conselho Regional de Medicina</span>
              </li>
              <li>Cidade, Estado</li>
              <li>Consulta Presencial ou Online</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Dra. Aline Paro. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-stone-400 text-xs uppercase tracking-widest font-medium">
             <a href="#" className="hover:text-stone-600">Privacidade</a>
             <a href="#" className="hover:text-stone-600">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
