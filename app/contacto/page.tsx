'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, ArrowLeft, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ContactoPage() {

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
                <span className="font-medium text-cyan-600">Contacto</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                ¿Listo para transformar tu salud? Contáctanos hoy mismo y comienza tu journey hacia el bienestar
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Phone */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Teléfono</h3>
                <div className="text-gray-600 text-lg mb-4">
                  <div>+1 (787) 780-7575</div>
                  <div>+1 (787) 780-7676</div>
                </div>
                <p className="text-gray-500 text-sm">
                  Llámanos para agendar tu cita o resolver cualquier duda
                </p>
              </div>

              {/* Email */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 break-all px-2">
                  consulta@centrodemedicinaregenerativa.com
                </p>
                <p className="text-gray-500 text-sm">
                  Escríbenos para consultas detalladas o información adicional
                </p>
              </div>

              {/* Location */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Ubicaciones</h3>
                <div className="space-y-4 text-gray-600 text-sm mb-4">
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Bayamón</p>
                    <p>Centro de Medicina Regenerativa</p>
                    <p>51 Calle Dr. Santiago Veve<br />Bayamón, PR 00961</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-1">Caguas</p>
                    <p>Centro de Medicina Regenerativa</p>
                    <p>Av. Luis Muñoz Marín<br />Caguas, PR 00725</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Visítanos en cualquiera de nuestras modernas instalaciones
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Hours */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Call to Action */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 text-center h-full flex flex-col justify-center">
                  <div className="mb-8">
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-7 rounded-full shadow-lg mx-auto w-fit mb-8">
                      <Phone className="w-14 h-14 text-white" />
                    </div>
                    <h2 className="text-4xl font-medium text-gray-900 mb-6">
                      ¿Listo para tu consulta?
                    </h2>
                  </div>
                  
                  <div className="space-y-8 mb-10">
                    <div className="flex items-center justify-center space-x-5 text-gray-700">
                      <Phone className="w-7 h-7 text-cyan-600" />
                      <div className="text-2xl font-medium">
                        <div>+1 (787) 780-7575</div>
                        <div>+1 (787) 780-7676</div>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 rounded-xl p-6 max-w-md mx-auto">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Horarios de Atención</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex justify-between">
                          <span>Lunes - Viernes</span>
                          <span className="font-medium">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sábados</span>
                          <span className="font-medium">9:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Domingos</span>
                          <span className="font-medium">Cerrado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a
                      href="tel:+17877807575"
                      className="inline-flex items-center justify-center px-16 py-5 text-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 mb-6"
                    >
                      <Phone className="w-8 h-8 mr-4" />
                      <span>Llama Ahora</span>
                    </a>
                    
                    <p className="text-base text-gray-500">
                      Consulta inicial gratuita • Atención personalizada • Citas el mismo día
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Appointment Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="text-xl font-medium text-gray-900">Información de Citas</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-sm leading-relaxed">
                      Las consultas son por cita previa. Ofrecemos citas el mismo día para casos urgentes.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Consulta inicial gratuita para nuevos pacientes. Nuestros especialistas evaluarán tu caso y crearán un plan personalizado.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Para emergencias médicas, contacta inmediatamente a tu médico de cabecera o acude al hospital más cercano.
                    </p>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-medium mb-4">¿Por qué elegir CMR?</h3>
                  <ul className="space-y-3 text-cyan-100 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Especialistas certificados en medicina regenerativa
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Tecnología de vanguardia y tratamientos innovadores
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Atención personalizada y planes de tratamiento únicos
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Resultados comprobados y satisfacción del paciente
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}