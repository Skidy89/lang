import { loadChdlang } from "../index";
import { LangCollection } from "../types/types";
/** SSL.js */
export declare class SSL {
    private _dir;
    private _loader;
    constructor(dir: string);
    /** Loads language data, caching the loader function */
    load(): Promise<LangCollection | null>;
    /** Clears the global language cache */
    clearCache(): void;
    /** Returns the current loader function */
    get loader(): typeof loadChdlang | null;
    /** Directory used for loading language files */
    get directory(): string;
    /** Update the directory used for loading language files */
    set directory(dir: string);
}
