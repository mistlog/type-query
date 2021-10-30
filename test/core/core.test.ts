import { getResultCode } from "../common";

describe("core", () => {
    test("copy type with utils .use and .type", () => {
        const name = "basic";
        const code = getResultCode(name);
        expect(code).toMatchSnapshot();
    })
})