import { getResultCode } from "../common";

describe("tuple", () => {
    test("to object", () => {
        const name = "tuple-to-object";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })
    
    test("first", () => {
        const name = "tuple-first";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("length", () => {
        const name = "tuple-length";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("push", () => {
        const name = "tuple-push";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("includes", () => {
        const name = "tuple-includes";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

})