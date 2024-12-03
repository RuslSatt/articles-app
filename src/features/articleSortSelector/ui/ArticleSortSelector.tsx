import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import style from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortField } from '@/entities/article';
import { SortOrder } from '@/shared/types/sort';
import { Listbox, ListBoxOption } from '@/shared/ui/Popups';

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

    const orderOptions = useMemo<ListBoxOption<SortOrder>[]>(() => {
        return [
            {
                id: '1',
                value: 'asc',
                name: t('По возрастанию')
            },
            {
                id: '2',
                value: 'desc',
                name: t('По убыванию')
            }
        ];
    }, [t]);

    const sortOptions = useMemo<ListBoxOption<ArticleSortField>[]>(() => {
        return [
            {
                id: '1',
                value: ArticleSortField.TITLE,
                name: t('По названию')
            },
            {
                id: '2',
                value: ArticleSortField.VIEWS,
                name: t('По просмотрам')
            },
            {
                id: '3',
                value: ArticleSortField.CREATED_DATE,
                name: t('По дате создания')
            }
        ];
    }, [t]);

    return (
        <div className={classNames(style.articleSortSelector, [className])}>
            <Listbox<SortOrder>
                onChange={onChangeOrder}
                optionLabel='content'
                className={style.order}
                options={orderOptions}
                value={order}
            />
            <Listbox<ArticleSortField>
                onChange={onChangeSort}
                optionLabel='content'
                className={style.sort}
                options={sortOptions}
                value={sort}
            />
        </div>
    );
});
