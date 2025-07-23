import Header from '@/components/Header';
import { Star, Quote, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TestimoniosPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Flor Ortiz',
      treatment: 'Tratamiento láser',
      text: 'El tratamiento láser ha sido increíble. He notado una mejora significativa en mi condición y me siento mucho mejor. Los doctores son muy profesionales y el equipo está siempre dispuesto a ayudar.',
      rating: 5,
      location: 'San Juan, PR',
      date: 'Enero 2025'
    },
    {
      id: 2,
      name: 'Diana Maldonado',
      treatment: 'Tratamiento para artritis',
      text: 'Después de años sufriendo con artritis, finalmente encontré alivio. Los doctores son excelentes y el tratamiento realmente funciona. No puedo estar más agradecida con todo el equipo de CMR.',
      rating: 5,
      location: 'Bayamón, PR',
      date: 'Diciembre 2024'
    },
    {
      id: 3,
      name: 'Miguel A. Reyes',
      treatment: 'Terapia IV y láser',
      text: 'La combinación de terapia IV y láser ha transformado mi vida. Tengo más energía y me siento rejuvenecido. El personal médico es excepcional y las instalaciones son de primera clase.',
      rating: 5,
      location: 'Carolina, PR',
      date: 'Noviembre 2024'
    },
    {
      id: 4,
      name: 'Gloria Márquez',
      treatment: 'Terapia IV y vitamina C',
      text: 'Las terapias de vitamina C e IV han fortalecido mi sistema inmunológico. Me siento más saludable que nunca. La atención personalizada que recibo en CMR es extraordinaria.',
      rating: 5,
      location: 'Guaynabo, PR',
      date: 'Octubre 2024'
    },
    {
      id: 5,
      name: 'Carlos Fernández',
      treatment: 'Cámara Hiperbárica',
      text: 'La terapia de oxígeno hiperbárico me ha ayudado enormemente con mi recuperación post-quirúrgica. El proceso de curación se aceleró significativamente y me siento renovado.',
      rating: 5,
      location: 'Caguas, PR',
      date: 'Septiembre 2024'
    },
    {
      id: 6,
      name: 'María José Santos',
      treatment: 'Terapia PEMF',
      text: 'El dolor crónico que tenía por años ha disminuido considerablemente con la terapia PEMF. Es increíble cómo la tecnología puede ayudar de manera tan efectiva y natural.',
      rating: 5,
      location: 'Ponce, PR',
      date: 'Agosto 2024'
    },
    {
      id: 7,
      name: 'Roberto Vega',
      treatment: 'Sueroterapia Laser',
      text: 'La sueroterapia me ha dado un nivel de energía que no había sentido en años. Mi rendimiento laboral y personal ha mejorado notablemente. Recomiendo CMR al 100%.',
      rating: 5,
      location: 'Arecibo, PR',
      date: 'Julio 2024'
    },
    {
      id: 8,
      name: 'Ana Sofía Rivera',
      treatment: 'Terapia Íntima Femenina',
      text: 'El tratamiento Empower ha mejorado significativamente mi calidad de vida. El equipo médico me hizo sentir cómoda desde el primer día. Los resultados superaron mis expectativas.',
      rating: 5,
      location: 'Mayagüez, PR',
      date: 'Junio 2024'
    },
    {
      id: 9,
      name: 'José M. Hernández',
      treatment: 'Terapia MLS Láser',
      text: 'Sufría de dolor severo de espalda que me impedía vivir una vida normal. Gracias a la terapia MLS láser he recuperado mi movilidad y puedo disfrutar de actividades que pensé nunca volvería a hacer.',
      rating: 5,
      location: 'San Juan, PR',
      date: 'Mayo 2024'
    },
    {
      id: 10,
      name: 'Carmen L. Vázquez',
      treatment: 'Terapia NPT Células Madre',
      text: 'Perdí gran parte de mi visión por glaucoma y los doctores no me daban esperanza. Con la terapia NPT de células madre he recuperado visión significativamente y mi calidad de vida ha mejorado enormemente.',
      rating: 5,
      location: 'Bayamón, PR',
      date: 'Abril 2024'
    },
    {
      id: 11,
      name: 'Rafael Santos',
      treatment: 'NPT Células Madre y Medicina Sistémica',
      text: 'Los médicos querían amputar mi pierna por pie diabético y me dieron por perdido. Gracias a la terapia NPT de células madre y las fórmulas herbales sistémicas logré salvar mi pierna y recuperar mi vida.',
      rating: 5,
      location: 'Caguas, PR',
      date: 'Marzo 2024'
    },
    {
      id: 12,
      name: 'Miriam Ortega',
      treatment: 'Células Madre y Terapia MLS',
      text: 'La artritis severa me tenía postrada en cama sin poder moverme. Con la combinación de células madre y terapia MLS láser ahora vivo una vida completamente normal y sin dolor.',
      rating: 5,
      location: 'Ponce, PR',
      date: 'Febrero 2024'
    },
    {
      id: 13,
      name: 'Luis A. Morales',
      treatment: 'Fórmulas Herbales y Células Madre',
      text: 'Tenía problemas severos en los riñones y mis marcadores sanguíneos estaban críticos. Después del tratamiento con fórmulas herbales y células madre, mis análisis mejoraron significativamente.',
      rating: 5,
      location: 'Arecibo, PR',
      date: 'Enero 2024'
    },
    {
      id: 14,
      name: 'Eduardo Ramírez',
      treatment: 'Tratamiento APEX',
      text: 'La disfunción eréctil había arruinado mi vida matrimonial y mi autoestima. Gracias al tratamiento APEX recuperé mi vigor sexual y mi vida íntima. Mi esposa y yo estamos más felices que nunca.',
      rating: 5,
      location: 'Guaynabo, PR',
      date: 'Diciembre 2023'
    },
    {
      id: 15,
      name: 'Isabel Maldonado',
      treatment: 'Máquina EmpowerRF',
      text: 'Sufría de incontinencia urinaria severa y tenía que usar pañales especiales todos los días. Con el tratamiento EmpowerRF resolví completamente el problema y recuperé mi dignidad y confianza.',
      rating: 5,
      location: 'Carolina, PR',
      date: 'Noviembre 2023'
    },
    {
      id: 16,
      name: 'Ramón Figueroa',
      treatment: 'Células Madre y Terapia Neurológica',
      text: 'Me diagnosticaron Parkinson y pensé que mi vida había terminado. Con células madre y terapia neurológica he tenido una mejora del 30% en mis síntomas y he recuperado esperanza en el futuro.',
      rating: 5,
      location: 'Mayagüez, PR',
      date: 'Octubre 2023'
    }
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Testimonios de <span className="font-medium text-cyan-600">Pacientes</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Conoce las experiencias reales de nuestros pacientes y cómo hemos transformado su calidad de vida
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Experiencias <span className="font-medium text-cyan-600">Reales</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Escucha directamente de nuestros pacientes sobre su transformación de salud
              </p>
            </div>
            
            <div className="relative w-full" style={{aspectRatio: '16/9'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-xl border border-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-8 rounded-full shadow-lg mx-auto w-fit mb-6">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-700 mb-4">Video de Testimonios</h3>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    Próximamente: Testimonios en video de nuestros pacientes satisfechos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="group bg-white rounded-2xl p-10 relative shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
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
                    <p className="text-cyan-600 font-medium mb-2">
                      {testimonial.treatment}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{testimonial.location}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Nuestros <span className="font-medium text-cyan-600">Resultados</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-4xl font-light text-cyan-600 mb-2">10,000+</div>
                <div className="text-gray-700 font-medium">Pacientes Satisfechos</div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-light text-cyan-600 mb-2">95%</div>
                <div className="text-gray-700 font-medium">Tasa de Satisfacción</div>
              </div>
              <div className="p-8">
                <div className="text-4xl font-light text-cyan-600 mb-2">20+</div>
                <div className="text-gray-700 font-medium">Años Sirviendo a Puerto Rico</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              ¿Listo para ser nuestro próximo <span className="font-medium text-cyan-600">testimonio</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Únete a los miles de pacientes que han transformado su salud con CMR
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agenda tu Consulta
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}