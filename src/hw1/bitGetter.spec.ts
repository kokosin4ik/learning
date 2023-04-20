import {createBitGetter} from "../lib/bitGetter";

describe('BitGetter', function () {
    test('Can get bit value', () => {
        const bitter = createBitGetter(new Uint8Array([0b1110, 0b1101]));
        expect(bitter.get(0, 1)).toBe(1);
        expect(bitter.get(1, 1)).toBe(0);
        expect(bitter.get(1, 2)).toBe(1);
    })
    test('Can set bit value', () => {
        const bitAccessor = createBitGetter(new Uint8Array([0b1110, 0b1101]));
        expect(bitAccessor.get(0, 1)).toBe(1);
        bitAccessor.set(0, 1, 0);
        expect(bitAccessor.get(0, 1)).toBe(0);
        expect(bitAccessor.get(1, 1)).toBe(0);
        bitAccessor.set(1, 1, 1);
        expect(bitAccessor.get(1, 1)).toBe(1);
    })
});