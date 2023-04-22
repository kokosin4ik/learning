import {LinkedList} from "../linkedList";

export class Queue<T> {
    list!: LinkedList<T>;

    constructor() {
        this.list = new LinkedList<T>();
    }

    get head() {
        return this.list.first?.value;
    }

    addRight(value: T) {
        this.list.addRight(value)
    }

    popLeft() {
        const value = this.list.popLeft();
        if (value === null) {
            throw new Error('queue is empty')
        }
        return value;
    }
}