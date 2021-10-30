import { getResultCode } from "../common";

describe("union", () => {
    test("to tuple", () => {
        const name = "union-to-tuple";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("to intersection", () => {
        const name = "union-to-intersection";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })
})