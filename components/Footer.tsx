
import React from 'react';
import { USER_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-neutral-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
        <p>© {currentYear} {USER_INFO.name}. {t('footer.builtWith')}</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <span>{t('footer.private')}</span>
          <div className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-neutral-500">{t('footer.status')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
