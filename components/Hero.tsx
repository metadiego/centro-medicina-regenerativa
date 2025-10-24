'use client';

import { trackEvent } from '@/lib/utils';

export default function Hero() {
  const scrollToContact = () => {
    trackEvent('book_consultation', {
      page_location: '/',
      button_location: 'hero_section'
    });
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
      style={{backgroundColor: 'rgb(247,247,247)'}}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Potencia tu <span className="font-medium text-cyan-600">Cuerpo</span> y <span className="font-medium text-cyan-600">Mente</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-8"></div>
          </div>
          <p className="text-2xl md:text-3xl text-gray-600 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
            Con tecnología avanzada y medicina regenerativa de vanguardia para transformar tu salud y elevar tu calidad de vida
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              <span className="relative z-10">Agenda tu Consulta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="group inline-flex items-center justify-center px-12 py-5 text-xl font-medium text-gray-700 bg-white rounded-full border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Conocer Tratamientos
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}