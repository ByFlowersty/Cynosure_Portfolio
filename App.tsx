
import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { USER_INFO } from './constants';

const AppContent: React.FC = () => {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProjectId]);

  const handleNavigateToProject = (id: string) => setCurrentProjectId(id);
  const handleBackHome = () => setCurrentProjectId(null);

  const scrollToSection = (id: string) => {
    if (currentProjectId) {
      setCurrentProjectId(null);
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localizedRole = (USER_INFO.role as any)[language];

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-current">
      <Navbar 
        onBackHome={handleBackHome} 
        showBack={currentProjectId !== null} 
        onScrollTo={scrollToSection}
        onOpenContact={() => setShowContactModal(true)}
        onOpenCV={() => setShowCVModal(true)}
      />
      
      <main className="flex-grow pt-20 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full relative z-10 transition-colors duration-500">
        {currentProjectId ? (
          <ProjectDetail id={currentProjectId} onBack={handleBackHome} />
        ) : (
          <>
            <Hero onOpenContact={() => setShowContactModal(true)} onOpenCV={() => setShowCVModal(true)} />
            <About />
            <Experience />
            <Skills />
            <Projects onNavigate={handleNavigateToProject} />
            <Contact onOpenContact={() => setShowContactModal(true)} onOpenCV={() => setShowCVModal(true)} />
          </>
        )}
      </main>
      <Footer />

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-2xl" onClick={() => setShowContactModal(false)} />
          <div className="relative glass w-full max-w-2xl rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl animate-in zoom-in-95 duration-300 border border-neutral-200 dark:border-white/10 dark:bg-neutral-900/80 bg-white/90">
            <button onClick={() => setShowContactModal(false)} className="absolute top-8 right-8 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-4xl font-display font-bold mb-4 dark:text-white text-neutral-900">{USER_INFO.name}</h2>
            <p className="text-emerald-500 font-bold uppercase tracking-widest text-[11px] mb-12">{localizedRole}</p>
            
            <div className="space-y-10 mb-12">
              <div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">{t('contact.email')}</p>
                <a href={`mailto:${USER_INFO.email}`} className="text-xl md:text-3xl font-medium dark:text-white text-neutral-900 hover:text-emerald-500 transition-colors underline decoration-emerald-500/20 break-all">{USER_INFO.email}</a>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">{t('contact.phone')}</p>
                <a href={`tel:${USER_INFO.phone}`} className="text-xl md:text-3xl font-medium dark:text-white text-neutral-900 hover:text-emerald-500 transition-colors underline decoration-emerald-500/20">{USER_INFO.phone}</a>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a href={USER_INFO.linkedin} target="_blank" className="px-10 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-emerald-500/20">LinkedIn</a>
            </div>
          </div>
        </div>
      )}

      {/* CV Modal */}
      {showCVModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-neutral-950/90 backdrop-blur-3xl" onClick={() => setShowCVModal(false)} />
          <div className="relative glass w-full max-w-5xl h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col border dark:border-white/10 border-neutral-200 bg-white dark:bg-neutral-900">
            <div className="p-6 border-b dark:border-white/5 border-neutral-100 flex justify-between items-center z-10">
              <h3 className="text-xl font-bold font-display dark:text-white text-neutral-900">{t('contact.previewCv')}</h3>
              <div className="flex items-center gap-4">
                <a href={USER_INFO.cvDownloadUrl} target="_blank" className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-500/20">{t('contact.downloadPdf')}</a>
                <button onClick={() => setShowCVModal(false)} className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
            <div className="flex-grow">
              <iframe src={USER_INFO.cvPreviewUrl} className={`w-full h-full border-none ${theme === 'dark' ? 'invert brightness-90' : ''}`} title="CV Preview"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
