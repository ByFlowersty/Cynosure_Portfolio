
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types';

interface ProjectDetailProps {
  id: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ id, onBack }) => {
  const { t } = useLanguage();
  const [showCertModal, setShowCertModal] = useState(false);
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);
  
  const projects: ProjectItem[] = t('projects.items');
  const project = projects.find(p => p.id === id);

  if (!project) return <div className="py-20 text-center text-neutral-500">Project not found.</div>;

  const getFallbackImage = (text: string) => `https://placehold.co/1200x800/171717/white?text=${text}`;

  return (
    <div className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-500 relative transition-colors duration-500">
      {/* Certificado Modal */}
      {showCertModal && project.certificate && (
        <div 
          className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setShowCertModal(false)}
        >
          <button 
            onClick={() => setShowCertModal(false)}
            className="absolute top-8 right-8 z-[110] p-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full hover:scale-110 transition-all shadow-2xl group"
          >
            <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-500" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-full bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col border dark:border-white/5">
              <div className="flex-grow bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center overflow-auto p-4 md:p-10">
                <img 
                  src={project.certificate.url} 
                  alt={project.certificate.name}
                  className="max-w-full max-h-full object-contain shadow-2xl"
                  onError={(e) => { (e.target as HTMLImageElement).src = getFallbackImage('Tu+Certificado+Aqui'); }}
                />
              </div>
              <div className="p-8 border-t border-neutral-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 dark:text-white">{project.certificate.name}</h3>
                  <p className="text-neutral-400 text-sm font-medium wide uppercase">{project.title}</p>
                </div>
                <button onClick={() => setShowCertModal(false)} className="px-8 py-3 bg-neutral-900 dark:bg-white dark:text-black text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors">
                  {t('projects.details.close')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Image Modal */}
      {activeGalleryImage && (
        <div 
          className="fixed inset-0 z-[100] bg-neutral-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-20 animate-in fade-in duration-300"
          onClick={() => setActiveGalleryImage(null)}
        >
          <img 
            src={activeGalleryImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Enlarged gallery" 
            onError={(e) => { (e.target as HTMLImageElement).src = getFallbackImage('Preview'); }}
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-12">
        <button 
          onClick={onBack}
          className="group flex items-center text-neutral-400 hover:text-emerald-500 transition-colors mb-8 text-[11px] font-black uppercase tracking-widest"
        >
          <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('nav.backHome')}
        </button>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-neutral-900 dark:text-white mb-6 tracking-tight transition-colors">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 bg-neutral-100 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 rounded-full text-[10px] font-black uppercase tracking-[0.1em] border border-neutral-200 dark:border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-8">
           <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden border border-neutral-100 dark:border-white/5 shadow-2xl bg-neutral-50 dark:bg-neutral-900 relative group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              onError={(e) => { (e.target as HTMLImageElement).src = getFallbackImage('Proyecto+Preview'); }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>
        
        <div className="lg:col-span-4 flex flex-col justify-center">
           <div className="p-10 dark:bg-neutral-900 bg-neutral-900 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden group shadow-2xl shadow-neutral-900/20">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />
              <div>
                <h3 className="text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em] mb-6">{t('projects.details.tech')}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/10 rounded-xl text-[11px] font-bold border border-white/5 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                <div className="text-3xl font-display font-bold mb-2">{t('projects.details.impactLabel')}</div>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {t('projects.details.sidebarImpact')}
                </p>
              </div>
           </div>
        </div>
      </div>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-24">
          <h2 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-10">{t('projects.details.screenshots')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((imgUrl, idx) => (
              <div 
                key={idx} 
                className="aspect-video rounded-3xl overflow-hidden cursor-zoom-in border border-neutral-100 dark:border-white/5 group shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setActiveGalleryImage(imgUrl)}
              >
                <img 
                  src={imgUrl} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={`Screenshot ${idx + 1}`}
                  onError={(e) => { (e.target as HTMLImageElement).src = getFallbackImage(`View+${idx+1}`); }}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-neutral-100 dark:border-white/5">
        <div className="lg:col-span-8 space-y-16">
          <section>
            <h2 className="text-[11px] font-black text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.3em] mb-10">{t('projects.details.overview')}</h2>
            <p className="text-2xl md:text-3xl text-neutral-800 dark:text-neutral-300 leading-[1.6] font-light transition-colors">
              {project.fullDescription}
            </p>
          </section>

          <section className="p-10 md:p-14 bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 rounded-[3rem] shadow-xl">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-12 flex items-center">
              <span className="w-10 h-10 bg-emerald-500 dark:bg-emerald-500 dark:text-black text-white rounded-xl flex items-center justify-center mr-6 text-[11px] font-black">01</span>
              {t('projects.details.impact')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {project.impact.map((item, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 mr-5 flex-shrink-0 group-hover:scale-150 transition-all shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg transition-colors">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-12">
          <div className="p-8 border border-neutral-100 dark:border-white/5 rounded-[2.5rem] bg-white dark:bg-neutral-900 shadow-sm">
            <h3 className="text-[10px] font-black text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.2em] mb-8">{t('projects.details.statusTimeline')}</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-inner">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-base font-bold text-neutral-900 dark:text-white leading-none mb-1">{t('projects.details.statusLabel')}</div>
                  <div className="text-xs text-neutral-500 font-medium">{t('projects.details.statusValue')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-black text-neutral-400 dark:text-neutral-600 uppercase tracking-[0.2em] px-2">{t('projects.details.cert')}</h3>
            {project.certificate ? (
              <div 
                onClick={() => setShowCertModal(true)}
                className="group cursor-pointer relative p-8 bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-neutral-200 dark:border-white/5 hover:border-emerald-500 transition-all hover:shadow-2xl active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full -mr-20 -mt-20 group-hover:bg-emerald-500/10 transition-colors duration-500" />
                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-[1.5rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-emerald-500/20">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-neutral-900 dark:text-white mb-3">{project.certificate.name}</h4>
                    <span className="inline-flex items-center text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">
                      {t('projects.details.viewCert')} →
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-neutral-200 dark:border-white/5 border-dashed group hover:border-neutral-400 transition-colors flex flex-col items-center">
                <div className="w-16 h-16 bg-neutral-50 dark:bg-neutral-950 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-neutral-300 dark:text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-[11px] text-neutral-400 dark:text-neutral-600 italic font-bold uppercase tracking-widest leading-loose">{t('projects.details.noCertMsg')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
