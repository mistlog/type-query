import path from "path";
import fs from "fs";
import { TypeRuntime } from "../../src";

describe("type runtime", () => {
    test("get type info", () => {
        const filePath = path.resolve(__dirname, "../assets/core-basic.type")
        const input = fs.readFileSync(filePath, "utf-8");

        const runtime = new TypeRuntime(filePath, input);
        const typeInfo = runtime.run();

        expect(typeInfo.tsType).toMatchSnapshot();
    })
})