import { IBooleanTypeLiteral, INumberTypeLiteral, IStringTypeLiteral } from "@mistlog/typetype";

export function stringTypeLiteral(value: string): IStringTypeLiteral {
    return {
        kind: "StringTypeLiteral",
        value
    };
}

export function numberTypeLiteral(value: number): INumberTypeLiteral {
    return {
        kind: "NumberTypeLiteral",
        value
    };
}

export function booleanTypeLiteral(value: boolean): IBooleanTypeLiteral {
    return {
        kind: "BooleanTypeLiteral",
        value
    };
}