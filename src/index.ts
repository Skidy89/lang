import { clearLangCache, LangCollection, loadChdlang } from "../lang";

/** SSL.js */
export class SSL {
    private _dir: string;
    private _loader: typeof loadChdlang | null = null;

    constructor(dir: string) {
        this._dir = dir;
    }

    /** Loads language data, caching the loader function */
    public async load(): Promise<LangCollection | null> {
        if (!this._loader) this._loader = loadChdlang;
        return await this._loader(this._dir)! as LangCollection | null;
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
