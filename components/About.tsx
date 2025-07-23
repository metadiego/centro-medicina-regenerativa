import { CheckCircle, Heart, Target } from 'lucide-react';

export default function About() {
  const keyPoints = [
    {
      icon: <CheckCircle className="w-8 h-8 text-cyan-600" />,
      title: 'Terapias de Vanguardia',
      description: 'Ofrecemos tratamientos innovadores y unicos en Puerto Rico, efectivos para tratar condiciones cronico degenerativas y ofrecer una recuperación más rápida y segura.'
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      title: 'Enfoque Integral',
      description: 'Tratamos a cada paciente de manera holística, combinando terapias personalizadas, medicina moderna y medicina natural, para ofrecer un bienestar integral.'
    },
    {
      icon: <Target className="w-8 h-8 text-cyan-600" />,
      title: 'Resultados Comprobados',
      description: 'Nuestros tratamientos han demostrado ser efectivos en mejorar la calidad de vida de miles de pacientes en Puerto Rico y sus alrededores.'
    }
  ];

  return (
    <section id="nosotros" className="py-24" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              ¿Por qué elegir <span className="font-medium text-cyan-600">CMR</span>?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Nos comprometemos a ofrecerte la mejor atención médica con tecnología de vanguardia y un enfoque completamente personalizado
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-20">
          <div className="relative w-full max-w-4xl mx-auto" style={{aspectRatio: '16/9'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-full shadow-lg mx-auto w-fit mb-6">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-gray-700 mb-4">¿Por qué elegir CMR?</h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Conoce nuestra historia, tecnología y compromiso con la excelencia médica
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex justify-center mb-6 transform transition-transform duration-300 hover:scale-110">
                {point.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}