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
    add(value: T): void;
}

export class LinkedList<T> implements ILinkedList<T>{
    first: Node<T>| null = null;
    last: Node<T> | null = null;

    constructor() {
    }


    add(value: T) {
        const node = new Node(value);

        if (!this.last) {
            this.first = node;
            this.last = node;
            return;
        }

        node.prev = this.last;
        this.last.next = node
        this.last = node
    }

    *[Symbol.iterator]() {
        let current = this.first;
        while (current !== null) {
            yield current.value;
            current = current.next;
        }
    }
}