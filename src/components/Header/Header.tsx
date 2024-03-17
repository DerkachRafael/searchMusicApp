import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'components/ThemeSwitcher';
import { LangSwitcher } from 'components/LangSwitcher';
import cls from './Header.module.scss';

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className={cls.Header}>
            <h1>
                {t('Music App')}
            </h1>
            <div className={cls.switcherBlock}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </header>
    );
};
