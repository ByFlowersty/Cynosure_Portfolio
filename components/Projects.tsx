
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types';
import { USER_INFO } from '../constants';

interface ProjectsProps {
  onNavigate: (id: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const items: ProjectItem[] = t('projects.items');

  return (
    <section id="projects" className="py-24 border-t dark:border-white/5 border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <h2 className="text-xs font-black text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.3em]">{t('projects.title')}</h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-2xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-10">
            {t('projects.subtitle')}
          </p>
          
          <a 
            href={USER_INFO.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all hover:scale-105 shadow-xl shadow-black/10 active:scale-95"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            <span className="text-[11px] uppercase tracking-[0.2em]">{t('hero.github')}</span>
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {items.map((project, idx) => (
          <div 
            key={project.id || idx} 
            onClick={() => onNavigate(project.id)}
            className="group cursor-pointer relative flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] dark:bg-neutral-900 bg-neutral-100 border dark:border-white/5 border-neutral-200 mb-8 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/10 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover dark:grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/800x500/171717/white?text=${project.title}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-black/60 from-white/20 to-transparent opacity-60 transition-opacity duration-700" />
            </div>
            
            <div className="px-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag: string, i: number) => (
                  <span key={i} className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-500 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-display font-bold dark:text-white text-neutral-900 mb-4 group-hover:text-emerald-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-500 line-clamp-2 text-lg font-light leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex items-center text-[10px] font-black dark:text-white text-neutral-900 uppercase tracking-[0.3em] group-hover:translate-x-4 transition-transform duration-500">
                {t('projects.viewMore')} →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
