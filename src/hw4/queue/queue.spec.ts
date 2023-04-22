import {Queue} from "../../lib/queue";

describe("Queue", () => {
    test("should correctly initialize", () => {
        const queue = new Queue<number>();

        queue.addRight(10);
        queue.addRight(11);
        queue.addRight(12);

        expect(queue.head).toBe(10);  // 10

        expect(queue.popLeft()).toBe(10); // 10

        expect(queue.head).toBe(11);  // 11

        expect(queue.popLeft()).toBe(11); // 11
        expect(queue.popLeft()).toBe(12); // 12
        expect(() => queue.popLeft()).toThrowError(); // Exception

    })
})