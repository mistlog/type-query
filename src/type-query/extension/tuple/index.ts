import { INumberTypeLiteral, IObjectTypeLiteral, ITupleType, ITypeExpression } from "@mistlog/typetype";
import { booleanTypeLiteral, neverType, numberTypeLiteral, stringTypeLiteral, typeObjectProp } from "../../../type-babel";

// https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md
export function tupleToObject(ast: ITupleType): IObjectTypeLiteral {
    return {
        kind: "ObjectTypeLiteral",
        props: ast.items.map(item => {
            if (item.kind === "StringTypeLiteral") {
                return typeObjectProp(item.value, item.value);
            }
        })
    }
}

export function push(ast: ITupleType, value: string | number): ITupleType {
    const item =
        typeof value === "string" ? stringTypeLiteral(value) :
            typeof value === "number" ? numberTypeLiteral(value) :
                neverType();

    ast.items.push(item);
    return ast;
}

export function includes(ast: ITupleType, toFind: string | number): ITypeExpression {
    const items = ast.items;
    const result = items.find(item => {
        if (item.kind === "NumberTypeLiteral" || item.kind === "StringTypeLiteral") {
            return item.value === toFind;
        }
    });
    const type = booleanTypeLiteral(Boolean(result));
    return type;
}

export function first(ast: ITupleType): ITypeExpression {
    return ast.items[0];
}

export function length(ast: ITupleType): INumberTypeLiteral {
    const length = ast.items.length;
    const type = numberTypeLiteral(length);
    return type;
}