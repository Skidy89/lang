"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSL = void 0;
const lang_1 = require("../lang");
/** SSL.js */
class SSL {
    constructor(dir) {
        this._loader = null;
        this._dir = dir;
    }
    /** Loads language data, caching the loader function */
    async load() {
        if (!this._loader)
            this._loader = lang_1.loadChdlang;
        return await this._loader(this._dir);
    }
    /** Clears the global language cache */
    clearCache() {
        (0, lang_1.clearLangCache)();
    }
    /** Returns the current loader function */
    get loader() {
        return this._loader;
    }
    /** Directory used for loading language files */
    get directory() {
        return this._dir;
    }
    /** Update the directory used for loading language files */
    set directory(dir) {
        this._dir = dir;
    }
}
exports.SSL = SSL;
