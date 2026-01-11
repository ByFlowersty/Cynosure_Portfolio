
import React from 'react';
import { USER_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenContact: () => void;
  onOpenCV: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenCV }) => {
  const { t, language } = useLanguage();
  const localizedRole = (USER_INFO.role as any)[language];

  const handleViewProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="lg:col-span-7 space-y-8 order-2 lg:order-1 text-center lg:text-left">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 text-[10px] font-bold tracking-[0.2em] uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
          {t('hero.badge')}
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-bold dark:text-white text-neutral-900 leading-[0.95] tracking-tighter transition-colors">
          {t('hero.greeting')} {USER_INFO.name.split(' ')[0]}<span className="text-emerald-500">.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {t('hero.rolePrefix')} <span className="dark:text-white text-neutral-900 font-medium transition-colors">{localizedRole}</span> {t('hero.roleSuffix')}
        </p>
        
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
          <button 
            onClick={handleViewProjects}
            className="group px-8 py-5 dark:bg-white bg-neutral-900 dark:text-black text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center shadow-xl active:scale-95 shadow-emerald-500/10"
          >
            {t('hero.viewProjects')}
            <svg className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
          </button>

          <button 
            onClick={onOpenCV}
            className="px-8 py-5 bg-emerald-500 text-white rounded-2xl font-bold text-sm uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            {t('nav.downloadCv')}
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </button>

          <button 
            onClick={onOpenContact}
            className="px-8 py-5 glass rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-neutral-100 dark:hover:bg-white/10 transition-all dark:text-white text-neutral-900 border border-neutral-200 dark:border-white/10 active:scale-95"
          >
            {t('hero.getInTouch')}
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-[3.5rem] overflow-hidden border border-neutral-200 dark:border-white/10 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-emerald-500/20">
            <img 
              src={USER_INFO.profilePhoto} 
              alt={USER_INFO.name}
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
