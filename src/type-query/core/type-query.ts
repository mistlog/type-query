import { ITypeExpression, ITypeFile, ITypeVariableDeclaration } from "@mistlog/typetype";
import { neverType } from "../../type-babel";
import { ITypeInfo } from "../../type-runtime";

export class TypeQuery {
    tsAST: ITypeInfo["tsAST"]
    typeFile: ITypeInfo["typeFile"]
    returnResult: ITypeExpression

    constructor(typeInfo: ITypeInfo) {
        this.tsAST = typeInfo.tsAST;
        this.typeFile = typeInfo.typeFile;
        this.returnResult = neverType();
    }

    install(extension: Function, name: string = "") {
        const methodName = name || extension.name;
        this[methodName] = (...args: any[]) => {
            const cloned = this.clone(this.returnResult);
            this.returnResult = extension(cloned, ...args);
            return this;
        }
    }

    use(target: string | any) {
        if (typeof target === "string") {
            const cloned = this.clone(this.typeFile) as ITypeFile;
            const typeDeclaration = cloned.body.find(each => each.kind === "TypeVariableDeclaration" && each.declarator.name.name === target) as ITypeVariableDeclaration;
            this.returnResult = typeDeclaration.declarator.initializer;
            return this;
        } else {
            this.returnResult = this.clone(target);
            return this;
        }
    }

    type() {
        return this.returnResult;
    }

    private clone(value: any) {
        return JSON.parse(JSON.stringify(value))
    }
}