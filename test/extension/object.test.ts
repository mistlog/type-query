import { getResultCode } from "../common";

describe("object", () => {
    test("pick", () => {
        const name = "object-pick";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("omit", () => {
        const name = "object-omit";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

    test("omit: condition", () => {
        const name = "object-omit-condition";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })

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