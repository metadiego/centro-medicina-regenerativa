'use client';

import { useEffect, useState } from 'react';

export default function TherapyBanner() {
  const therapies = [
    'Terapia de dolor',
    'Terapia de suero IV',
    'Terapia de disfunción eréctil',
    'Terapia femenina'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % therapies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [therapies.length]);

  return (
    <section className="py-24 overflow-hidden" style={{backgroundColor: 'rgb(247,247,247)'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
              Terapias <span className="font-medium text-cyan-600">Especializadas</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 mx-auto mb-6"></div>
          </div>
        </div>

        <div className="relative h-32 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            {therapies.map((therapy, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 transform translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <div className="bg-white rounded-2xl px-12 py-8 border border-gray-100 shadow-xl">
                  <h3 className="text-2xl md:text-3xl font-light text-gray-900 text-center">
                    {therapy}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex space-x-3">
            {therapies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-cyan-500 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}