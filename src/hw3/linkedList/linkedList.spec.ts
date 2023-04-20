import {LinkedList} from "lib/linkedList";

describe('LinkedList', function () {
    test('shoud correctly implement contract', () => {
        const list = new LinkedList<number>();

        list.add(1);
        list.add(2);
        list.add(3);

        expect(list.first?.value).toBe(1);
        expect(list.last?.value).toBe(3);
        expect(list.last?.next).toBe(null);
        expect(list.first?.next?.value).toBe(2);
        expect(list.first?.next?.prev?.value).toBe(1);
    })

    test('should be itterable', () => {
        const list = new LinkedList<number>();

        let i = 0
        list.add(i);
        list.add(i + 1);
        list.add(i + 2);

        for (const listElement of list) {
            expect(listElement).toBe(i)
            i++
        }
    })
});