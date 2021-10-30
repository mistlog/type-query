import { INeverType } from "@mistlog/typetype";

export function neverType(): INeverType {
    return {
        kind: "NeverType",
        value: "never"
    };
}