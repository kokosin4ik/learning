import {TypedArrayStack} from "../../lib/typedArrayStack";

describe("STACK", () => {
    test("should correctly initialize", () => {
        const stack = new TypedArrayStack(10);

        stack.push(10);
        stack.push(11);
        stack.push(12);

        expect(stack.head).toBe(12);  // 12

        expect(stack.pop()).toBe(12); // 12

        expect(stack.head).toBe(11);  // 11

        expect(stack.pop()).toBe(11); // 11
        expect(stack.pop()).toBe(10); // 10
        expect(() => stack.pop()).toThrowError(); // Exception

    })
})