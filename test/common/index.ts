import path from "path";
import fs from "fs";
import { transcribe } from "../../src/type-query";

export function getResultCode(name: string) {
    const filePath = path.resolve(__dirname, `../assets/${name}.type`);
    const source = fs.readFileSync(filePath, "utf-8");
    const result = transcribe(filePath, source);
    return result.code;
}