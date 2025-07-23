'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Clock, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
      duration: 'Variable',
      sessions: 'Según condición',
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
      title: 'Terapia de Dolor y Recuperación',
      shortDescription: 'Terapia MLS (Sistema Multionda Sincronizado) que combina dos longitudes de onda láser para máxima eficacia terapéutica.',
      fullDescription: 'La terapia MLS utiliza tecnología láser patentada aprobada por la FDA que sincroniza dos longitudes de onda para máxima eficacia terapéutica. Esta tecnología produce efectos superiores de alivio del dolor y reducción de inflamación mediante fotobiomodulación avanzada.',
      benefits: [
        '85-90% de eficacia en alivio del dolor',
        'Bloqueo de señales de dolor al cerebro',
        'Liberación de endorfinas y encefalinas naturales',
        'Reducción significativa de inflamación y edema',
        'Aceleración de regeneración celular',
        'Sin riesgo térmico ni efectos secundarios'
      ],
      duration: '45-60 min',
      sessions: '6-12 sesiones',
      category: 'Dolor y Recuperación'
    },
    {
      id: 2,
      title: 'Terapia de Células Madre',
      shortDescription: 'Tratamiento innovador con células madre autólogas extraídas del propio cuerpo del paciente.',
      fullDescription: 'Terapia innovadora que utiliza células madre autólogas extraídas del propio cuerpo del paciente. Es el tratamiento de células madre legal más avanzado en Estados Unidos, promoviendo la curación natural sin riesgo de rechazo inmunológico.',
      benefits: [
        'Uso de células madre del propio paciente',
        'Sin riesgo de rechazo inmunológico',
        'Tratamiento legal más avanzado en EE.UU.',
        'Regeneración natural de tejidos dañados',
        'Estimulación de procesos de curación propios',
        'Terapia personalizada e individualizada'
      ],
      duration: '60-90 min',
      sessions: '1-3 aplicaciones (según caso)',
      category: 'Medicina Regenerativa'
    },
    {
      id: 3,
      title: 'Sueroterapia',
      shortDescription: 'Aplicación de vitaminas y medicinas naturales que aportan grandes beneficios a tu salud.',
      fullDescription: 'Tratamiento intravenoso de vitaminas, minerales y medicinas naturales con absorción del 100%. Proporciona beneficios inmediatos para la salud y bienestar general del paciente.',
      benefits: [
        'Hidratación profunda',
        'Absorción 100% de nutrientes',
        'Fortalecimiento del sistema inmunológico',
        'Aumento de energía y vitalidad',
        'Detoxificación del organismo'
      ],
      duration: '45-60 min',
      sessions: '1-4 sesiones mensuales',
      category: 'Bienestar General'
    },
    {
      id: 4,
      title: 'Terapia Disfunción Eréctil',
      shortDescription: 'APEX by InMode utiliza tecnología de radiofrecuencia avanzada para restaurar la función eréctil de manera no invasiva.',
      fullDescription: 'APEX by InMode utiliza radiofrecuencia bipolar inteligente para estimular la formación de nuevos vasos sanguíneos y producción de colágeno. Mejora la circulación sanguínea y fortalece las estructuras que sostienen la función eréctil de manera completamente no invasiva.',
      benefits: [
        'Estimulación de nuevos vasos sanguíneos',
        'Mejora de la circulación local',
        'Fortalecimiento del tejido mediante colágeno',
        'Aumento de la rigidez y durabilidad',
        'Tratamiento completamente no invasivo',
        'Sin tiempo de recuperación'
      ],
      duration: '20-30 min',
      sessions: '6-8 sesiones',
      category: 'Salud Masculina'
    },
    {
      id: 5,
      title: 'Terapia Íntima Femenina',
      shortDescription: 'EmpowerRF por InMode combina radiofrecuencia y estimulación muscular eléctrica para el bienestar íntimo femenino integral.',
      fullDescription: 'EmpowerRF combina estimulación muscular eléctrica y radiofrecuencia para el bienestar íntimo femenino integral. Esta tecnología FDA-aprobada estimula la producción de colágeno, fortalece el suelo pélvico y restaura la salud íntima de manera no invasiva.',
      benefits: [
        'Reducción de incontinencia urinaria',
        'Mejora de sequedad vaginal y lubricación',
        'Fortalecimiento del suelo pélvico',
        'Aumento de sensibilidad y función íntima',
        'Estimulación de producción de colágeno',
        'Tratamiento sin tiempo de recuperación'
      ],
      duration: '20-30 min',
      sessions: '3 sesiones (1 mes de separación)',
      category: 'Salud Femenina'
    },
    {
      id: 6,
      title: 'Terapia PEMF',
      shortDescription: 'El futuro del alivio del dolor - Ejercicio Celular Inducido Magnéticamente.',
      fullDescription: 'La Terapia PEMF utiliza campos electromagnéticos pulsados para estimular la función celular y promover la curación natural. Mejora la circulación, reduce la inflamación y acelera los procesos de regeneración del cuerpo.',
      benefits: [
        'Alivio efectivo del dolor',
        'Estimulación de la regeneración celular',
        'Mejora de la circulación',
        'Reducción de la inflamación',
        'Aceleración de la curación'
      ],
      duration: '20-30 min',
      sessions: '10-20 sesiones',
      category: 'Medicina Regenerativa'
    },
    {
      id: 7,
      title: 'Cámara Hiperbárica',
      shortDescription: 'Terapia hiperbárica de oxígeno (THO) a 1.3 atmósferas que permite respirar oxígeno puro en ambiente presurizado.',
      fullDescription: 'Terapia que utiliza una cámara presurizada a 1.3 atmósferas donde el paciente respira oxígeno puro. Esta mayor oxigenación promueve la curación acelerada, reduce la inflamación y estimula procesos regenerativos naturales del cuerpo.',
      benefits: [
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
      duration: '90-120 min',
      sessions: '20-60 sesiones (según condición)',
      category: 'Medicina Regenerativa'
    },
    {
      id: 8,
      title: 'Cámara Energética',
      shortDescription: 'Alivio del dolor, relajación, mejora de la circulación y reducción de la inflamación.',
      fullDescription: 'Utiliza campos electromagnéticos de baja frecuencia para estimular los procesos naturales de curación del cuerpo. Proporciona alivio del dolor, mejora la circulación sanguínea y promueve la relajación profunda.',
      benefits: [
        'Alivio efectivo del dolor',
        'Relajación profunda',
        'Mejora de la circulación sanguínea',
        'Reducción de la inflamación',
        'Recuperación acelerada'
      ],
      duration: '20-30 min',
      sessions: '8-15 sesiones',
      category: 'Medicina Regenerativa'
    },
    {
      id: 9,
      title: 'NeuroCatch',
      shortDescription: 'Herramienta neurodiagnóstica que mide objetivamente las mejoras neurológicas en pacientes.',
      fullDescription: 'Herramienta innovadora de neurodiagnóstico que utiliza electroencefalografía (EEG) para medir objetivamente la función cerebral. Permite evaluar y monitorear el progreso de tratamientos neurológicos de manera precisa y confiable.',
      benefits: [
        'Evaluación objetiva de la función cerebral',
        'Monitoreo preciso del progreso',
        'Diagnóstico neurocomputarizado',
        'Seguimiento personalizado',
        'Tecnología no invasiva'
      ],
      duration: '15-20 min',
      sessions: 'Según evaluación',
      category: 'Neurodiagnóstico'
    },
    {
      id: 10,
      title: 'Terapia Circulatoria AVACEN',
      shortDescription: 'Terapia térmica avanzada que mejora la microcirculación utilizando las arterias arteriovenosas de la palma como portal.',
      fullDescription: 'Dispositivo médico Clase II aprobado por la FDA que combina calor controlado y presión negativa aplicados en la palma de la mano. Utiliza las arterias arteriovenosas de la palma para mejorar la microcirculación y reducir la viscosidad sanguínea de manera segura.',
      benefits: [
        'Alivio temporal de dolor muscular y articular',
        'Mejora significativa de la microcirculación',
        'Reducción de la viscosidad sanguínea',
        'Optimización del suministro de oxígeno',
        'Tratamiento no invasivo libre de medicamentos',
        'Más de 25 millones de tratamientos seguros realizados'
      ],
      duration: '20-30 min',
      sessions: 'Según necesidad del paciente',
      category: 'Salud Circulatoria'
    },
    {
      id: 11,
      title: 'Terapia Neurológica Láser',
      shortDescription: 'Casco ED Weber con 320 LED infrarrojos de 50 mW cada uno para estimular y optimizar la función cerebral.',
      fullDescription: 'El casco ED Weber está equipado con 320 LED infrarrojos de 50 mW cada uno para estimular la función cerebral. Esta tecnología de fototerapia infrarroja penetra profundamente en el tejido cerebral para mejorar la microcirculación y optimizar la función neurológica de manera no invasiva.',
      benefits: [
        'Estimulación de la microcirculación cerebral',
        'Apoyo a los procesos cerebrales naturales',
        'Recarga y optimización de la función neurológica',
        'Penetración profunda de luz infrarroja',
        'Tratamiento completamente no invasivo',
        'Configuraciones personalizables de duración e intensidad'
      ],
      duration: '20-30 min',
      sessions: 'Uso diario recomendado',
      category: 'Neurología'
    },
    {
      id: 12,
      title: 'Terapia de Biorresonancia',
      shortDescription: 'Tratamiento basado en la física cuántica que detecta y neutraliza frecuencias electromagnéticas desequilibradas del cuerpo.',
      fullDescription: 'Terapia basada en la física cuántica que detecta y corrige frecuencias electromagnéticas desequilibradas en el cuerpo. Mediante electrodos especializados, el dispositivo analiza y revierte las frecuencias disarmónicas para restaurar el equilibrio energético natural.',
      benefits: [
        'Tratamiento de alergias y sensibilidades',
        'Apoyo en enfermedades respiratorias',
        'Mejora de condiciones de la piel',
        'Equilibrio de trastornos hormonales',
        'Manejo del dolor de forma natural',
        'Apoyo en problemas digestivos'
      ],
      duration: '45-60 min',
      sessions: 'Plan personalizado según condición',
      category: 'Medicina Cuántica'
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
                                <div className="font-medium mb-1">Musculoesquelético</div>
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
                              <div className="bg-white/10 rounded-lg p-3 backdrop-blur">
                                <div className="font-medium mb-1">Bienestar Integral</div>
                                <div className="text-cyan-100 text-xs">Salud preventiva</div>
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

                        <div className="border-t border-gray-100 pt-6">
                          <div className="flex items-center space-x-8 text-gray-600">
                            <div className="flex items-center">
                              <Clock className="w-5 h-5 mr-2 text-cyan-500" />
                              <span className="font-medium">Duración:</span>
                              <span className="ml-2">{treatment.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-5 h-5 mr-2 text-cyan-500" />
                              <span className="font-medium">Sesiones:</span>
                              <span className="ml-2">{treatment.sessions}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <div className="flex items-center justify-center">
                        <div className="w-64 h-64 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                          {treatment.id === 1 ? (
                            <Image 
                              src="/mls_therapy.png" 
                              alt="Terapia de Dolor y Recuperación MLS" 
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
                              src="/erectile_dysfunction.png" 
                              alt="Terapia Disfunción Eréctil" 
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
                              src="/neurocatch.png" 
                              alt="NeuroCatch" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 10 ? (
                            <Image 
                              src="/terapia_circulatoria.png" 
                              alt="Terapia Circulatoria AVACEN" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 11 ? (
                            <Image 
                              src="/weber_laser_therapy.png" 
                              alt="Terapia Neurológica Láser Weber" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 12 ? (
                            <Image 
                              src="/bioresonance_therapy.png" 
                              alt="Terapia de Biorresonancia" 
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