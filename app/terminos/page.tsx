'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, FileText, Shield, Eye, Mail, Phone, MapPin, Globe, Clock, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function TerminosPage() {
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
                {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
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
                <FileText className="w-12 h-12 text-cyan-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                  {language === 'es' ? (
                    <>Términos y <span className="font-medium text-cyan-600">Condiciones</span></>
                  ) : (
                    <>Terms and <span className="font-medium text-cyan-600">Conditions</span></>
                  )}
                </h1>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Centro de Medicina Regenerativa
              </p>
              <p className="text-lg text-gray-500 mt-2">
                {language === 'es' ? 'Última actualización: 23 de abril de 2025' : 'Last updated: April 23, 2025'}
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
                    {language === 'es' ? 'Aceptación de los Términos' : 'Acceptance of Terms'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.'
                  ) : (
                    'By accessing and using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our services.'
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
                    {language === 'es' ? 'Descripción de los Servicios' : 'Service Description'}
                  </h2>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '2.1 Uso exclusivo para comunicación interna entre empleados' : '2.1 Exclusive use for internal employee communication'}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {language === 'es' ? (
                      'El sistema enviará notificaciones automatizadas vía SMS, WhatsApp Business (WAB) y/o correo electrónico a empleados designados, exclusivamente durante el horario laboral (7:00 a.m. – 5:00 p.m., de lunes a sabado).'
                    ) : (
                      'The system will send automated notifications via SMS, WhatsApp Business (WAB) and/or email to designated employees, exclusively during business hours (7:00 a.m. – 5:00 p.m., Monday to Saturday).'
                    )}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '2.2 Tipos de notificaciones' : '2.2 Types of notifications'}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Users className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Asignación de clientes' : 'Client Assignment Alerts'}
                          </span>
                        </div>
                        <div className="text-gray-600 text-sm space-y-1">
                          {language === 'es' ? (
                            <p>Notificación cuando un cliente espera ser atendido</p>
                          ) : (
                            <>
                              <p>• Notification when a client is waiting for assistance</p>
                              <p>• Integrated with ticketing or CRM systems (e.g., Salesforce, Zendesk)</p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Notificación de devoluciones' : 'Return Notifications'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {language === 'es' ? 'Alerta cuando un cliente inicia una devolución' : 'Alerts when a client initiates a return, including product details and reason'}
                        </p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Eye className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Alerta de bajo inventario' : 'Low Stock Alerts'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {language === 'es' ? 'Cuando el inventario cae por debajo del umbral mínimo' : 'Notifications when inventory falls below the minimum threshold'}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Recordatorios de tareas' : 'Critical Task Reminders'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {language === 'es' ? 'Revisión de reportes y seguimiento de actividades' : 'Report reviews, scheduled deliveries, and activity follow-ups'}
                        </p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Shield className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Emergencias operativas' : 'Operational Emergencies'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {language === 'es' ? 'Para casos urgentes que requieran atención inmediata' : 'For urgent cases requiring immediate attention'}
                        </p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Clock className="w-5 h-5 text-cyan-600 mr-2" />
                          <span className="font-medium text-gray-800">
                            {language === 'es' ? 'Actualizaciones de turnos' : 'Shift Updates'}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          {language === 'es' ? 'Cambios en horarios o asignaciones de personal' : 'Changes in employee schedules or assignments'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '2.3 Restricciones operativas' : '2.3 Operational restrictions'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Horario estricto:' : 'Strict Schedule:'}</strong> {language === 'es' ? 'los mensajes se enviarán solo entre 7:00 a.m. y 6:00 p.m. (hora local)' : 'Messages will be sent only between 7:00 a.m. and 6:00 p.m. (local time)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Solo para empleados:' : 'Employees Only:'}</strong> {language === 'es' ? 'los contactos deben estar previamente autorizados' : 'Contacts must be pre-authorized'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Límite de mensajes:' : 'Message Limit:'}</strong> {language === 'es' ? 'máximo de 10 mensajes por empleado por día' : 'Maximum of 10 messages per employee per day (adjustable as needed)'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Protección de datos:' : 'Data Protection:'}</strong> {language === 'es' ? 'no se incluirán datos confidenciales de clientes en los mensajes' : 'No client confidential data will be included in messages'}
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
                    {language === 'es' ? 'Recopilación y uso de datos personales' : 'Collection and use of personal data'}
                  </h2>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '3.1 Información que recopilamos' : '3.1 Information we collect'}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Número de teléfono:' : 'Phone number:'}</strong> {language === 'es' ? 'para comunicaciones por SMS y WhatsApp Business' : 'for SMS and WhatsApp Business communications'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        <strong>{language === 'es' ? 'Dirección de correo electrónico:' : 'Email address:'}</strong> {language === 'es' ? 'para comunicaciones comerciales y administrativas' : 'for commercial and administrative communications'}
                      </span>
                    </li>
                    {language === 'en' && (
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>
                          <strong>Other data:</strong> [Specify any other data collected]
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '3.2 Finalidad del tratamiento' : '3.2 Purpose of processing'}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {language === 'es' ? 'Los datos personales se utilizan para:' : 'Personal data is used for:'}
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Prestación de los servicios contratados' : 'Provision of contracted services'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Envío de comunicaciones comerciales y promocionales' : 'Sending commercial and promotional communications'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Atención al cliente y soporte técnico' : 'Customer service and technical support'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        {language === 'es' ? 'Cumplimiento de obligaciones legales' : 'Compliance with legal obligations'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-4">
                    {language === 'es' ? '3.3 Base legal' : '3.3 Legal basis'}
                  </h3>
                  {language === 'es' ? (
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Ejecución de contrato</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Consentimiento expreso del usuario</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Interés legítimo de la empresa</span>
                      </li>
                    </ul>
                  ) : (
                    <div className="text-gray-700">
                      <p className="mb-2">Your data is processed based on:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Contract execution</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Your explicit consent</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>The company&rsquo;s legitimate interest</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    4
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Comunicaciones comerciales' : 'Commercial communications'}
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      {language === 'es' ? '4.1 SMS' : '4.1 SMS'}
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Podemos enviar mensajes SMS a su número registrado' : 'We may send SMS messages to your registered number'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Puede darse de baja respondiendo "STOP"' : 'You may opt out by replying "STOP" or "UNSUBSCRIBE"'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Se aplican las tarifas estándar del operador' : 'Standard carrier rates may apply'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      {language === 'es' ? '4.2 WhatsApp Business' : '4.2 WhatsApp Business'}
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Comunicaciones mediante WhatsApp Business' : 'Communications via WhatsApp Business'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Puede bloquear nuestro contacto en cualquier momento' : 'You can block our contact at any time'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Cumplimos con las políticas de WhatsApp' : 'We comply with WhatsApp policies'}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      {language === 'es' ? '4.3 Email marketing' : '4.3 Email marketing'}
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Podemos enviar correos de marketing' : 'We may send marketing emails'}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>
                          {language === 'es' ? 'Puede darse de baja usando el enlace incluido' : 'You can unsubscribe using the included link'}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    5
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Derechos del usuario' : 'User rights'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'Usted tiene derecho a:' : 'You have the right to:'}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Acceso:' : 'Access:'}</strong> {language === 'es' ? 'conocer qué datos personales tenemos sobre usted' : 'know what personal data we have about you'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Rectificación:' : 'Rectification:'}</strong> {language === 'es' ? 'corregir datos inexactos o incompletos' : 'correct inaccurate or incomplete data'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Eliminación:' : 'Deletion:'}</strong> {language === 'es' ? 'solicitar la eliminación de sus datos personales' : 'request deletion of your personal data'}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Oposición:' : 'Opposition:'}</strong> {language === 'es' ? 'negarse al uso de sus datos con fines específicos' : 'object to the use of your data for specific purposes'}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        <strong>{language === 'es' ? 'Portabilidad:' : 'Portability:'}</strong> {language === 'es' ? 'solicitar la transferencia de sus datos' : 'request transfer of your data'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    {language === 'es' ? 'Para ejercer estos derechos, contáctenos en:' : 'To exercise these rights, contact us at:'}
                  </p>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-cyan-600 mr-3" />
                    <span className="text-gray-700 break-all">
                      <strong>Email:</strong> consulta@centrodemedicinaregenerativa.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 6 - Data Security */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    6
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Seguridad de los datos' : 'Data Security'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.'
                  ) : (
                    'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.'
                  )}
                </p>
              </div>

              {/* Section 7 - Data Retention */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    7
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Retención de datos' : 'Data Retention'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Conservamos sus datos personales solo el tiempo necesario para cumplir los propósitos descritos, salvo que la ley exija un período de retención mayor.'
                  ) : (
                    'We retain your personal data only as long as necessary to fulfill the purposes described herein, unless a longer retention period is required by law.'
                  )}
                </p>
              </div>

              {/* Section 8 - Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    8
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Cookies y tecnologías similares' : 'Cookies and Similar Technologies'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Utilizamos cookies para mejorar la experiencia del usuario. Para más información, consulte nuestra Política de Cookies.'
                  ) : (
                    'We use cookies to improve the user experience. For more information, please refer to our Cookies Policy.'
                  )}
                </p>
              </div>

              {/* Section 9 - Modifications */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    9
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Modificaciones' : 'Modifications'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor tras su publicación en nuestro sitio web. Se notificará a los usuarios sobre cambios importantes.'
                  ) : (
                    'We reserve the right to modify these terms at any time. Changes will become effective upon publication on our website. Users will be notified of significant changes.'
                  )}
                </p>
              </div>

              {/* Section 10 - Minors */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    10
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Menores de edad' : 'Minors'}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'es' ? (
                    'Nuestros servicios no están destinados a menores de 18 años. No recopilamos conscientemente información personal de menores.'
                  ) : (
                    'Our services are not intended for users under 18 years of age. We do not knowingly collect personal information from minors.'
                  )}
                </p>
              </div>

              {/* Contact Section */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    11
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Contacto' : 'Contact'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-6">
                  {language === 'es' ? 'Para consultas sobre estos términos o sobre el tratamiento de datos personales:' : 'For inquiries about these terms or personal data processing:'}
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
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600 mr-3" />
                      <span className="text-gray-700">
                        {language === 'es' ? 'Calle Dr. Veve #51, cruce con Calle Martí, Bayamón, Puerto Rico, 00961' : 'Calle Dr. Veve #51, corner with Calle Martí, Bayamón, Puerto Rico, 00961'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent Section */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center font-semibold mr-4">
                    12
                  </div>
                  <h2 className="text-2xl font-medium text-gray-900">
                    {language === 'es' ? 'Consentimiento' : 'Consent'}
                  </h2>
                </div>
                <p className="text-gray-700 mb-4">
                  {language === 'es' ? 'Al utilizar nuestros servicios, usted confirma que:' : 'By using our services, you confirm that:'}
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      {language === 'es' ? 'Ha leído y comprendido estos términos' : 'You have read and understood these terms'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      {language === 'es' ? 'Da su consentimiento para el tratamiento de sus datos personales según lo descrito' : 'Give your consent for the processing of your personal data as described'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      {language === 'es' ? 'Acepta recibir comunicaciones comerciales por los medios indicados' : 'Accept to receive commercial communications through the indicated means'}
                    </span>
                  </li>
                </ul>
                

              </div>

              {/* Final Statement */}
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-light mb-4 text-gray-900">
                  {language === 'es' ? 'Acuerdo Legal' : 'Legal Agreement'}
                </h3>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  {language === 'es' ? (
                    'Estos Términos y Condiciones forman parte integral del contrato entre usted y centrodemedicinaregenerativa.com. Al utilizar nuestros servicios, acepta cumplir con todas las disposiciones aquí establecidas.'
                  ) : (
                    'These Terms and Conditions form an integral part of the contract between you and centrodemedicinaregenerativa.com. By using our services, you agree to comply with all provisions set forth herein.'
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