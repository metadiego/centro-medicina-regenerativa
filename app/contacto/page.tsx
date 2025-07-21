'use client';

import Header from '@/components/Header';
import { Mail, Phone, MapPin, Send, ArrowLeft, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                <p className="text-gray-600 text-lg mb-4">+1 (787) 123-4567</p>
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
                <p className="text-gray-600 text-lg mb-4">info@cmr-medicina.com</p>
                <p className="text-gray-500 text-sm">
                  Escríbenos para consultas detalladas o información adicional
                </p>
              </div>

              {/* Location */}
              <div className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg mx-auto w-fit mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Ubicación</h3>
                <p className="text-gray-600 text-lg mb-4">
                  Centro de Medicina Regenerativa<br />
                  San Juan, Puerto Rico
                </p>
                <p className="text-gray-500 text-sm">
                  Visítanos en nuestras modernas instalaciones
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Hours */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                  <h2 className="text-2xl font-medium text-gray-900 mb-8">
                    Envíanos un mensaje
                  </h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-3">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-3">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-lg"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-lg"
                      />
                    </div>

                    <div className="mb-8">
                      <label htmlFor="servicio" className="block text-sm font-medium text-gray-700 mb-3">
                        Tratamiento de Interés
                      </label>
                      <select
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-lg"
                      >
                        <option value="">Selecciona un tratamiento</option>
                        <option value="terapia-dolor">Terapia del Dolor</option>
                        <option value="sueroterapia">Sueroterapia</option>
                        <option value="camara-energetica">Cámara Energética</option>
                        <option value="terapia-circulatoria">Terapia Circulatoria</option>
                        <option value="terapia-erectil">Terapia Disfunción Eréctil</option>
                        <option value="terapia-femenina">Terapia Íntima Femenina</option>
                        <option value="terapia-pemf">Terapia PEMF</option>
                        <option value="neurocatch">NeuroCatch</option>
                        <option value="camara-hiperbarica">Cámara Hiperbárica</option>
                        <option value="consulta-general">Consulta General</option>
                      </select>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-3">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 text-lg"
                        placeholder="Cuéntanos sobre tu consulta o condición..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
                    >
                      <Send className="w-6 h-6" />
                      <span>Enviar Mensaje</span>
                    </button>
                  </form>
                </div>
              </div>

              {/* Business Hours & Additional Info */}
              <div className="space-y-8">
                {/* Hours */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Clock className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="text-xl font-medium text-gray-900">Horarios</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
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

                {/* Appointment Info */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <Calendar className="w-6 h-6 text-cyan-600 mr-3" />
                    <h3 className="text-xl font-medium text-gray-900">Citas</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-sm leading-relaxed">
                      Las consultas son por cita previa. Te recomendamos agendar con al menos 24 horas de anticipación.
                    </p>
                    <p className="text-sm leading-relaxed">
                      Para emergencias médicas, contacta inmediatamente a tu médico de cabecera o acude al hospital más cercano.
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-medium mb-4">¿Necesitas ayuda inmediata?</h3>
                  <p className="text-cyan-100 mb-6 text-sm">
                    Nuestro equipo está listo para atenderte y resolver todas tus dudas
                  </p>
                  <Link 
                    href="tel:+17871234567"
                    className="inline-flex items-center justify-center w-full bg-white text-cyan-600 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Llamar Ahora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}