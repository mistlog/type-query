import { IIntersectionType, ITupleType, IUnionType } from "@mistlog/typetype"

export function unionToIntersection(ast: IUnionType): IIntersectionType {
    return {
        kind: "IntersectionType",
        types: ast.types
    }
}

export function unionToTuple(ast: IUnionType): ITupleType {
    return {
        kind: "TupleType",
        items: ast.types
    }
}