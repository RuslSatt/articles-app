import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectButton, SelectButtonOption } from '@/shared/ui/SelectButton/SelectButton';
import { ArticleType } from '@/entities/article';

export interface ArticleTypeSelectorProps {
    className?: string;
    type: ArticleType;
    onChangeType: (value: ArticleType) => void;
}

export const ArticleTypeSelector = (props: ArticleTypeSelectorProps) => {
    const { className, type, onChangeType } = props;

    const { t } = useTranslation();

    const selectButtonOptions = useMemo<SelectButtonOption<ArticleType>[]>(() => {
        return [
            {
                value: ArticleType.ALL,
                label: t('Все статьи')
            },
            {
                value: ArticleType.IT,
                label: t('Разработка')
            },
            {
                value: ArticleType.SCIENCE,
                label: t('Наука')
            },
            {
                value: ArticleType.ECONOMICS,
                label: t('Экономика')
            }
        ];
    }, [t]);

    return (
        <div>
            <SelectButton
                onChange={onChangeType}
                gap={10}
                options={selectButtonOptions}
                optionLabel='label'
                value={type}
            />
        </div>
    );
};
