'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Shield, Lock, Eye, Mail, Phone, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PrivacidadPage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16" style={{backgroundColor: 'rgb(247,247,247)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors duration-200">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver al Inicio
              </Link>
            </div>
            
            {/* Language Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
                <div className="flex items-center">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                      language === 'es' 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-cyan-600'
                    }`}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Español
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                      language === 'en' 
                        ? 'bg-cyan-600 text-white shadow-md' 
                        : 'text-gray-600 hover:text-cyan-600'
                    }`}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    English
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-cyan-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                  {language === 'es' ? (
                    <>Política de <span className="font-medium text-cyan-600">Privacidad</span></>
                  ) : (
                    <>Privacy <span className="font-medium text-cyan-600">Policy</span></>
                  )}
                </h1>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Centro de Medicina Regenerativa
              </p>
              <p className="text-lg text-gray-500 mt-2">
                {language === 'es' ? 'Última actualización: Abril 22, 2025' : 'Last updated: April 22, 2025'}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              
              {/* Section 1 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    1
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Introducción' : 'Introduction'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'En el Centro de Medicina Regenerativa, nos comprometemos a proteger su información personal y respetar su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos, protegemos y tratamos su información personal.'
                  ) : (
                    'At Centro de Medicina Regenerativa, we are committed to protecting your personal information and respecting your privacy. This Privacy Policy explains how we collect, use, protect, and handle your personal information.'
                  )}
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    2
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Información que Recopilamos' : 'Information We Collect'}
                  </h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '2.1 Datos de Empleados (Sistema de Notificaciones Internas)' : '2.1 Employee Data (Internal Notification System)'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Número de teléfono:' : 'Phone number:'}</strong> {language === 'es' ? 'Para envío de notificaciones SMS y WhatsApp Business' : 'For SMS and WhatsApp Business notifications'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Dirección de correo electrónico:' : 'Email address:'}</strong> {language === 'es' ? 'Para comunicaciones laborales' : 'For work-related communications'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Nombre completo:' : 'Full name:'}</strong> {language === 'es' ? 'Para identificación en el sistema' : 'For system identification'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Información de turno y área de trabajo:' : 'Shift and work area information:'}</strong> {language === 'es' ? 'Para asignación de notificaciones relevantes' : 'For relevant notification assignment'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '2.2 Datos de Contacto General' : '2.2 General Contact Data'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Información proporcionada voluntariamente a través de formularios de contacto' : 'Information voluntarily provided through contact forms'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Comunicaciones directas por email o teléfono' : 'Direct communications via email or phone'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    3
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Finalidad del Tratamiento' : 'Purpose of Processing'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'Utilizamos su información personal únicamente para:' : 'We use your personal information solely for:'}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Comunicación interna:' : 'Internal communication:'}</strong> {language === 'es' ? 'Envío de notificaciones laborales automatizadas' : 'Sending automated work notifications'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Gestión operativa:' : 'Operational management:'}</strong> {language === 'es' ? 'Asignación de clientes, alertas de stock, recordatorios de tareas' : 'Client assignment, stock alerts, task reminders'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Atención al cliente:' : 'Customer service:'}</strong> {language === 'es' ? 'Respuesta a consultas y solicitudes' : 'Responding to inquiries and requests'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Cumplimiento legal:' : 'Legal compliance:'}</strong> {language === 'es' ? 'Cuando sea requerido por ley' : 'When required by law'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Base Legal para el Tratamiento' : 'Legal Basis for Processing'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'El tratamiento de sus datos se fundamenta en:' : 'The processing of your data is based on:'}
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Relación laboral:' : 'Employment relationship:'}</strong> {language === 'es' ? 'Ejecución de obligaciones contractuales' : 'Execution of contractual obligations'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Consentimiento:' : 'Consent:'}</strong> {language === 'es' ? 'Autorización expresa para recibir comunicaciones' : 'Express authorization to receive communications'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>{language === 'es' ? 'Interés legítimo:' : 'Legitimate interest:'}</strong> {language === 'es' ? 'Funcionamiento eficiente de operaciones empresariales' : 'Efficient operation of business processes'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    5
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Principios de Recopilación</h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Minimización:</strong> Solo recopilamos los datos necesarios para ofrecer nuestros servicios de manera eficiente</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Transparencia:</strong> Le informamos claramente sobre el uso de sus datos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Propósito específico:</strong> Cada dato tiene una finalidad clara y definida</span>
                  </li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    6
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Compartir Información con Terceros</h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>No compartimos su información con terceros sin su consentimiento explícito</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Excepción:</strong> Cuando sea requerido por ley o autoridades competentes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Proveedores de servicios:</strong> Solo con empresas que nos ayudan a operar (bajo estrictos acuerdos de confidencialidad)</span>
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    7
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Seguridad de la Información</h2>
                </div>
                <p className="text-gray-700 mb-4">Implementamos medidas de seguridad técnicas y organizativas para proteger su información:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Lock className="w-5 h-5 text-cyan-600 mr-2" />
                      <span className="font-medium text-gray-800">Cifrado</span>
                    </div>
                    <p className="text-gray-600 text-sm">Protección de datos en tránsito y almacenamiento</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Eye className="w-5 h-5 text-cyan-600 mr-2" />
                      <span className="font-medium text-gray-800">Acceso restringido</span>
                    </div>
                    <p className="text-gray-600 text-sm">Solo personal autorizado puede acceder a los datos</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                      <span className="font-medium text-gray-800">Monitoreo</span>
                    </div>
                    <p className="text-gray-600 text-sm">Supervisión constante de sistemas para detectar vulnerabilidades</p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                      <span className="font-medium text-gray-800">Capacitación</span>
                    </div>
                    <p className="text-gray-600 text-sm">Personal entrenado en mejores prácticas de seguridad</p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    8
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Retención de Datos</h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Empleados activos:</strong> Mientras mantenga relación laboral con la empresa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Datos de contacto:</strong> Hasta que solicite su eliminación</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Registros legales:</strong> Según requieran las regulaciones aplicables</span>
                  </li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    9
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Sus Derechos' : 'Your Rights'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'Usted tiene derecho a:' : 'You have the right to:'}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Acceso:' : 'Access:'}</strong> {language === 'es' ? 'Conocer qué información tenemos sobre usted' : 'Know what information we have about you'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Rectificación:' : 'Rectification:'}</strong> {language === 'es' ? 'Corregir datos inexactos o incompletos' : 'Correct inaccurate or incomplete data'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Eliminación:' : 'Deletion:'}</strong> {language === 'es' ? 'Solicitar la eliminación de sus datos personales' : 'Request deletion of your personal data'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Oposición:' : 'Opposition:'}</strong> {language === 'es' ? 'Negarse a ciertos tratamientos de datos' : 'Object to certain data processing'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Portabilidad:' : 'Portability:'}</strong> {language === 'es' ? 'Recibir sus datos en formato estructurado' : 'Receive your data in structured format'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Restricción:' : 'Restriction:'}</strong> {language === 'es' ? 'Limitar el procesamiento de sus datos' : 'Limit the processing of your data'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    10
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Cómo Ejercer sus Derechos' : 'How to Exercise Your Rights'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'Para ejercer cualquiera de estos derechos:' : 'To exercise any of these rights:'}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700 break-all">
                        <strong>Email:</strong> consulta@centrodemedicinaregenerativa.com
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                      <div className="text-gray-700">
                        <div><strong>{language === 'es' ? 'Teléfono:' : 'Phone:'}</strong> +1 (787) 780-7575</div>
                        <div className="ml-16">+1 (787) 780-7676</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Tiempo de respuesta:' : 'Response time:'}</strong> {language === 'es' ? '5 días hábiles máximo' : 'Maximum 5 business days'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    11
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Comunicaciones y Consentimiento</h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">11.1 Notificaciones Laborales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Horario:</strong> Solo de 7:00 AM a 6:00 PM, lunes a viernes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Frecuencia:</strong> Máximo 6 mensajes por empleado por día</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span><strong>Opt-out:</strong> Puede pausar notificaciones respondiendo &ldquo;PAUSE&rdquo;</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">11.2 Comunicaciones Comerciales</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Requieren consentimiento explícito previo</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Opción de darse de baja en cada comunicación</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    12
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Menores de Edad</h2>
                </div>
                <p className="text-gray-700">
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos conscientemente información de menores sin consentimiento parental.
                </p>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    13
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Transferencias Internacionales</h2>
                </div>
                <p className="text-gray-700 mb-4">Si transferimos datos fuera de Puerto Rico/Estados Unidos, garantizamos protección adecuada mediante:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Cláusulas contractuales estándar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Certificaciones de privacidad reconocidas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Consentimiento explícito cuando sea requerido</span>
                  </li>
                </ul>
              </div>

              {/* Section 14 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    14
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Cookies y Tecnología de Seguimiento</h2>
                </div>
                <p className="text-gray-700 mb-4">Utilizamos cookies y tecnologías similares para:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mejorar funcionalidad del sitio web</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Analizar uso y rendimiento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Personalizar experiencia del usuario</span>
                  </li>
                </ul>
                <p className="text-gray-700">Puede controlar las cookies a través de su navegador.</p>
              </div>

              {/* Section 15 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    15
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Cambios a esta Política</h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Nos reservamos el derecho de actualizar esta política</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Cambios significativos serán notificados por email</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>La versión actual siempre estará disponible en nuestro sitio web</span>
                  </li>
                </ul>
              </div>

              {/* Section 16 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    16
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Cumplimiento Legal</h2>
                </div>
                <p className="text-gray-700 mb-4">Esta política cumple con:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Ley de Privacidad del Consumidor de California (CCPA)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Regulaciones federales de Estados Unidos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Mejores prácticas internacionales de privacidad</span>
                  </li>
                </ul>
              </div>

              {/* Section 18 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    18
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">Resolución de Disputas</h2>
                </div>
                <p className="text-gray-700 mb-4">Si tiene inquietudes sobre el manejo de sus datos:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Contacte nuestro equipo de privacidad</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Si no se resuelve, puede presentar queja ante autoridades de protección de datos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Disponible mediación y arbitraje según corresponda</span>
                  </li>
                </ul>
              </div>

              {/* Section 17 - Contact */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    17
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Contacto' : 'Contact'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'es' ? 'Para preguntas sobre esta Política de Privacidad:' : 'For questions about this Privacy Policy:'}
                </p>
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-2xl">
                  <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">Centro de Medicina Regenerativa</h3>
                  <div className="grid md:grid-cols-1 gap-4 max-w-md mx-auto">
                    <div className="flex items-center justify-center">
                      <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700 break-all">
                        consulta@centrodemedicinaregenerativa.com
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-600 mr-3" />
                      <div className="text-gray-700">
                        <div>+1 (787) 780-7575</div>
                        <div>+1 (787) 780-7676</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">
                        {language === 'es' ? '51 Calle Dr. Santiago Veve, Bayamón, PR 00961' : '51 Calle Dr. Santiago Veve, Bayamón, PR 00961'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Commitment Statement */}
              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-light mb-4">
                  {language === 'es' ? 'Nuestro Compromiso' : 'Our Commitment'}
                </h3>
                <p className="text-xl font-light leading-relaxed">
                  {language === 'es' ? (
                    'Nos comprometemos a mantener la confidencialidad y seguridad de su información personal. Su confianza es fundamental para nuestro servicio.'
                  ) : (
                    'We are committed to maintaining the confidentiality and security of your personal information. Your trust is fundamental to our service.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 