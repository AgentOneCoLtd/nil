"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
it('should get true (null)', () => {
    expect(index_1.isNil(null))
        .toBe(true);
});
it('should get true (undefined)', () => {
    expect(index_1.isNil(undefined))
        .toBe(true);
});
it('should get false (other)', () => {
    expect(index_1.isNil('null'))
        .toBe(false);
});
