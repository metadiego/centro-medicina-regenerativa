'use client';

import Image from 'next/image';

export default function Services() {
  const treatments = [
    {
      image: '/mls_therapy.png',
      imageType: 'file',
      title: 'Terapia del Dolor',
      description: 'Protocolos personalizados para artritis, dolor crónico, lesiones deportivas y enfermedades degenerativas con tecnología avanzada.',
      features: ['Tratamiento personalizado', 'Tecnología avanzada', 'Resultados comprobados']
    },
    {
      image: '/stem_cell_therapy.png',
      imageType: 'file',
      title: 'Terapia Células Madre',
      description: 'Tratamientos regenerativos utilizando células madre para la reparación y regeneración de tejidos dañados.',
      features: ['Medicina regenerativa', 'Células madre', 'Reparación tisular']
    },
    {
      image: '/iv_laser.png',
      imageType: 'file',
      title: 'Terapia Láser Intravenoso',
      description: 'Terapia láser de última generación aplicada por vía intravenosa para mejorar la circulación y oxigenación.',
      features: ['Láser avanzado', 'Mejora circulación', 'Oxigenación celular']
    }
  ];

  const handleVerMas = () => {
    window.location.href = '/tratamientos';
  };

  return (
    <section id="servicios" className="py-24" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Nuestros <span className="font-medium text-cyan-600">Tratamientos</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Tratamientos especializados de medicina regenerativa diseñados para transformar tu salud y bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {treatments.map((treatment, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/10"></div>
                {treatment.imageType === 'emoji' ? (
                  <div className="text-7xl transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {treatment.image}
                  </div>
                ) : (
                  <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-300 z-10">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">
                  {treatment.description}
                </p>
                <ul className="space-y-2">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleVerMas}
            className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="relative z-10">Ver Más Tratamientos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}