import { clearLangCache, generateTypescriptDefs, loadChdlang } from "@skidy89/ssl.js";

/** SSL.js */
export class SSL {
    private _dir: string;
    private _loader: typeof loadChdlang | null = null;

    constructor(dir: string) {
        this._dir = dir;
    }

    /** Loads language data, caching the loader function */
    public load<T>(): T | null {
        if (!this._loader) this._loader = loadChdlang;
        return this._loader(this._dir)! as T | null;
    }
    public generateTypescriptDefs(output: string): void {
        return generateTypescriptDefs(this._dir, output);
    }

    /** Clears the global language cache */
    public clearCache() {
        clearLangCache();
    }

    /** Returns the current loader function */
    public get loader() {
        return this._loader;
    }

    /** Directory used for loading language files */
    public get directory() {
        return this._dir;
    }

    /** Update the directory used for loading language files */
    public set directory(dir: string) {
        this._dir = dir;
    }
}
