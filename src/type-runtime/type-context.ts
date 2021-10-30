import { IContextType, ITypeExpression } from "@mistlog/typetype";
import { TypeQuery } from "..//type-query/";
import { ITypeInfo } from "./type-runtime";

export type TypeQueryFactory = (typeInfo: ITypeInfo) => TypeQuery;

export class TypeContext {
    typeInfo: ITypeInfo
    typeQueryFactory: TypeQueryFactory
    globalContext: any

    constructor(typeInfo: ITypeInfo, globalContext?: any, typeQueryFactory?: TypeQueryFactory) {
        this.typeInfo = typeInfo;
        this.typeQueryFactory = typeQueryFactory || (typeInfo => new TypeQuery(typeInfo));
        this.globalContext = globalContext || {};
    }

    resolveContextType(ast: IContextType): ITypeExpression {
        const { context, source: code } = ast.body;

        if (context === "use js") {
            const source = `return (() => {
                ${code}
            })()`;
            const load = new Function("$", "globalContext", source)
            const query = this.typeQueryFactory(this.typeInfo);
            const result = load(query, this.globalContext)
            return result;
        }
    }
}