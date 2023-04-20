import {Schema} from "../../lib/encoder/types";
import {decode, encode} from "../../lib/encoder";


describe('BitGetter', function () {
    test('encode and decode', () => {
        const schema: Schema = [
            [6, "number"],
            [2, "number"],
            [2, "boolean"],
            [2, "boolean"],
            [24, "ascii"],
        ];

        const data = [28, 2, true, false, 'aBa'];
        const encoded = encode(data, schema);


        const decoded = decode(
            encoded,
            schema,
        );

        expect(decoded).toEqual(data)
    })

});