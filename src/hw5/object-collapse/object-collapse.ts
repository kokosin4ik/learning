const obj = {
    a: {
        b: [1, 2],
        '': {c: 2}
    }
};

const isObjectOrArray = (value: any) =>
    typeof value === 'object' &&
    value !== null

export const collapse = (obj: any) => {
    const result: Record<any, any> = {};

    const process = (currentObj: any, currentPropertyStack: any[] = []) => {
        for (const key in currentObj) {
            currentPropertyStack.push(key)

            if (isObjectOrArray(currentObj[key])) {
                process(currentObj[key], currentPropertyStack)
            } else {
                result[currentPropertyStack.join('.')] = currentObj[key];
            }

            currentPropertyStack.pop()
        }
    }

    process(obj, []);

    return result;
}


/* {'a.b.0': 1, 'a.b.1': 2, 'a..c': 2} */
console.log(collapse(obj));