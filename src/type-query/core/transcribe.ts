import { transform } from "@mistlog/typetype";
import { TypeContext, TypeRuntime } from "../../type-runtime";
import { TypeQuery } from "./type-query";
import { first, includes, length, omit, optional, pick, push, readonly } from "../extension";

export function transcribe(path: string, source: string) {
    const runtime = new TypeRuntime(path, source);
    const typeInfo = runtime.run();

    const context = new TypeContext(typeInfo, {}, typeInfo => {
        const query = new TypeQuery(typeInfo);
        // tuple
        query.install(first);
        query.install(includes);
        query.install(length);
        query.install(push);

        // object
        query.install(omit);
        query.install(optional);
        query.install(pick);
        query.install(readonly);
        return query
    });

    const result = transform(source, { debug: true, context });
    return result;
}