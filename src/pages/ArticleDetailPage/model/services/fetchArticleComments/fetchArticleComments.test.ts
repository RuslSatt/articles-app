import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { IComment } from '@/entities/comment';
import { fetchArticleComments } from './fetchArticleComments';

const data: IComment = {
    id: '1',
    text: 'test comment',
    user: {
        username: 'admin',
        id: '1'
    },
    articleId: '1'
};

describe('fetchArticleComments', () => {
    test('success fetch article comments by article id', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticleComments);
        TestThunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const action = await TestThunk.callThunk('1');

        expect(TestThunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(data);
    });

    test('error fetch article comments by article id', async () => {
        const TestThunk = new TestAsyncThunk(fetchArticleComments);
        TestThunk.api.get.mockReturnValue(Promise.resolve(null));
        const action = await TestThunk.callThunk('1');

        expect(action.meta.requestStatus).toBe('rejected');
    });
});
