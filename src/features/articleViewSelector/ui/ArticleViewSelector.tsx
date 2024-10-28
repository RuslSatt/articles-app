import { memo } from 'react';
import style from './ArticleViewSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { icons } from '@/shared/assets/icons/types';
import { ArticleView } from '@/entities/article';

export interface ArticleViewSelectorProps {
    className?: string;
    onChangeView?: (view?: ArticleView) => void;
}

const views = [
    {
        view: ArticleView.GRID,
        icon: icons.GRID
    },
    {
        view: ArticleView.LIST,
        icon: icons.LIST
    }
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, onChangeView } = props;

    const onClick = (view: ArticleView) => () => {
        onChangeView?.(view);
    };

    return (
        <div className={classNames(style.articleViewSelector, [className])}>
            {views.map((view) => (
                <Button
                    key={view.view}
                    onClick={onClick(view.view)}
                    className={style.grid}
                    icon={view.icon}
                    text
                />
            ))}
        </div>
    );
});
