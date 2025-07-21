import Header from '@/components/Header';
import { CheckCircle, Heart, Target, ArrowLeft, Award, Users, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function NosotrosPage() {
  const keyPoints = [
    {
      icon: <CheckCircle className="w-12 h-12 text-cyan-600" />,
      title: 'Terapias de Vanguardia',
      description: 'Ofrecemos tratamientos innovadores y únicos en Puerto Rico, efectivos para tratar condiciones crónico degenerativas y ofrecer una recuperación más rápida y segura.'
    },
    {
      icon: <Heart className="w-12 h-12 text-orange-600" />,
      title: 'Enfoque Integral',
      description: 'Tratamos a cada paciente de manera holística, combinando terapias personalizadas, medicina moderna y medicina natural, para ofrecer un bienestar integral.'
    },
    {
      icon: <Target className="w-12 h-12 text-cyan-600" />,
      title: 'Resultados Comprobados',
      description: 'Nuestros tratamientos han demostrado ser efectivos en mejorar la calidad de vida de miles de pacientes en Puerto Rico y sus alrededores.'
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-cyan-600" />,
      title: 'Excelencia Médica',
      description: 'Mantenemos los más altos estándares de calidad en todos nuestros tratamientos y servicios médicos.'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: 'Atención Personalizada',
      description: 'Cada paciente recibe un plan de tratamiento único diseñado específicamente para sus necesidades.'
    },
    {
      icon: <Shield className="w-8 h-8 text-cyan-600" />,
      title: 'Seguridad y Confianza',
      description: 'Utilizamos protocolos médicos rigurosos para garantizar la seguridad y efectividad de nuestros tratamientos.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-600" />,
      title: 'Innovación Constante',
      description: 'Incorporamos continuamente las últimas tecnologías y técnicas en medicina regenerativa.'
    }
  ];

  // Team members data - currently not displayed but available for future use
  // const teamMembers = [
  //   {
  //     name: 'Dr. Carlos Medina',
  //     role: 'Director Médico',
  //     specialty: 'Medicina Regenerativa',
  //     experience: '15+ años de experiencia',
  //     description: 'Especialista en medicina regenerativa con certificaciones internacionales en terapias avanzadas.'
  //   },
  //   {
  //     name: 'Dra. Ana Rodríguez',
  //     role: 'Especialista en Dolor',
  //     specialty: 'Manejo del Dolor Crónico',
  //     experience: '12+ años de experiencia',
  //     description: 'Experta en tratamientos no invasivos para el manejo del dolor crónico y condiciones degenerativas.'
  //   },
  //   {
  //     name: 'Dr. Miguel Santos',
  //     role: 'Especialista en Terapias IV',
  //     specialty: 'Medicina Integrativa',
  //     experience: '10+ años de experiencia',
  //     description: 'Pionero en sueroterapia y tratamientos de medicina integrativa en Puerto Rico.'
  //   }
  // ];

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
                Nosotros <span className="font-medium text-cyan-600">CMR</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Conoce más sobre nuestro centro especializado en medicina regenerativa y el equipo que hace posible tu bienestar
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
                  Nuestra <span className="font-medium text-cyan-600">Historia</span>
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
                  <p>
                    El Centro de Medicina Regenerativa (CMR) nació de la visión de transformar la medicina en Puerto Rico, 
                    ofreciendo tratamientos innovadores que combinan la medicina moderna con enfoques naturales y holísticos.
                  </p>
                  <p>
                    Desde nuestros inicios, hemos estado comprometidos con brindar alternativas terapéuticas avanzadas 
                    para condiciones crónicas y degenerativas, utilizando tecnologías de vanguardia que promueven la 
                    regeneración natural del cuerpo.
                  </p>
                  <p>
                    Nuestro equipo multidisciplinario trabaja con dedicación para ofrecer tratamientos personalizados 
                    que no solo alivian síntomas, sino que abordan las causas fundamentales de las condiciones de salud.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-8xl mb-4">🏥</div>
                    <p className="text-lg font-light">Centro Médico CMR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Advisors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Asesores <span className="font-medium text-cyan-600">Científicos</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Respaldados por los mejores expertos mundiales en medicina regenerativa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image 
                      src="/dr_ovokaitys.png" 
                      alt="Dr. Todd Ovokaitys" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Dr. Todd Ovokaitys</h3>
                  <p className="text-cyan-600 text-sm font-medium mb-4">Inventor de la Tecnología de Resonancia Láser de Células Madre</p>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  Científico, médico e investigador distinguido, reconocido por sus contribuciones innovadoras en enfermedades relacionadas con la edad. 
                  Inventor de la tecnología SONG que mejora la eficacia de las terapias con células madre. Graduado summa cum laude de Northwestern, 
                  con formación en Johns Hopkins y Georgetown. Pionero en investigación de células madre embrionarias muy pequeñas (VSELs) con múltiples patentes.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image 
                      src="/dr_webber.png" 
                      alt="Dr. Michael Hans Weber" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Dr. Michael Hans Weber</h3>
                  <p className="text-cyan-600 text-sm font-medium mb-4">Padre Fundador de la Terapia Endoláser Moderna</p>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  Presidente de la Sociedad Internacional para Aplicaciones Médicas del Láser (ISLA) con más de 20 años de práctica médica. 
                  Fundador de Weber Medical GmbH, especializada en tecnología láser médica. Títulos en Química, Bioquímica y Medicina de universidades alemanas. 
                  Pionero en desarrollo y aplicación de terapia láser con investigación en el Instituto Max Planck.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image 
                      src="/dr_massari.png" 
                      alt="Dr. Jorge Miranda Massari" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Dr. Jorge Miranda Massari</h3>
                  <p className="text-cyan-600 text-sm font-medium mb-4">Salón de la Fama de la Medicina Ortomolecular, 2016</p>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  Profesor e investigador en la Escuela de Farmacia de la UPR con Pharm.D. y múltiples post-doctorados en farmacocinética clínica. 
                  Director de Investigación del Proyecto RECNAC2, miembro del Consejo Editorial de revistas científicas. Reconocido por el Congreso de EE.UU., 
                  Co-Fundador del Instituto de Corrección Metabólica y miembro de la Academia de Artes y Ciencias de Puerto Rico.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 relative overflow-hidden">
                    <Image 
                      src="/dr_gonzalez.png" 
                      alt="Dr. Michael J. González" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Dr. Michael J. González †</h3>
                  <p className="text-cyan-600 text-sm font-medium mb-4">Salón de la Fama de la Medicina Ortomolecular, 2016</p>
                </div>
                <p className="text-gray-600 leading-relaxed font-light text-sm">
                  Profesor en el Programa de Nutrición de la UPR con más de 250 publicaciones científicas revisadas por pares. 
                  Pionero en investigación de vitamina C intravenosa como tratamiento contra el cáncer, validado por los NIH en 2005. 
                  Su legado perdura como faro de conocimiento y compromiso con la excelencia médica. Falleció el 23 de julio de 2024, 
                  dejando un impacto imborrable en la medicina regenerativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                ¿Por qué elegir <span className="font-medium text-cyan-600">CMR</span>?
              </h2>
            </div>

            <div className="space-y-12">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-8">
                  <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Nuestros <span className="font-medium text-cyan-600">Valores</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Equipo <span className="font-medium text-cyan-600">Ejecutivo</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Liderazgo visionario comprometido con la transformación de la medicina regenerativa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden">
                    <Image 
                      src="/jose_olalde.png" 
                      alt="Jose Olalde" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Jose Olalde</h3>
                  <p className="text-cyan-600 font-medium mb-4 text-lg">Presidente</p>
                  <p className="text-orange-600 font-medium mb-6">Co-fundador y Creador de la Teoría y Medicina Sistémica</p>
                </div>
                <div className="text-gray-600 leading-relaxed font-light text-sm space-y-3">
                  <p>
                    Ingeniero, inventor y emprendedor reconocido por sus contribuciones innovadoras en la medicina regenerativa y la teoría de sistemas. 
                    Como fundador de la Teoría Sistémica y creador de la marca Adaptogen, ha desarrollado la red de centros de sanación natural más grande de Sudamérica.
                  </p>
                  <p>
                    Ha formulado más de 500 recetas herbales para la salud. Presidente de Medicina Sistemica LLC y CMDA. 
                    Fundador de Adaptogenos Internacionales en Venezuela. Creador de la Unidad Médica Adaptogénica y la bebida Heat Killer.
                  </p>
                  <p>
                    Autor de varios libros, incluyendo &ldquo;Potencia tu Inteligencia Biológica y Pierde Peso&rdquo;, &ldquo;La Revolución de los Adaptógenos en la Salud&rdquo; 
                    y &ldquo;El Cáncer se Puede Curar, Fácil&rdquo;. Inventor con 18 patentes otorgadas en Estados Unidos, México y Rusia.
                  </p>
                  <p>
                    Consultor científico para revistas prestigiosas como Discovery Health y Evidence-Based Complementary and Alternative Medicine (eCAM).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 relative overflow-hidden">
                    <Image 
                      src="/fabiola_perez.png" 
                      alt="Fabiola Olalde" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Fabiola Perez</h3>
                  <p className="text-cyan-600 font-medium mb-4 text-lg">Vice-Presidenta</p>
                  <p className="text-orange-600 font-medium mb-6">Co-fundadora y Directora de Operaciones y Atención al Paciente</p>
                </div>
                <div className="text-gray-600 leading-relaxed font-light text-sm space-y-3">
                  <p>
                    &ldquo;Hubo un momento en mi vida en el que enfrenté desafíos que me hicieron replantear quién era y hacia dónde quería ir. 
                    La salud, el estrés y la falta de propósito me llevaron a tocar fondo, pero también me dieron la fuerza para transformarme.&rdquo;
                  </p>
                  <p>
                    &ldquo;Decidí que quería ser más que una espectadora de mi propia vida; quería tomar el control, aprender a cuidarme desde el interior 
                    y convertir esas lecciones en herramientas para ayudar a otros.&rdquo;
                  </p>
                  <p>
                    &ldquo;Mi filosofía se basa en el equilibrio: cuidar el cuerpo, nutrir el alma y mantener una mentalidad positiva. 
                    Creo firmemente que la salud integral comienza con pequeños cambios conscientes que generan grandes transformaciones.&rdquo;
                  </p>
                  <p>
                    &ldquo;Mi misión es inspirar a otros a creer en ellos mismos, a encontrar su propósito y a convertirse en su mejor versión, 
                    viviendo una vida plena, saludable y con intención. Porque todos merecemos ser protagonistas de nuestras propias vidas.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              ¿Listo para comenzar tu <span className="font-medium text-cyan-600">transformación</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Nuestro equipo está listo para diseñar un plan de tratamiento personalizado para ti
            </p>
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contacta con Nosotros
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}