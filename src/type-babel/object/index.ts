import { ITypeObjectProperty } from "@mistlog/typetype";

export function typeObjectProp(key: string, value: string): ITypeObjectProperty {
    return {
        kind: "TypeObjectProperty",
        readonly: false,
        optional: false,
        name: {
            kind: "Identifier",
            name: key
        },
        value: {
            kind: "StringTypeLiteral",
            value: value
        }
    }
}
