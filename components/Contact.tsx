
import React from 'react';
import { USER_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  onOpenContact: () => void;
  onOpenCV: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenContact, onOpenCV }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 border-t dark:border-white/5 border-neutral-100 transition-colors duration-500">
      <div className="glass rounded-[4rem] p-12 md:p-32 text-center space-y-12 overflow-hidden relative group border dark:border-white/5 border-neutral-200">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full -mr-[300px] -mt-[300px] blur-[120px] group-hover:bg-emerald-500/20 transition-all duration-1000" />
        
        <div className="relative z-10 space-y-8">
          <h2 className="text-5xl md:text-8xl font-display font-bold dark:text-white text-neutral-900 max-w-4xl mx-auto leading-[0.95] tracking-tighter transition-colors">
            {t('contact.title')}
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl max-w-xl mx-auto font-light transition-colors">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-10 pt-10">
          <button 
            onClick={onOpenContact}
            className="text-2xl md:text-6xl font-medium dark:text-white text-neutral-900 hover:text-emerald-500 transition-all underline decoration-neutral-200 dark:decoration-white/10 underline-offset-[16px] hover:decoration-emerald-500/50"
          >
            {USER_INFO.email}
          </button>
          <div className="flex flex-wrap justify-center gap-12 pt-12 border-t dark:border-white/5 border-neutral-100 w-full max-w-2xl mx-auto">
            <a href={USER_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.3em]">LinkedIn</a>
            <button onClick={onOpenCV} className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.3em]">{t('nav.downloadCv')}</button>
            <button onClick={onOpenContact} className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.3em]">{t('nav.contact')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
