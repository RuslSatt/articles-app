import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchArticlesList } from './fetchArticlesList';
import { ArticleType, IArticle } from '@/entities/article';

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

describe('fetchArticlesList', () => {
    test('success fetch articles list', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticlesList);
        TestThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk({ page: 1 });

        expect(TestThunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetch articles list', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticlesList);
        TestThunk.api.get.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk({ page: 1 });

        expect(action.meta.requestStatus).toBe('rejected');
    });
});
