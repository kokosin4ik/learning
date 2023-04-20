import {Schema} from "./types";
import {createBitGetter} from "../bitGetter";

const BYTE_SIZE = 8;

export const encode = (data: Array<any>, schema: Schema) => {
    const totalBits = schema.reduce((totalSize, item) => totalSize + item[0], 0)

    const bufferLength = Math.ceil(totalBits / BYTE_SIZE)
    const buffer = new ArrayBuffer(bufferLength);

    const dataView = new Uint8Array(buffer);
    const bitGetter = createBitGetter(dataView);

    let currentBitIndex = 0;

    data.forEach((value, index) => {
        const [bits, type] = schema[index];

        for (let bitIndex = 0; bitIndex < bits; bitIndex++) {
            const currentBufferIndex = Math.floor(currentBitIndex / BYTE_SIZE)
            const currentElementBitShift = currentBitIndex % 8;

            const elementView = new Uint8Array(
                type === 'ascii'
                    ? [...value].map(char => char.charCodeAt(0))
                    : [value]
            );
            const accessor = createBitGetter(elementView);

            const currentValueBit = accessor.get(Math.floor(bitIndex / BYTE_SIZE), bitIndex % BYTE_SIZE)

            bitGetter.set(currentBufferIndex, currentElementBitShift, currentValueBit);

            currentBitIndex++;
        }
    })

    return dataView.buffer;
}

export const decode = (buffer: ArrayBuffer, schema: Schema) => {
    const result: any[] = [];

    let currentBitIndex = 0;

    const dataView = new Uint8Array(buffer);
    const bitGetter = createBitGetter(dataView);

    schema.forEach((item) => {
        const [size, type] = item;


        const currentElementView = new Uint8Array(new Array(Math.ceil(size / BYTE_SIZE)).fill(0b0));
        const currentElementViewAccessor = createBitGetter(currentElementView)

        for (let bitIndex = 0; bitIndex < size; bitIndex++) {
            const currentBufferIndex = Math.floor(currentBitIndex / BYTE_SIZE)
            const currentElementBitShift = currentBitIndex % 8;

            const nextBit = bitGetter.get(currentBufferIndex, currentElementBitShift);

            currentElementViewAccessor.set(Math.floor(bitIndex / BYTE_SIZE), bitIndex % BYTE_SIZE, nextBit)

            currentBitIndex++
        }

        const value = type === 'ascii'
            ? currentElementView.reduce((str: string, code: number) => str + String.fromCharCode(code), '')
            : currentElementView[0];


        result.push(type === 'boolean' ? Boolean(value) : value);
    })

    return result;
}