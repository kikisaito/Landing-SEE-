"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const apkDownloadLink = "/see_app.apk"; 

  // Estado para el carrusel de funcionalidades
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      title: "Bitácora de Crisis Detallada",
      desc: "Registro clínico de episodios. Captura nivel de intensidad, emociones predominantes, detonantes, ubicación y contexto para un análisis profundo.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      ),
      mockupBg: "bg-indigo-100",
      image: "/crisis-log.jpeg"
    },
    {
      title: "Cápsulas de Estabilización",
      desc: "Herramientas de alivio personalizadas. Crea y consume contenido multimedia diseñado para mitigar emociones específicas como ansiedad o pánico.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      ),
      mockupBg: "bg-blue-100",
      image: "/stabilization-capsules.jpeg"
    },
    {
      title: "Reportes Clínicos PDF",
      desc: "Generación automática de informes. Exporta historiales cronológicos y tasas de mejora para facilitar el acompañamiento psicológico profesional.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      ),
      mockupBg: "bg-purple-100",
      image: "/clinical-reports.jpeg"
    },
    {
      title: "Patrones de Autocuidado",
      desc: "Seguimiento de victorias diarias. Registra hábitos positivos para visualizar tu progreso y fortalecer tu resiliencia emocional con el tiempo.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      ),
      mockupBg: "bg-teal-100",
      image: "/selfcare-patterns.jpeg"
    }
  ];

  // Auto-play del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION (Split Layout con Mockup) */}
      <header className="relative bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
          
          <div className="lg:w-1/2 z-10 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold text-sm mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              Versión 1.0 Disponible
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Sistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Estabilización</span> Emocional
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tu herramienta clínica de bolsillo. Diseñada para gestionar crisis, documentar tu progreso y proveer datos precisos para tu acompañamiento profesional.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={apkDownloadLink}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Descargar para Android
              </a>
            </div>
          </div>

          {/* MOCKUP PRINCIPAL HERO */}
          <div className="lg:w-5/12 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-300 rounded-[2.5rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative bg-slate-100 border-8 border-slate-800 rounded-[2.5rem] h-[600px] w-full max-w-[300px] mx-auto shadow-2xl overflow-hidden flex items-center justify-center">
              <img src="/hero-mockup.jpeg" alt="App Dashboard" className="object-cover w-full h-full" />
            </div>
          </div>

        </div>
      </header>

      {/* 2. CARRUSEL DE FUNCIONALIDADES */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ingeniería para tu bienestar</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Cada módulo fue diseñado con un propósito claro: brindarte control y registro sobre tu estado emocional.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Visualización del Mockup Cambiante (Ahora a la IZQUIERDA) */}
            <div className="lg:w-1/2 flex justify-center w-full order-2 lg:order-1">
              <div className={`relative w-full max-w-[320px] h-[650px] rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden flex items-center justify-center transition-colors duration-500 ${features[currentSlide].mockupBg}`}>
                 <img src={features[currentSlide].image} alt={features[currentSlide].title} className="object-cover w-full h-full" />
              </div>
            </div>

            {/* Lista de Features (Ahora a la DERECHA) */}
            <div className="lg:w-1/2 space-y-4 order-1 lg:order-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${currentSlide === index ? 'bg-white shadow-lg border-indigo-200 scale-105' : 'bg-transparent border-transparent hover:bg-slate-100'}`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-lg ${currentSlide === index ? 'bg-indigo-50' : 'bg-transparent'}`}>
                      {feature.icon}
                    </div>
                    <h3 className={`ml-4 text-xl font-bold ${currentSlide === index ? 'text-indigo-600' : 'text-slate-700'}`}>{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 pl-14">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARQUITECTURA TECNOLÓGICA (Crear Confianza) */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Arquitectura Robusta y Segura</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">Tus datos están protegidos por una infraestructura de grado empresarial en la nube, garantizando disponibilidad y privacidad.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold mb-2">Frontend</div>
              <div className="text-slate-400">Flutter & Dart</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold mb-2">Backend</div>
              <div className="text-slate-400">Node.js & Express</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold mb-2">Base de Datos</div>
              <div className="text-slate-400">PostgreSQL & Prisma</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold mb-2">Nube</div>
              <div className="text-slate-400">AWS EC2 & S3</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GUÍA DE INSTALACIÓN */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Despliegue e Instalación Rápida</h2>
          <div className="space-y-8">
            <div className="flex bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">1</div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2">Obtén el paquete</h4>
                <p className="text-slate-600">Descarga el archivo ejecutable <strong>.apk</strong> utilizando el enlace oficial provisto en esta página.</p>
              </div>
            </div>
            <div className="flex bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">2</div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2">Habilita los permisos</h4>
                <p className="text-slate-600">Al abrir el archivo, el sistema operativo solicitará permisos. Dirígete a configuración y acepta la instalación desde <strong>fuentes desconocidas</strong>.</p>
              </div>
            </div>
            <div className="flex bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xl">3</div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-slate-800 mb-2">Inicia tu proceso</h4>
                <p className="text-slate-600">Completa tu registro encriptado, configura tu perfil y accede inmediatamente a tus herramientas de estabilización.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-4 tracking-wider">SEE / AWOS</div>
          <p className="mb-6">Ingeniería de software aplicada a la salud mental.</p>
          <div className="text-sm border-t border-slate-800 pt-8">
            © {new Date().getFullYear()} Sistema de Estabilización Emocional. Proyecto Académico.
          </div>
        </div>
      </footer>

    </div>
  );
}