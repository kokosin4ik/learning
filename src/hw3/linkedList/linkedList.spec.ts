import {LinkedList} from "../../lib/linkedList";

describe('LinkedList', function () {
    test('shoud correctly implement contract', () => {
        const list = new LinkedList<number>();

        list.addRight(1);
        list.addRight(2);
        list.addRight(3);

        expect(list.first?.value).toBe(1);
        expect(list.last?.value).toBe(3);
        expect(list.last?.next).toBe(null);
        expect(list.first?.next?.value).toBe(2);
        expect(list.first?.next?.prev?.value).toBe(1);
    })

    test('should be itterable', () => {
        const list = new LinkedList<number>();

        let i = 0
        list.addRight(i);
        list.addRight(i + 1);
        list.addRight(i + 2);

        for (const listElement of list) {
            expect(listElement).toBe(i)
            i++
        }
    })
});