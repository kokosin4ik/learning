export class TypedArrayStack {
    array!: Int32Array;
    current: number = -1;

    constructor(size: number) {
        this.array = new Int32Array(size)
    }

    push(value: number) {
        if (this.current === this.array.length - 1) {
            throw new Error('stack is filled')
        }
        this.array[++this.current] = value;
    }

    pop() {
        if (this.current === -1) {
            throw new Error('stack is empty')
        }
        return this.array[this.current--] ;
    }

    get head() {
        return this.array[this.current]
    }
}