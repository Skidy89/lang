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


