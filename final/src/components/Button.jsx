import { useLanguage } from '../contexts/LanguageContext';

const Button = () => {
  const { t } = useLanguage();

  return (
    <button>
      {t('readMore')}
    </button>
  );
};

export default Button;
