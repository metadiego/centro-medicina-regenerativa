import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Flor Ortiz',
      treatment: 'Tratamiento láser',
      text: 'El tratamiento láser ha sido increíble. He notado una mejora significativa en mi condición y me siento mucho mejor.',
      rating: 5
    },
    {
      name: 'Diana Maldonado',
      treatment: 'Tratamiento para artritis',
      text: 'Después de años sufriendo con artritis, finalmente encontré alivio. Los doctores son excelentes y el tratamiento realmente funciona.',
      rating: 5
    },
    {
      name: 'Miguel A. Reyes',
      treatment: 'Terapia IV y láser',
      text: 'La combinación de terapia IV y láser ha transformado mi vida. Tengo más energía y me siento rejuvenecido.',
      rating: 5
    },
    {
      name: 'Gloria Márquez',
      treatment: 'Terapia IV y vitamina C',
      text: 'Las terapias de vitamina C e IV han fortalecido mi sistema inmunológico. Me siento más saludable que nunca.',
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Testimonios de <span className="font-medium text-cyan-600">Pacientes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Conoce las experiencias reales de nuestros pacientes y cómo hemos transformado su calidad de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white rounded-2xl p-10 relative shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-cyan-300 group-hover:text-cyan-500 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 italic leading-relaxed text-lg font-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-medium text-gray-900 mb-2 text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-cyan-600 font-medium">
                  {testimonial.treatment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}