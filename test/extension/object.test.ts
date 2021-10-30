import { getResultCode } from "../common";

describe("object", () => {
    test("readonly", () => {
        const name = "object-readonly";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("optional", () => {
        const name = "object-optional";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("optional: all", () => {
        const name = "object-optional-all";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })
})