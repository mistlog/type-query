import * as ts from "typescript";
import { createProjectSync, Project } from "@ts-morph/bootstrap";
import { transform, ITypeFile } from "@mistlog/typetype";

export interface ITypeInfo {
    readonly tsType: Record<string, string>
    readonly tsAST: Record<string, ts.Type>
    readonly typeFile: ITypeFile
}

export class TypeRuntime {
    private filePath: string
    private typeCode: string
    private tsCode: string
    private typeFile: ITypeFile;

    //
    private project: Project

    constructor(filePath: string, typeCode: string) {
        //
        this.filePath = filePath;
        this.typeCode = typeCode;
        let code = "";
        try {
            const result = transform(this.typeCode, { debug: true });
            code = result.code;
            this.typeFile = result.ast;
        } catch (error) {
            if (error.message !== "Expected TypeFile but end of input found.") {
                throw error;
            }
        }
        this.tsCode = code;

        //
        this.project = createProjectSync();
    }

    run(): ITypeInfo {
        // extension .ts is necessary here to make sure ts works as expected
        // or this.checker.getSymbolAtLocation(...) will return undefined
        const sourceFile = this.project.updateSourceFile(this.filePath.replace(".type", ".ts"), this.tsCode);
        const program = this.project.createProgram() as any as ts.Program;
        const checker = program.getTypeChecker();

        //
        const tsType = {};
        const tsAST = {};
        
        //
        ts.forEachChild(sourceFile, node => {
            if (ts.isTypeAliasDeclaration(node)) {
                let symbol = checker.getSymbolAtLocation(node.name);
                if (symbol) {
                    const name = symbol.name;
                    const type = checker.getDeclaredTypeOfSymbol(symbol);
                    const typeAsString = checker.typeToString(type, sourceFile, ts.TypeFormatFlags.InTypeAlias);
                    tsType[name] = typeAsString;
                    tsAST[name] = type;
                }
            }
        });
        return { tsType, tsAST, typeFile: this.typeFile };
    }
}