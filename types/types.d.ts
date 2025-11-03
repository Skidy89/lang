/** Type definitions for lang 0.0.1
 *  Project: lang
 */
export type ExtractPlaceholders<T extends string> =
  T extends `${string}{${infer P}}${infer Rest}`
    ? P | ExtractPlaceholders<Rest>
    : never;

export type FmtLang = <
  T extends string,
  P extends ExtractPlaceholders<T>
>(
  text: T,
  args: Record<P, string>
) => string;




