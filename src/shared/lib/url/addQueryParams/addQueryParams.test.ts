import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = { search: '1' };
        const result = getQueryParams(params);

        expect(result).toBe('?search=1');
    });

    test('test with multiple params', () => {
        const params = { search: '1', order: 'asc' };
        const result = getQueryParams(params);

        expect(result).toBe('?search=1&order=asc');
    });
});
