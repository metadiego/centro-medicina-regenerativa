'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { trackEvent } from '@/lib/utils';

export default function TratamientosPage() {
  const treatments = [
    {
      id: 0,
      title: 'Medicina Regenerativa',
      shortDescription: 'Técnicas avanzadas para tratar enfermedades del envejecimiento y condiciones musculoesqueléticas.',
      fullDescription: 'Aplicamos técnicas innovadoras para el manejo de lesiones musculoesqueléticas y condiciones crónicas relacionadas con el envejecimiento. Combinamos medicina moderna con enfoques naturales para promover la regeneración y curación integral del cuerpo.',
      benefits: [
        'Tratamiento de lesiones musculoesqueléticas',
        'Manejo integral de condiciones crónicas',
        'Técnicas no invasivas avanzadas'
      ],
      category: 'Medicina Regenerativa',
      conditions: {
        musculoskeletal: [
          'Artritis y osteoartritis',
          'Problemas de rodilla y meniscos',
          'Dolor de espalda baja y ciática',
          'Tendinitis y bursitis',
          'Túnel carpal',
          'Fascitis plantar'
        ],
        chronic: [
          'Diabetes y complicaciones',
          'Problemas cardiovasculares',
          'EPOC y asma',
          'Disfunción eréctil',
          'Fatiga crónica',
          'Enfermedades neurodegenerativas'
        ]
      }
    },
    {
      id: 1,
      title: 'Terapia Laser de Dolor',
      shortDescription: 'Ofrecemos Terapia MLS (Sistema Multionda Sincronizado) y Terapia HILT (High-Intensity Laser Therapy) para lograr una máxima eficacia terapéutica en el alivio del dolor y la recuperación.',
      fullDescription: 'Somos el centro más avanzado en el tratamiento de dolor y recuperación en Puerto Rico. Tanto el láser MLS como el láser HILT actúan en conjunto para proporcionar calentamiento tópico con el fin de elevar la temperatura del tejido, aliviar el dolor y la rigidez muscular y articular, el dolor de artritis o el espasmo muscular, el aumento temporal de la circulación sanguínea local y promover la relajación muscular. Juntas, estas tecnologías proporcionan un tratamiento integral único que combina alivio inmediato con curación a largo plazo.',
      benefits: [
        'Tratamiento permisado por FDA (FDA-Cleared)',
        'Efecto anti-inflamatorio',
        'Efecto analgésico',
        'Acelera la regeneración celular',
        'Mejora de la circulación sanguínea local',
        'Mejora de funcionamiento metabolico y nervioso',
      ],
      category: 'Dolor y Recuperación'
    },
    {
      id: 13,
      title: 'Terapia de Ondas de Choque Extracorpóreas (ESWT)',
      shortDescription: 'Ondas acústicas de alta energía que activan los mecanismos naturales de reparación del cuerpo, alivian el dolor y aceleran la recuperación de lesiones.',
      fullDescription: 'La Terapia de Ondas de Choque Extracorpóreas (ESWT) aplica pulsos acústicos de alta energía sobre el tejido lesionado para provocar una respuesta biológica que favorece la reparación natural del organismo. Estas ondas estimulan la formación de nuevos vasos sanguíneos, promueven la liberación de factores de crecimiento y modulan las terminaciones nerviosas responsables del dolor, acelerando la regeneración de tendones, músculos, ligamentos y hueso. Es una terapia ampliamente respaldada para el tratamiento de lesiones crónicas y deportivas.',
      benefits: [
        'Reduce el dolor y la inflamación',
        'Estimula la regeneración de tendones y tejidos blandos',
        'Acelera la recuperación de lesiones deportivas',
        'Evita o retrasa la necesidad de tratamientos más invasivos',
      ],
      category: 'Dolor y Recuperación'
    },
    {
      id: 12,
      title: 'Terapia de Magnetotransducción Extracorpórea (EMTT®)',
      shortDescription: 'Pulsos electromagnéticos de alta intensidad que estimulan la reparación natural de los tejidos, reducen la inflamación y alivian el dolor.',
      fullDescription: 'La Terapia de Magnetotransducción Extracorpórea (EMTT®) emplea campos electromagnéticos de alta frecuencia e intensidad que penetran profundamente en los tejidos para estimular la actividad bioeléctrica de las células. Esta estimulación favorece la producción de energía celular, ayuda a regular los procesos inflamatorios y activa los mecanismos naturales de reparación y regeneración de músculos, tendones, ligamentos, hueso y articulaciones, disminuyendo el dolor de forma no invasiva y sin requerir tiempo de recuperación.',
      benefits: [
        'Reduce la inflamación y el dolor',
        'Estimula la reparación y regeneración de los tejidos',
        'Favorece la recuperación de tendones, músculos, ligamentos y hueso',
        'No requiere anestesia ni tiempo de recuperación',
      ],
      category: 'Dolor y Recuperación'
    },
    {
      id: 10,
      title: 'Programa de Pérdida de Peso Supervisado',
      shortDescription: 'Programa médico integral para el manejo del peso corporal con agonistas de GLP-1, supervisado por profesionales de la salud.',
      fullDescription: 'Programa de pérdida de peso medicamente supervisado que utiliza medicamentos agonistas del receptor GLP-1, en pacientes que cualifican clínicamente. Cada paciente recibe una evaluación médica completa, un plan personalizado con orientación nutricional y seguimiento continuo. Los resultados pueden variar según cada individuo.',
      benefits: [
        'Evaluación médica completa previa al tratamiento',
        'Seguimiento médico continuo durante todo el programa',
        'Orientación nutricional complementaria',
        'Enfoque integral que va más allá de la medicación',
      ],
      category: 'Manejo de Peso'
    },
    {
      id: 2,
      title: 'Terapia Celular Avanzada',
      shortDescription: 'Tratamiento exclusivo en Puerto Rico, con células madre propias (autólogas)',
      fullDescription: 'Ofrecemos una terapia avanzada con células madre basada en la extracción y activación de VSELs (Very Small Embryonic-Like Stem Cells), células madre propias ultra pequeñas obtenidas de la sangre del paciente. Esta innovadora intervención, aún en fase de desarrollo, tiene como objetivo principal contrarrestar el deterioro asociado al envejecimiento. Los estudios preliminares indican que esta terapia puede contribuir a revertir parámetros de envejecimiento biológico, según lo demuestra la metodología del reloj epigenético de Horvath.',
      benefits: [
        'Rejuvenecimiento celular',
        'Tratamiento de enfermedades resultantes del envejecimiento',
        'Optimización general del bienestar',
        'Tratamiento no invasivo de vanguardia'
      ],
      category: 'Medicina Regenerativa'
    },
    {
      id: 11,
      title: 'Terapia Avanzada con Péptidos',
      shortDescription: 'Protocolos terapéuticos con péptidos bioactivos dirigidos a la regeneración muscular, la recuperación física y el manejo del dolor.',
      fullDescription: 'Utilizamos péptidos bioactivos bajo supervisión médica para apoyar la regeneración muscular, la recuperación de tejidos y el manejo del dolor crónico. Cada protocolo es diseñado individualmente tras una evaluación clínica, garantizando un enfoque seguro y adaptado a las necesidades de cada paciente. Los resultados pueden variar según cada individuo.',
      benefits: [
        'Protocolos personalizados bajo supervisión médica',
        'Apoyo a la regeneración muscular y de tejidos',
        'Manejo complementario del dolor crónico',
        'Recuperación acelerada post-actividad física o lesiones',
      ],
      category: 'Regeneración y Recuperación'
    },
    {
      id: 3,
      title: 'Sueroterapia Laser',
      shortDescription: 'Aplicación de vitamina C en altas dosis combinado con luz láser de frecuencia modulada para potenciar tu salud.',
      fullDescription: 'Tratamiento intravenoso de vitamina C en altas dosis para potenciar el sistema inmunológico. Somos el unico centro en Puerto Rico que ofrece dosis de vitamina C mayores a 25 gramos.',
      benefits: [
        'Potencia el sistema inmunológico',
        'Aumenta la absorción de nutrientes',
        'Aumenta la energía y vitalidad',
        'Detoxifica el organismo',
        'Tratamiento no invasivo'
      ],
      category: 'Bienestar General'
    },
    {
      id: 4,
      title: 'Terapia de Optimización Masculina',
      shortDescription: 'APEX es una plataforma de radiofrecuencia inteligente no invasiva diseñada para optimizar la vitalidad masculina, fortaleciendo la función vascular y estructural en zonas clave para el rendimiento masculino.',
      fullDescription: 'Mediante el uso de radiofrecuencia bipolar de alta precisión, APEX estimula la angiogénesis (formación de nuevos vasos sanguíneos) y la neocolagénesis (síntesis de nuevo colágeno), mejorando la circulación local y reforzando las estructuras que contribuyen a una vida íntima activa, duradera y saludable. Gracias a su tecnología de control térmico en tiempo real y a su aplicador de tamaño reducido, APEX permite tratar tejidos delicados con máxima seguridad, confort y efectividad, sin recurrir a fármacos ni procedimientos invasivos.',
      benefits: [
        'Tratamiento permisado por FDA (FDA-Cleared)',
        'Mayor firmeza, resistencia y funcionalidad',
        'Mejora del flujo sanguíneo y oxigenación local',
        'Fortalecimiento del tejido mediante colágeno',
        'Procedimiento ambulatorio, cómodo y sin dolor',
        'Sin necesidad de recuperación ni uso de consumibles',
      ],
      category: 'Salud Masculina'
    },
    {
      id: 5,
      title: 'Terapia Íntima Femenina',
      shortDescription: 'EmpowerRF combina radiofrecuencia y estimulación muscular eléctrica para el bienestar íntimo femenino integral.',
      fullDescription: 'Esta tecnología con visto bueno de la FDA, es decir, FDA-Cleared, combina radiofrecuencia bipolar, estimulación muscular eléctrica (EMS) y coagulación fraccionada para tratar diversas afecciones del bienestar femenino. La plataforma incluye FormaV (radiofrecuencia para rejuvenecimiento íntimo), VTone (electroestimulación del suelo pélvico) y Morpheus8V (radiofrecuencia fraccionada para el canal vaginal). Los tratamientos no requieren anestesia ni tiempo de recuperación, proporcionando una experiencia cómoda con resultados efectivos y seguros.',
      benefits: [
        'Tratamiento permisado por FDA (FDA-Cleared)',
        'Reducción de incontinencia urinaria de esfuerzo y mixta',
        'Mejora de sequedad vaginal y lubricación natural',
        'Fortalecimiento integral del suelo pélvico',
        'Alivio del dolor pélvico crónico',
        'Mejora de la circulación sanguínea íntima',
        'Sin anestesia ni tiempo de recuperación'
      ],
      category: 'Salud Femenina'
    },
    {
      id: 6,
      title: 'Terapia PEMF',
      shortDescription: 'El futuro del alivio del dolor - Ejercicio Celular Inducido Magnéticamente.',
      fullDescription: 'La Terapia PEMF utiliza campos electromagnéticos pulsados para estimular la función celular y promover la curación natural. Mejora la circulación, reduce la inflamación y acelera los procesos de regeneración del cuerpo.',
      benefits: [
        'Tratamiento permisado por FDA (FDA-Cleared)',
        'Alivio efectivo del dolor',
        'Estimulación de la regeneración celular',
        'Mejora de la circulación',
        'Reducción de la inflamación',
        'Aceleración de la curación'
      ],
      category: 'Medicina Regenerativa'
    },
    {
      id: 7,
      title: 'Cámara Hiperbárica',
      shortDescription: 'Terapia hiperbárica de oxígeno (THO) a 1.4 atmósferas que permite respirar aire enriquecido en oxígeno en ambiente presurizado.',
      fullDescription: 'Terapia que utiliza una cámara presurizada a 1.4 atmósferas donde el paciente respira aire enriquecido en oxígeno. Esta mayor oxigenación promueve la curación acelerada, reduce la inflamación y estimula procesos regenerativos naturales del cuerpo.',
      benefits: [
        'Equipo médico FDA-Cleared',
        'Mejora acelerada en la cicatrización de heridas',
        'Reducción significativa de la inflamación',
        'Fortalecimiento de la respuesta inmune',
        'Aumento del flujo sanguíneo y oxigenación tisular',
        'Recuperación más rápida de lesiones y fracturas',
        'Beneficios neurológicos y mejora cognitiva',
        'Mayor energía y resistencia',
        'Mejora del sueño y reducción del estrés',
        'Efectos anti-envejecimiento y desintoxicación',
        'Alivio de dolores e hinchazón'
      ],
      category: 'Medicina Regenerativa'
    },
    {
      id: 8,
      title: 'Terapéutica de Infrarrojo Lejano “Relax Far Infrared Sauna"',
      shortDescription: 'Alivio del dolor, relajación, mejora de la circulación y reducción de la inflamación.',
      fullDescription: 'La Relax Far Infrared Sauna utiliza radiación infrarroja lejana (FIR, 4–14 micras), emitida por tecnología cerámica patentada, para estimular los procesos naturales de curación del cuerpo. Este calor profundo y seguro alivia el dolor, relaja músculos, mejora la circulación, reduce la inflamación y acelera la recuperación al favorecer la regeneración tisular y el metabolismo celular. A diferencia de otros dispositivos que emplean solo campos electromagnéticos, esta sauna aprovecha la capacidad del infrarrojo lejano para penetrar tejidos y producir un calor agradable y seguro desde adentro, no solo en la superficie de la piel.',
      benefits: [
        'Alivio efectivo del dolor',
        'Relajación profunda',
        'Mejora de la circulación sanguínea',
        'Reducción de la inflamación',
        'Recuperación acelerada',
        'Favorece la eliminación de toxinas y el metabolismo celular'
      ],
      category: 'Medicina Regenerativa'
    },
    {
      id: 9,
      title: 'Terapia Circulatoria AVACEN',
      shortDescription: 'Terapia térmica avanzada que mejora la microcirculación utilizando las arterias arteriovenosas de la palma como portal.',
      fullDescription: 'Dispositivo médico Clase II aprobado por la FDA que combina calor controlado y presión negativa aplicados en la palma de la mano. Utiliza las arterias arteriovenosas de la palma para mejorar la microcirculación y reducir la viscosidad sanguínea de manera segura.',
      benefits: [
        'Equipo médico FDA-Cleared',
        'Alivio temporal de dolor muscular y articular',
        'Mejora significativa de la microcirculación',
        'Reducción de la viscosidad sanguínea',
        'Optimización del suministro de oxígeno',
        'Tratamiento no invasivo libre de medicamentos',
        'Más de 25 millones de tratamientos seguros realizados'
      ],
      category: 'Salud Circulatoria'
    },
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
            
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Nuestros <span className="font-medium text-cyan-600">Tratamientos</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Descubre todos nuestros tratamientos especializados en medicina regenerativa y bienestar integral
              </p>
            </div>
          </div>
        </section>

        {/* Treatments List */}
        <section className="py-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="space-y-8">
              {treatments.map((treatment) => (
                treatment.id === 0 ? (
                  // Special Medicina Regenerativa Introduction Card
                  <div key={treatment.id} className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                    <div className="relative p-8 text-white">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 right-4 text-8xl">🧬</div>
                        <div className="absolute bottom-4 left-4 text-6xl">⚕️</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">🔬</div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="mb-6">
                          <h2 className="text-4xl font-light mb-2">
                            Medicina <span className="font-semibold">Regenerativa</span>
                          </h2>
                          <div className="w-24 h-1 bg-white/30 mb-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h4 className="font-semibold text-white mb-4 text-lg">Qué es:</h4>
                            <p className="text-xl leading-relaxed font-light mb-6 text-cyan-50">
                              La medicina regenerativa es una nueva rama de la ciencia que aplica técnicas avanzadas basadas en la innovación para ayudar a curar enfermedades relacionadas con la vejez, combinando medicina moderna, medicina natural, y tratamientos de vanguardia.
                            </p>
                            
                          </div>

                          <div>
                            <h4 className="font-semibold text-white mb-4 text-lg">Especialidades Principales:</h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                                <div className="font-medium mb-1">Manejo de Dolor</div>
                                <div className="text-cyan-100 text-xs">Dolor crónico y recuperación</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                                <div className="font-medium mb-1">Sistema Músculo-Esquelético</div>
                                <div className="text-cyan-100 text-xs">Artritis, tendinitis, lesiones articulares</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                                <div className="font-medium mb-1">Condiciones Crónicas</div>
                                <div className="text-cyan-100 text-xs">Diabetes, cardiovascular, neurológico</div>
                              </div>
                              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                                <div className="font-medium mb-1">Anti-envejecimiento</div>
                                <div className="text-cyan-100 text-xs">Revitalización celular</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-lg font-light text-cyan-50 mb-4">
                            Descubre cómo nuestros tratamientos especializados pueden transformar tu salud
                          </p>
                          <div className="inline-flex items-center text-white font-medium">
                            <span>Explora nuestros tratamientos</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Treatment Cards
                  <div key={treatment.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-1">
                    <div className="gap-8 p-8 grid lg:grid-cols-3">
                      {/* Content */}
                      <div className="lg:col-span-2">
                        <div className="mb-6">
                          <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                            {treatment.category}
                          </div>
                          <h3 className="text-3xl font-medium text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                            {treatment.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed font-light mb-6 text-lg">
                            {treatment.shortDescription}
                          </p>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-700 leading-relaxed">
                            {treatment.fullDescription}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-medium text-gray-900 mb-4 text-lg">Beneficios Principales:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {treatment.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center text-gray-600">
                                <CheckCircle className="w-4 h-4 text-cyan-500 mr-3 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="flex items-center justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                          {treatment.id === 1 ? (
                            <Image 
                              src="/mls_therapy.png" 
                              alt="Terapia Laser de Dolor MLS" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 2 ? (
                            <Image 
                              src="/stem_cell_therapy.png" 
                              alt="Terapia Células Madre" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 3 ? (
                            <Image 
                              src="/iv_laser.png" 
                              alt="Sueroterapia IV" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 4 ? (
                            <Image 
                              src="/male_optimization_therapy.png" 
                              alt="Terapia de Optimización Masculina" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 5 ? (
                            <Image 
                              src="/femenine.png" 
                              alt="Terapia Íntima Femenina" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 6 ? (
                            <Image 
                              src="/pemf.png" 
                              alt="Terapia PEMF" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 7 ? (
                            <Image 
                              src="/camara_hiperbarica.png" 
                              alt="Cámara Hiperbárica" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 8 ? (
                            <Image 
                              src="/camara_energetica.png" 
                              alt="Cámara Energética" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 9 ? (
                            <Image
                              src="/terapia_circulatoria.png"
                              alt="Terapia Circulatoria AVACEN"
                              fill
                              className="object-cover rounded-2xl"
                            />
                          ) : treatment.id === 10 ? (
                            <Image
                              src="/weight_loss.png"
                              alt="Programa de Pérdida de Peso Supervisado"
                              fill
                              className="object-cover object-top rounded-2xl"
                            />
                          ) : treatment.id === 13 ? (
                            <Image
                              src="/eswt_therapy.png"
                              alt="Terapia de Ondas de Choque Extracorpóreas (ESWT)"
                              fill
                              className="object-cover rounded-2xl"
                            />
                          ) : treatment.id === 12 ? (
                            <Image
                              src="/emtt_therapy.png"
                              alt="Terapia de Magnetotransducción Extracorpórea (EMTT®)"
                              fill
                              className="object-cover rounded-2xl"
                            />
                          ) : treatment.id === 11 ? (
                            <Image
                              src="/peptide_treatments.png"
                              alt="Terapia Avanzada con Péptidos"
                              fill
                              className="object-cover rounded-2xl"
                            />
                          ) : (
                            <div className="text-center text-gray-400">
                              <div className="text-6xl mb-3">🏥</div>
                              <p className="text-sm font-light">Imagen del<br />Tratamiento</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              ¿Interesado en algún <span className="font-medium text-cyan-600">tratamiento</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Contacta con nuestros especialistas para una consulta personalizada
            </p>
            <Link
              href="/#contacto"
              onClick={() => trackEvent('book_consultation', {
                page_location: '/tratamientos',
                button_location: 'call_to_action'
              })}
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agenda tu Consulta
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}