import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortField } from '@/entities/article';
import { Select } from '@/shared/ui/Select/Select';
import { SortOrder } from '@/shared/types/sort';

export interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (sort: ArticleSortField) => void;
    onChangeOrder: (order: SortOrder) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeSort, onChangeOrder } = props;

    const { t } = useTranslation();

    const orderOptions = useMemo(() => {
        return [
            {
                value: 'asc',
                content: t('По возрастанию')
            },
            {
                value: 'desc',
                content: t('По убыванию')
            }
        ];
    }, [t]);

    const sortOptions = useMemo(() => {
        return [
            {
                value: ArticleSortField.TITLE,
                content: t('По названию')
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('По просмотрам')
            },
            {
                value: ArticleSortField.CREATED_DATE,
                content: t('По дате создания')
            }
        ];
    }, [t]);

    return (
        <div className={classNames(style.articleSortSelector, [className])}>
            <Select<SortOrder>
                onChange={onChangeOrder}
                optionLabel='content'
                className={style.order}
                options={orderOptions}
                value={order}
            />
            <Select<ArticleSortField>
                onChange={onChangeSort}
                optionLabel='content'
                className={style.sort}
                options={sortOptions}
                value={sort}
            />
        </div>
    );
});
