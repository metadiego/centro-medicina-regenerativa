'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/cmr-logo.png"
              alt="CMR Logo"
              width={140}
              height={45}
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              href="/"
              className={`${pathname === '/' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase`}
            >
              Inicio
            </Link>
            <Link
              href="/tratamientos"
              className={`${pathname === '/tratamientos' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase`}
            >
              Tratamientos
            </Link>
            <Link
              href="/testimonios"
              className={`${pathname === '/testimonios' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase`}
            >
              Testimonios
            </Link>
            <Link
              href="/nosotros"
              className={`${pathname === '/nosotros' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase`}
            >
              Nosotros
            </Link>
            <a
              href="https://blog.centrodemedicinaregenerativa.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
            >
              Blog
            </a>
            <a
              href="https://tiendacmr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
            >
              Nuestra Tienda
            </a>
            <Link
              href="/contacto"
              className={`${pathname === '/contacto' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase`}
            >
              Contacto
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-4 pb-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 ${pathname === '/' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium`}
              >
                Inicio
              </Link>
              <Link
                href="/tratamientos"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 ${pathname === '/tratamientos' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium`}
              >
                Tratamientos
              </Link>
              <Link
                href="/testimonios"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 ${pathname === '/testimonios' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium`}
              >
                Testimonios
              </Link>
              <Link
                href="/nosotros"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 ${pathname === '/nosotros' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium`}
              >
                Nosotros
              </Link>
              <a
                href="https://blog.centrodemedicinaregenerativa.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Blog
              </a>
              <a
                href="https://tiendacmr.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-3 text-gray-700 hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
              >
                Nuestra Tienda
              </a>
              <Link
                href="/contacto"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-3 py-3 ${pathname === '/contacto' ? 'text-cyan-600' : 'text-gray-700'} hover:text-cyan-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium`}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}