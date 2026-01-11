
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 border-t dark:border-white/5 border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs font-black text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.3em]">{t('about.title')}</h2>
        </div>
        <div className="md:col-span-8 space-y-10">
          <p className="text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
            {t('about.intro')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-6">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{t('about.education')}</h4>
              <div>
                <p className="dark:text-white text-neutral-900 text-xl font-bold font-display">{t('about.eduInst')}</p>
                <p className="text-neutral-500 text-sm mt-1">{t('about.eduDeg')}</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{t('about.languages')}</h4>
              <p className="dark:text-white text-neutral-900 text-xl font-bold font-display">{t('about.langList')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
