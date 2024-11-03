import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { IArticlePageSchema } from '../../types/articlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

const articlesPage: IArticlePageSchema = {
    page: 2,
    ids: [],
    entities: {},
    limit: 5,
    isLoading: false,
    hasMore: true,
    view: ArticleView.LIST,
    sort: ArticleSortField.CREATED_DATE,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
    _mounted: false
};

describe('fetchNextArticlesPage', () => {
    test('success fetch next articles page', async () => {
        const TestThunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage
        });

        await TestThunk.callThunk();

        expect(TestThunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
    });

    test('not called fetch articles list with hasMore', async () => {
        const TestThunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ...articlesPage,
                hasMore: false
            }
        });

        await TestThunk.callThunk();

        expect(TestThunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });

    test('not called fetch articles list with isLoading', async () => {
        const TestThunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                ...articlesPage,
                isLoading: true
            }
        });

        await TestThunk.callThunk();

        expect(TestThunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
