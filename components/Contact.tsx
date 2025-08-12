'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Contact() {
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGhostSignupForm = () => {
      // Check if form is already loaded in this container
      if (newsletterRef.current && newsletterRef.current.children.length > 0) {
        return;
      }

      // Create the Ghost signup form script
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/ghost/signup-form@~0.2/umd/signup-form.min.js';
      script.setAttribute('data-button-color', '#01b3d1');
      script.setAttribute('data-button-text-color', '#FFFFFF');
      script.setAttribute('data-site', 'https://blog.centrodemedicinaregenerativa.com/');
      script.setAttribute('data-locale', 'es');
      script.async = true;

      // Append to the newsletter container
      if (newsletterRef.current) {
        newsletterRef.current.appendChild(script);
      }
    };

    // Add a small delay to ensure proper loading
    const timer = setTimeout(loadGhostSignupForm, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="contacto" className="py-24" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              <span className="font-medium text-cyan-600">Contacto</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            ¿Listo para transformar tu salud? Contáctanos hoy mismo y comienza tu journey hacia el bienestar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-light text-gray-900 mb-10">
              Información de <span className="font-medium text-cyan-600">Contacto</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-1">Teléfono</h4>
                  <div className="text-gray-600 text-lg">
                  <div>+1 (787) 780-7575</div>
                </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-1">Email</h4>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg break-all">
                    consulta@centrodemedicinaregenerativa.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-4 rounded-2xl shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-lg mb-3">Ubicaciones</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-800 text-base mb-1">Bayamón</p>
                      <p>Centro de Medicina Regenerativa</p>
                      <p className="text-gray-600">51 Calle Dr. Santiago Veve<br />Bayamón, PR 00961</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 text-base mb-1">Caguas</p>
                      <p>Centro de Medicina Regenerativa</p>
                      <p className="text-gray-600">Av. Luis Muñoz Marín<br />Caguas, PR 00725</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100 text-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 rounded-full shadow-lg mx-auto w-fit mb-6">
                  <Phone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-medium text-gray-900 mb-4">
                  ¿Listo para transformar tu salud?
                </h3>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center space-x-4 text-gray-700">
                  <Phone className="w-6 h-6 text-cyan-600" />
                  <div className="text-xl">
                    <div>+1 (787) 780-7575</div>
                  </div>
                </div>
                <p className="text-gray-500">
                  Horarios: Lunes - Sabado 7:00 AM - 5:00 PM
                </p>

              </div>

              <a
                href="tel:+17877807575"
                className="inline-flex items-center justify-center px-16 py-6 text-2xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <Phone className="w-8 h-8 mr-4" />
                <span>Llama Ahora</span>
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                Llamada gratuita para consulta inicial
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Suscríbete a nuestro <span className="font-medium text-cyan-600">Blog</span>
            </h3>
            <p className="text-gray-600 mb-8">Recibe contenido exclusivo sobre salud y bienestar directamente en tu correo</p>
            <div className="flex justify-center">
              <div 
                ref={newsletterRef}
                style={{
                  minHeight: '58px',
                  maxWidth: '440px',
                  margin: '0',
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              <span className="font-medium text-cyan-600">Síguenos</span>
            </h3>
            <p className="text-gray-600">Mantente conectado con nuestras últimas noticias y consejos de salud</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://wa.me/17877799508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 p-4 rounded-full transition-colors duration-200 transform hover:scale-105"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/centrodemedicinaregenerativa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors duration-200 transform hover:scale-105"
              aria-label="Facebook"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/centrodemedicinaregenerativa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 p-4 rounded-full transition-colors duration-200 transform hover:scale-105"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@centrodemedicinaregenerativa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 p-4 rounded-full transition-colors duration-200 transform hover:scale-105"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}