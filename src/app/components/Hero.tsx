import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbWluaW1hbHxlbnwxfHx8fDE3Nzg0MDA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Creative Developer
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Building beautiful, functional, and innovative digital experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
