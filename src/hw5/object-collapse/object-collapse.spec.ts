import {collapse} from "./object-collapse";

describe('object-collapse', () => {
    test("should correctly collapse object", () => {
        const obj = {
            a: {
                b: [1, 2],
                '': {c: 2}
            }
        };

        /* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
        expect(collapse(obj)).toEqual({'a.b.0': 1, 'a.b.1': 2, 'a..c': 2});
    })
})