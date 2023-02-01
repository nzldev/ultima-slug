declare module ultimaSlug {
  type ExtendArgs = {
    [key: string]: any;
  }

  export function extend (args: ExtendArgs): void;
}

declare function ultimaSlug(
  string: string,
  options?:
    | {
        replacement?: string;
        remove?: RegExp;
        lower?: boolean;
        strict?: boolean;
        locale?: string;
        trim?: boolean;
      }
    | string,

): string;

export default ultimaSlug;
