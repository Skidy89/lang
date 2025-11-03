"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fmt_lang = exports.SSL = void 0;
const ssl_js_1 = require("@skidy89/ssl.js");
/** SSL.js */
class SSL {
    constructor(dir) {
        this._loader = null;
        this._dir = dir;
    }
    /** Loads language data, caching the loader function */
    load() {
        if (!this._loader)
            this._loader = ssl_js_1.loadChdlang;
        return this._loader(this._dir);
    }
    generateTypescriptDefs(output) {
        return (0, ssl_js_1.generateTypescriptDefs)(this._dir, output);
    }
    /** Clears the global language cache */
    clearCache() {
        (0, ssl_js_1.clearLangCache)();
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
const fmt_lang = (text, args) => {
    let result = '';
    let i = 0;
    while (i < text.length) {
        const start = text.indexOf('{', i);
        if (start === -1) {
            result += text.slice(i);
            break;
        }
        result += text.slice(i, start);
        const end = text.indexOf('}', start + 1);
        if (end === -1) {
            result += text.slice(start);
            break;
        }
        const key = text.slice(start + 1, end);
        result += args[key] ?? `{${key}}`;
        i = end + 1;
    }
    return result;
};
exports.fmt_lang = fmt_lang;
