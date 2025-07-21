'use client';

import Header from '@/components/Header';
import { ArrowLeft, Clock, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function TratamientosPage() {
  const treatments = [
    {
      id: 0,
      title: 'Medicina Regenerativa',
      shortDescription: 'Técnicas avanzadas para tratar enfermedades del envejecimiento y condiciones musculoesqueléticas.',
      fullDescription: 'Aplicamos técnicas innovadoras para el manejo de lesiones, inflamación y problemas musculoesqueléticos, así como condiciones crónicas relacionadas con el envejecimiento.',
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
      shortDescription: 'Tratamiento para el dolor e inflamación con tecnología de ondas láser.',
      fullDescription: 'Utilizamos tecnología avanzada de ondas láser para tratar eficazmente el dolor crónico y la inflamación. Este tratamiento no invasivo estimula la regeneración celular y acelera el proceso de curación natural del cuerpo.',
      benefits: [
        'Reducción significativa del dolor',
        'Disminución de la inflamación',
        'Aceleración del proceso de curación',
        'Tratamiento no invasivo',
        'Sin efectos secundarios'
      ],
      duration: '30-45 min',
      sessions: '6-12 sesiones',
      category: 'Dolor y Recuperación'
    },
    {
      id: 2,
      title: 'Sueroterapia Láser',
      shortDescription: 'Aplicación de vitaminas y medicinas naturales que aportan grandes beneficios a tu salud.',
      fullDescription: 'La sueroterapia es un tratamiento que consiste en la aplicación intravenosa de vitaminas, minerales y medicinas naturales. Este método permite una absorción del 100% de los nutrientes, proporcionando beneficios inmediatos para tu salud y bienestar.',
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
      id: 3,
      title: 'Terapia Disfunción Eréctil',
      shortDescription: 'APEX by InMode es un tratamiento clínico avanzado que estimula el flujo sanguíneo, fortalece los músculos pélvicos y mejora la función eréctil.',
      fullDescription: 'APEX by InMode utiliza tecnología electromagnética enfocada de alta intensidad (HIFEM) para estimular contracciones musculares supramáximas en los músculos del suelo pélvico. Este tratamiento revolucionario mejora significativamente la función eréctil de manera natural y no invasiva.',
      benefits: [
        'Mejora de la función eréctil',
        'Fortalecimiento de músculos pélvicos',
        'Estimulación del flujo sanguíneo',
        'Tratamiento no invasivo',
        'Resultados duraderos'
      ],
      duration: '30 min',
      sessions: '6-8 sesiones',
      category: 'Salud Masculina'
    },
    {
      id: 4,
      title: 'Terapia Íntima Femenina',
      shortDescription: 'Empower por InMode es una plataforma médica innovadora que ofrece tratamientos seguros, efectivos y no invasivos.',
      fullDescription: 'Empower por InMode combina tecnología electromagnética (HIFEM) y radiofrecuencia para fortalecer los músculos del suelo pélvico y mejorar la salud íntima femenina. Este tratamiento revolucionario aborda múltiples preocupaciones de la salud íntima de manera segura y efectiva.',
      benefits: [
        'Fortalecimiento del suelo pélvico',
        'Mejora de la incontinencia urinaria',
        'Aumento de la sensibilidad íntima',
        'Tratamiento no invasivo',
        'Recuperación inmediata'
      ],
      duration: '30 min',
      sessions: '6-8 sesiones',
      category: 'Salud Femenina'
    },
    {
      id: 5,
      title: 'Terapia PEMF',
      shortDescription: 'El futuro del alivio del dolor - Ejercicio Celular Inducido Magnéticamente.',
      fullDescription: 'La Terapia de Campo Electromagnético Pulsado (PEMF) representa el futuro del alivio del dolor. Utiliza campos electromagnéticos pulsados para estimular la función celular, mejorando la circulación, reduciendo la inflamación y acelerando la curación natural del cuerpo.',
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
      id: 6,
      title: 'Cámara Hiperbárica',
      shortDescription: 'Tratamientos con la cámara hiperbárica de oxígeno, conoce los beneficios que aporta a la salud.',
      fullDescription: 'La terapia de oxígeno hiperbárico administra oxígeno puro al 100% en un ambiente presurizado. Este tratamiento aumenta significativamente los niveles de oxígeno en la sangre, promoviendo la curación acelerada, la regeneración celular y múltiples beneficios para la salud.',
      benefits: [
        'Aceleración de la curación',
        'Mejora de la oxigenación tisular',
        'Estimulación de la angiogénesis',
        'Fortalecimiento del sistema inmunológico',
        'Reducción de la inflamación'
      ],
      duration: '60-90 min',
      sessions: '20-40 sesiones',
      category: 'Medicina Hiperbárica'
    },
    {
      id: 7,
      title: 'Cámara Energética',
      shortDescription: 'Alivio del dolor, relajación, mejora de la circulación y reducción de la inflamación.',
      fullDescription: 'La cámara energética utiliza campos electromagnéticos de baja frecuencia para estimular los procesos naturales de curación del cuerpo. Esta terapia avanzada proporciona alivio del dolor, mejora la circulación sanguínea y promueve la relajación profunda.',
      benefits: [
        'Alivio efectivo del dolor',
        'Relajación profunda',
        'Mejora de la circulación sanguínea',
        'Reducción de la inflamación',
        'Recuperación acelerada'
      ],
      duration: '20-30 min',
      sessions: '8-15 sesiones',
      category: 'Terapia Energética'
    },
    {
      id: 8,
      title: 'NeuroCatch',
      shortDescription: 'Herramienta neurodiagnóstica que mide objetivamente las mejoras neurológicas en pacientes.',
      fullDescription: 'NeuroCatch es una innovadora herramienta de neurodiagnóstico que utiliza electroencefalografía (EEG) para medir objetivamente la función cerebral y monitorear las mejoras neurológicas. Esta tecnología avanzada permite evaluar y seguir el progreso de tratamientos neurológicos de manera precisa.',
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
                              src="/iv_laser.png" 
                              alt="Sueroterapia IV" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 3 ? (
                            <Image 
                              src="/erectile_dysfunction.png" 
                              alt="Terapia Disfunción Eréctil" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 4 ? (
                            <Image 
                              src="/femenine.png" 
                              alt="Terapia Íntima Femenina" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 5 ? (
                            <Image 
                              src="/pemf.png" 
                              alt="Terapia PEMF" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 6 ? (
                            <Image 
                              src="/camara_hiperbarica.png" 
                              alt="Cámara Hiperbárica" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 7 ? (
                            <Image 
                              src="/camara_energetica.png" 
                              alt="Cámara Energética" 
                              fill 
                              className="object-cover rounded-2xl" 
                            />
                          ) : treatment.id === 8 ? (
                            <Image 
                              src="/neurocatch.png" 
                              alt="NeuroCatch" 
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
    </div>
  );
}