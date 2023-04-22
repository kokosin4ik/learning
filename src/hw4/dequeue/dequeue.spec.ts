import {Dequeue} from "../../lib/dequeue";

describe("Dequeue", () => {
    test("should correctly initialize", () => {
        const dequeue = new Dequeue();

        dequeue.addRight(10);
        dequeue.addLeft(11);
        dequeue.addRight(12);

        expect(dequeue.popRight()).toBe(12);// 12
        expect(dequeue.popLeft()).toBe(11); // 11
        expect(dequeue.popRight()).toBe(10);

        expect(() => dequeue.popLeft()).toThrowError();   // Exception
    })
})