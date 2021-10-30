import { IObjectTypeLiteral, ITypeObjectProperty } from "@mistlog/typetype";

export function omit(ast: IObjectTypeLiteral, predicate: Function): IObjectTypeLiteral {
    ast.props = ast.props.filter(each => {
        if (each.kind === "TypeObjectProperty") {
            const key = each.name.kind === "Identifier" ? each.name.name : each.name.kind === "StringLiteral" ? each.name.value : "";
            const shouldRemove = predicate(key);
            return shouldRemove ? false : true;
        }
        return true;
    })
    return ast;
}

export function readonly(ast: IObjectTypeLiteral, key: string): IObjectTypeLiteral {
    const prop = ast.props.find(each => each.kind === "TypeObjectProperty" && each.name.kind === "Identifier" && each.name.name === key) as ITypeObjectProperty;
    if (prop) {
        prop.readonly = true
    }
    return ast;
}

export function optional(ast: IObjectTypeLiteral, key: string): IObjectTypeLiteral {
    if (key) {
        const prop = ast.props.find(each => each.kind === "TypeObjectProperty" && each.name.kind === "Identifier" && each.name.name === key) as ITypeObjectProperty;
        if (prop) {
            prop.optional = true
        }
    } else {
        ast.props = ast.props.map(each => {
            if (each.kind === "TypeObjectProperty") {
                each.optional = true;
            }
            return each;
        })
    }

    return ast;
}

export function pick(ast: IObjectTypeLiteral, ...toPick: string[]): IObjectTypeLiteral {
    ast.props = ast.props.filter(each => {
        if (each.kind === "TypeObjectProperty" && each.name.kind === "Identifier") {
            return toPick.includes(each.name.name);
        }
    })
    return ast;
}