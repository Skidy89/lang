import { clearLangCache, generateTypescriptDefs, loadChdlang } from "@skidy89/ssl.js";
import type { FmtLang } from "../types/types.js";
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

export const fmt_lang: FmtLang = (text, args): string => {
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
    result += (args as Record<string, string>)[key] ?? `{${key}}`;
    i = end + 1;
  }
  return result;
}

