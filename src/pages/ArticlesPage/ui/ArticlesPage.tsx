/* eslint-disable max-len */
import { classNames } from '@/shared/lib/classNames/classNames';
import style from './ArticlesPage.module.scss';
import { ArticleList } from '@/widgets/ArticleList';
import { ArticleView, IArticle } from '@/entities/article';

export interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(style.articlesPage, [className])}>
            <ArticleList
                view={ArticleView.GRID}
                articles={[
                    {
                        id: '1',
                        title: 'Javascript news',
                        subtitle: 'Что нового в JS за 2022 год?',
                        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
                        views: 1022,
                        createdAt: '26.02.2022',
                        user: {
                            id: '1',
                            username: 'Dima',
                            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
                        },
                        type: ['IT']
                    } as IArticle
                ]}
            />
        </div>
    );
};

export default ArticlesPage;
