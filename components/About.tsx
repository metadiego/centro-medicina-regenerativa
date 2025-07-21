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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-6xl mb-4">🏥</div>
                <p className="text-lg font-light">Imagen del Centro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}