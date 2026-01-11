
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExperienceItem } from '../types';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const items: ExperienceItem[] = t('experience.items');

  return (
    <section id="experience" className="py-24 border-t dark:border-white/5 border-neutral-100 transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em]">{t('experience.title')}</h2>
        </div>
        <div className="md:col-span-8 space-y-20">
          {items.map((exp, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute -left-12 top-0 bottom-0 w-px bg-neutral-200 dark:bg-white/5 group-hover:bg-emerald-500/30 transition-colors hidden md:block" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
                <div className="relative">
                  <div className="absolute -left-[53px] top-2 w-2.5 h-2.5 rounded-full bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-900 group-hover:bg-emerald-500 group-hover:scale-150 transition-all hidden md:block" />
                  <h3 className="text-3xl font-display font-bold dark:text-white text-neutral-900 mb-2 transition-colors">{exp.role}</h3>
                  <p className="text-emerald-500 font-bold uppercase tracking-widest text-[11px]">{exp.company}</p>
                </div>
                <span className="text-neutral-400 dark:text-neutral-500 text-[11px] font-bold tracking-widest uppercase mt-4 md:mt-1">{exp.period}</span>
              </div>
              <ul className="space-y-5">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start dark:text-neutral-400 text-neutral-600 group/item transition-colors">
                    <span className="mr-5 mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover/item:bg-emerald-500 transition-colors flex-shrink-0" />
                    <span className="text-lg leading-relaxed group-hover/item:text-neutral-900 dark:group-hover/item:text-neutral-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
