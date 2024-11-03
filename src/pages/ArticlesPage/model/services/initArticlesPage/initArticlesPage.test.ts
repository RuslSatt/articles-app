import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
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

describe('initArticlesPage', () => {
    test('success init articles page', async () => {
        const TestThunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage
        });

        await TestThunk.callThunk(new URLSearchParams());

        expect(TestThunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('not called init articles page with mounted', async () => {
        const TestThunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                ...articlesPage,
                _mounted: true
            }
        });

        await TestThunk.callThunk(new URLSearchParams());

        expect(TestThunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
