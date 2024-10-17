import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { ArticleBlockType, ArticleType, IArticle } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const data: IArticle = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: ['Программа, которую по традиции называют «Hello, world!»']
        }
    ]
};

describe('fetchArticleById', () => {
    test('success fetch article data', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticleById);
        TestThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk('1');

        expect(TestThunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetch article data', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticleById);
        TestThunk.api.get.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk('1');

        expect(action.meta.requestStatus).toBe('rejected');
    });
});
