import { isNil } from './index';

it('should get true (null)', () => {
    expect(isNil(null))
        .toBe(true);
});

it('should get true (undefined)', () => {
    expect(isNil(undefined))
        .toBe(true);
});

it('should get false (other)', () => {
    expect(isNil('null'))
        .toBe(false);
});
