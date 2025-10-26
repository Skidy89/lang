/** Type definitions for lang 0.0.1
 *  Project: lang
 */
export interface LangMap {
  [key: string]: string;
}
/** Collection of language maps */
export interface LangCollection {
  [languageName: string]: LangMap;
}
export declare const langs: LangCollection;


//# sourceMappingURL=index.d.ts.map
export function loadLang(langName: string): Promise<LangMap | null>;
export function loadLangs(langNames: string[]): Promise<Map<string, LangMap | null>>;
export function loadChdlang(langName: string): Promise<LangMap | null>;
export function clearLangCache(): void;
