import {Queue} from "../queue";

export class Dequeue<T> extends Queue<T>{

    addLeft(value: T) {
        this.list.addLeft(value)
    }

    popRight() {
        const value = this.list.popRight();
        if (value === null) {
            throw new Error('queue is empty')
        }
        return value;
    }
}