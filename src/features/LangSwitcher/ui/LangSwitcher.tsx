import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './LangSwitcher.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';

export interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className } = props;

    const { i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(style.langSwitcher, [className])}
            onClick={toggle}
            icon={icons.LANG}
            text
        />
    );
});
