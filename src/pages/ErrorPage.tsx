import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div>
            <p>{t('Smth went wrong')}</p>
            <button type="button" onClick={reloadPage}>
                {t('Reload the page')}
            </button>
        </div>
    );
};
