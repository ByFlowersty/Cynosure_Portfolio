
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SkillCategory } from '../types';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const categories: SkillCategory[] = t('skills.categories');

  return (
    <section id="skills" className="py-32 border-t dark:border-white/5 border-neutral-100 transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-xs font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-4">
            {t('skills.title')}
          </h2>
          <div className="h-0.5 w-16 bg-emerald-500 rounded-full hidden md:block shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
        </div>
        
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          {categories && categories.length > 0 ? categories.map((skillGroup, idx) => (
            <div key={idx} className="group animate-in fade-in duration-700" style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="text-[11px] font-black dark:text-white text-neutral-900 mb-8 uppercase tracking-[0.2em] border-l-2 border-emerald-500 pl-5 transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2.5 glass dark:text-neutral-300 text-neutral-600 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-emerald-500 hover:text-white hover:border-emerald-500 dark:hover:bg-emerald-600 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )) : (
            <div className="col-span-2 py-10 text-neutral-500 italic">No skills data loaded.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
