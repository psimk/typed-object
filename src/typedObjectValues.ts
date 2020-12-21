export type ObjectValues = <T extends object>(
  o: T
) => Array<
  {
    [K in keyof T]: K extends string | number | symbol ? T[K] : never;
  }[keyof T]
>;

export default Object.values as ObjectValues;
