import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';
import { ArticleSortField, ArticleType, ArticleView, IArticle } from '@/entities/article';
import { IArticlePageSchema } from '../../types/articlesPage';

const data: IArticle[] = [
    {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
            id: '1',
            username: 'Admin',
            avatar: 'https://i.pravatar.cc/300'
        },
        type: [ArticleType.IT],
        blocks: []
    }
];

const articlesPageData: IArticlePageSchema = {
    page: 1,
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
    _mounted: true
};

describe('fetchArticlesList', () => {
    test('success fetch articles list', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticlesList, {
            articlesPage: articlesPageData
        });
        TestThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk({});

        expect(TestThunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetch articles list', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticlesList);
        TestThunk.api.get.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk({});

        expect(action.meta.requestStatus).toBe('rejected');
    });
});
