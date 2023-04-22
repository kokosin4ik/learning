class Node<T> {
    prev: Node<T> | null = null;
    next: Node<T> | null = null;

    value: T;

    constructor(value: T) {
        this.value = value;
    }
}

export interface ILinkedList<T> {
    get first(): Node<T> | null;

    get last(): Node<T> | null;

    addRight(value: T): void;
    addLeft(value: T): void;

    popRight(): T | null;
    popLeft(): T | null;

}

export class LinkedList<T> implements ILinkedList<T> {
    first: Node<T> | null = null;
    last: Node<T> | null = null;

    addRight(value: T) {
        const node = new Node(value);

        if (this.last === null) {
            this.first = node;
            this.last = node;
            return;
        }

        node.prev = this.last;
        this.last.next = node
        this.last = node
    }

    popLeft() {
        if (this.first === null) {
            return null;
        }

        const value = this.first.value;

        if (this.last === this.first) {
            this.last = null;
            this.first = null;
        } else {
            const next = this.first.next;

            if (next) {
                next.prev = null;
                this.first = next;
            } else {
                this.first = null
            }
        }

        return value;
    }

    addLeft(value: T) {
        const node = new Node(value);

        if (this.first == null) {
            this.first = node;
            this.last = node;
            return;
        }

        node.next = this.first;
        this.first.prev = node
        this.first = node
    }

    popRight() {
        if (this.last === null) {
            return null;
        }

        const value = this.last.value;



        if (this.last === this.first) {
            this.last = null;
            this.first = null;
        } else {
            const prev = this.last.prev;

            if (prev) {
                prev.next = null;
                this.last = prev;
            } else {
                this.last = null
            }
        }

        return value;
    }


    * [Symbol.iterator]() {
        let current = this.first;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }



}