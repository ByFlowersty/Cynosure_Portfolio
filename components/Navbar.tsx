
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  showBack?: boolean;
  onBackHome?: () => void;
  onScrollTo: (id: string) => void;
  onOpenContact: () => void;
  onOpenCV: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ showBack, onBackHome, onScrollTo, onOpenContact, onOpenCV }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-neutral-200 dark:border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex justify-between items-center">
        <div className="flex items-center gap-4">
          {showBack && (
            <button onClick={onBackHome} className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors text-neutral-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
          )}
          <button onClick={onBackHome} className="font-display font-bold text-xl tracking-tight dark:text-white text-neutral-900 group">
            Cynosure Portfolio<span className="text-emerald-500 group-hover:animate-pulse">.</span>
          </button>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center text-[11px] font-black uppercase tracking-widest">
          <button onClick={() => onScrollTo('about')} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{t('nav.about')}</button>
          <button onClick={() => onScrollTo('experience')} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{t('nav.experience')}</button>
          <button onClick={() => onScrollTo('projects')} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">{t('nav.projects')}</button>
          
          <div className="w-px h-4 bg-neutral-200 dark:bg-white/10 mx-2" />

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-all rounded-full hover:bg-neutral-100 dark:hover:bg-white/10"
            title="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button onClick={() => setLanguage(language === 'en' ? 'es' : 'en')} className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-black">
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <button onClick={onOpenCV} className="px-5 py-2.5 dark:bg-white bg-neutral-900 dark:text-black text-white rounded-xl hover:scale-105 transition-all text-[10px] font-black shadow-lg shadow-black/5">
            {t('nav.downloadCv')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
