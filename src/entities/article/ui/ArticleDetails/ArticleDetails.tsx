/* eslint-disable react/jsx-no-useless-fragment */
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticleDetails.module.scss';
import {
    DynamicReducerLoader,
    ReducersList
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { Message, Severity } from '@/shared/ui/Message/Message';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { ArticleBlock } from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { useInitialEffect } from '@/shared/lib/hooks/useInitailEffect';

export interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducersList: ReducersList = {
    articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const data = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    const contentBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
            case 'TEXT':
                return (
                    <ArticleTextBlock
                        key={block.id}
                        className={style.article_block}
                        content={block}
                    />
                );
            case 'CODE':
                return (
                    <ArticleCodeBlock
                        key={block.id}
                        className={style.article_block}
                        content={block}
                    />
                );
            case 'IMAGE':
                return (
                    <ArticleImageBlock
                        key={block.id}
                        className={style.article_block}
                        content={block}
                    />
                );
            default:
                return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <div className={style.skeleton}>
                <Skeleton width={200} height={200} borderRadius='50%' />
                <Skeleton width={300} height={32} />
                <Skeleton width={300} height={32} />
                <Skeleton width={600} height={32} />
                <Skeleton width={600} height={32} />
            </div>
        );
    } else if (error) {
        content = (
            <Message severity={Severity.ERROR} text={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = (
            <>
                <div className={style.article_avatar}>
                    <Avatar
                        size={AvatarSize.LARGE}
                        image={data?.img || ''}
                        width='200px'
                        height='200px'
                        borderRadius='50%'
                    />
                </div>

                <h1 className={style.title}>{data?.title}</h1>

                <p className={style.subtitle}>{data?.subtitle}</p>

                <div className={style.article_info}>
                    <div className={style.article_details__info}>
                        <EyeIcon className={style.article_details__icon} />
                        <span className={style.views}>{data?.views}</span>
                    </div>

                    <div className={style.article_details__info}>
                        <CalendarIcon className={style.article_details__icon} />
                        <span className={style.date}>{data?.createdAt}</span>
                    </div>
                </div>

                <div className={style.article_block_wrapper}>
                    {data?.blocks.map((block) => contentBlock(block))}
                </div>
            </>
        );
    }

    return (
        <DynamicReducerLoader reducersList={reducersList}>
            <div className={classNames(style.articleDetails, [className])}>{content}</div>
        </DynamicReducerLoader>
    );
});
