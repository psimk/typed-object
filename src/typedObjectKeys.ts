export type ObjectKeys = <T extends object>(
  o: T
) => Array<
  Extract<
    {
      [K in keyof T]: K extends string | number | symbol ? K : never;
    }[keyof T],
    string | number | symbol
  >
>;

export default Object.keys as ObjectKeys;
