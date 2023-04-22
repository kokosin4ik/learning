const OpenBracketsPairs = {
    '[': ']',
    '(': ')',
    '{': '}',
}

const ClosedBracketsPairs = {
    ']': '[',
    ')': '(',
    '}': '{',
}

const ClosedBracketsSet = new Set(Object.keys(ClosedBracketsPairs));
const OpenBracketsSet = new Set(Object.keys(OpenBracketsPairs));

export const isValidStringWithBrackets = (str: string) => {
    const stack: string[] = [];


    for (const char of str) {
        if (!ClosedBracketsSet.has(char) && !OpenBracketsSet.has(char)) {
            continue;
        }

        if (!stack.length && ClosedBracketsSet.has(char)) {
            return false;
        }

        if (ClosedBracketsSet.has(char)) {
            const lastBracket = stack.pop();

            //@ts-ignore
            if (lastBracket !== ClosedBracketsPairs[char]) {
                return false;
            }
        }

        if (OpenBracketsSet.has(char)) {
            stack.push(char)
        }
    }

    return stack.length === 0;
}