import { useTranslation } from 'react-i18next';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en');
    };
    return (
        <button type="button" onClick={toggle}>
            {t('Switch Language')}
        </button>
    );
};
