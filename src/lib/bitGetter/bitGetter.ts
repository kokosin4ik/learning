export function createBitGetter(array: Uint8Array) {
    return {
        get(elementIndex: number, bitIndex: number): number {
            const bit = array[elementIndex] & (0b1 << bitIndex);

            return bit === 0 ? 0 : 1;
        },
        set(elementIndex: number, bitIndex: number, newBitValue: number): void {
            array[elementIndex] = newBitValue === 0
                ? (array[elementIndex] & ~(0b1 << bitIndex))
                : (array[elementIndex] | 1 << bitIndex);
        }
    }
}
