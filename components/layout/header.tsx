'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMosteiroOpen, setMobileMosteiroOpen] = useState(false);
  const [isMobileVidaOpen, setMobileVidaOpen] = useState(false);
  const [isMobileSaoBentoOpen, setMobileSaoBentoOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <img
              src="https://web.archive.org/web/20190116020917im_/http://monjasbeneditinas.org.br/sites/default/files/logo_branco.png"
              alt="Mosteiro Nossa Senhora da Glória"
              className="h-10"
            />
          </Link>
          <div className="hidden">
            <h1 className="text-lg font-bold">
              <Link href="/">Mosteiro Nossa Senhora da Glória</Link>
            </h1>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {/* Mosteiro with submenu */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-gray-300">Mosteiro</span>
              <div className="absolute left-0 mt-2 w-56 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link href="/historia" className="block px-4 py-2 hover:bg-gray-100">
                  Nossa História
                </Link>
                <Link href="/comunidade-monastica" className="block px-4 py-2 hover:bg-gray-100">
                  Comunidade Monástica
                </Link>
                <Link href="/oblatos" className="block px-4 py-2 hover:bg-gray-100">
                  Oblatos
                </Link>
                <Link href="/nossos-horarios" className="block px-4 py-2 hover:bg-gray-100">
                  Nossos horários
                </Link>
                <Link href="/doacoes" className="block px-4 py-2 hover:bg-gray-100">
                  Doações
                </Link>
              </div>
            </li>
            {/* Vida monástica with submenu */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-gray-300">Vida monástica</span>
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link href="/vida-monastica" className="block px-4 py-2 hover:bg-gray-100">
                  O que é a vida monástica
                </Link>
                <Link href="/oficio-divino" className="block px-4 py-2 hover:bg-gray-100">
                  Oficio Divino
                </Link>
                <Link href="/lectio-divino" className="block px-4 py-2 hover:bg-gray-100">
                  Lectio Divino
                </Link>
              </div>
            </li>
            {/* São bento with submenu */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-gray-300">São Bento</span>
              <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                <Link href="/sao-bento/vida" className="block px-4 py-2 hover:bg-gray-100">
                  Vida
                </Link>
                <Link href="/sao-bento/regra" className="block px-4 py-2 hover:bg-gray-100">
                  Regra
                </Link>
                <Link href="/sao-bento/medalha-sao-bento" className="block px-4 py-2 hover:bg-gray-100">
                  A medalha de São Bento
                </Link>
                <Link href="/sao-bento/santas-monjas" className="block px-4 py-2 hover:bg-gray-100">
                  Santas Monjas
                </Link>
              </div>
            </li>
            <li>
              <Link href="/vocacional" className="hover:text-gray-300">
                Vocacional
              </Link>
            </li>
            {/* <li>
              <Link href="/galeria-de-fotos" className="hover:text-gray-300">
                Fotos
              </Link>
            </li> */}
          </ul>
        </nav>
        {/* Mobile Navigation Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-700">
          <ul className="px-4 pb-4 space-y-2">
            {/* Mosteiro with submenu toggle */}
            <li>
              <button
                onClick={() => setMobileMosteiroOpen(!isMobileMosteiroOpen)}
                className="w-full text-left px-2 py-2 hover:bg-gray-600 focus:outline-none flex justify-between items-center"
              >
                Mosteiro <span>{isMobileMosteiroOpen ? '-' : '+'}</span>
              </button>
              {isMobileMosteiroOpen && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <Link href="/historia" className="block px-2 py-2 hover:bg-gray-600">
                      Nossa História
                    </Link>
                  </li>
                  <li>
                    <Link href="/comunidade-monastica" className="block px-2 py-2 hover:bg-gray-600">
                      Comunidade Monástica
                    </Link>
                  </li>
                  <li>
                    <Link href="/oblatos" className="block px-2 py-2 hover:bg-gray-600">
                      Oblatos
                    </Link>
                  </li>
                  <li>
                    <Link href="/nossos-horarios" className="block px-2 py-2 hover:bg-gray-600">
                      Nossos horários
                    </Link>
                  </li>
                  <li>
                    <Link href="/doacoes" className="block px-2 py-2 hover:bg-gray-600">
                      Doações
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Vida monástica with submenu toggle */}
            <li>
              <button
                onClick={() => setMobileVidaOpen(!isMobileVidaOpen)}
                className="w-full text-left px-2 py-2 hover:bg-gray-600 focus:outline-none flex justify-between items-center"
              >
                Vida monástica <span>{isMobileVidaOpen ? '-' : '+'}</span>
              </button>
              {isMobileVidaOpen && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <Link href="/vida-monastica" className="block px-2 py-2 hover:bg-gray-600">
                      O que é a vida monástica
                    </Link>
                  </li>
                  <li>
                    <Link href="/oficio-divino" className="block px-2 py-2 hover:bg-gray-600">
                      Oficio Divino
                    </Link>
                  </li>
                  <li>
                    <Link href="/lectio-divino" className="block px-2 py-2 hover:bg-gray-600">
                      Lectio Divino
                    </Link>
                  </li>
                  <li>
                    <Link href="/homilia-patristica" className="block px-2 py-2 hover:bg-gray-600">
                      Homilia patrística
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* São bento with submenu toggle for mobile */}
            <li>
              <button
                onClick={() => setMobileSaoBentoOpen(!isMobileSaoBentoOpen)}
                className="w-full text-left px-2 py-2 hover:bg-gray-600 focus:outline-none flex justify-between items-center"
              >
                São Bento <span>{isMobileSaoBentoOpen ? '-' : '+'}</span>
              </button>
              {isMobileSaoBentoOpen && (
                <ul className="pl-4 space-y-1">
                  <li>
                    <Link href="/sao-bento/vida" className="block px-2 py-2 hover:bg-gray-600">
                      Vida
                    </Link>
                  </li>
                  <li>
                    <Link href="/sao-bento/regra" className="block px-2 py-2 hover:bg-gray-600">
                      Regra
                    </Link>
                  </li>
                  <li>
                    <Link href="/sao-bento/medalha-sao-bento" className="block px-2 py-2 hover:bg-gray-600">
                      A medalha de São Bento
                    </Link>
                  </li>
                  <li>
                    <Link href="/sao-bento/santas-monjas" className="block px-2 py-2 hover:bg-gray-600">
                      Santas Monjas
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            {/* Remaining main menu items */}
            <li>
              <Link href="/vocacional" className="block px-2 py-2 hover:bg-gray-600">
                Vocacional
              </Link>
            </li>
            <li>
              <Link href="/contato" className="block px-2 py-2 hover:bg-gray-600">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/galeria-de-fotos" className="block px-2 py-2 hover:bg-gray-600">
                Fotos
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
