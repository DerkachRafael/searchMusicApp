import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <button type="button" onClick={toggleTheme}>
            {t('Theme Switcher')}
            -
            {theme === Theme.DARK ? t('Dark') : t('Light')}
            )
        </button>
    );
};
