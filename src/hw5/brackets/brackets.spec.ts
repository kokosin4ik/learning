import {isValidStringWithBrackets} from "./brackets";

describe('brackets', () => {
    test("should correctly define valid string", () => {
        expect(isValidStringWithBrackets('(hello{world} and [me])')).toBe(true);  // true
        expect(isValidStringWithBrackets('(hello{world)} and [me])')).toBe(false); // false
        expect(isValidStringWithBrackets(')')).toBe(false);
    })
})