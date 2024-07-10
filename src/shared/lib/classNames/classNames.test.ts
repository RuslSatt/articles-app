import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional params', () => {
        const expected = 'someClass class1 class2';

        expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
    });

    test('with mods params', () => {
        const expected = 'someClass hover';

        expect(classNames('someClass', [], { hover: true })).toBe(expected);
    });
});
