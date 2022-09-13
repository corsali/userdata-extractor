/**
 * Flattens the input object into an object containing recursive dotted keys
 * for the objects.
 * E.g. { a: { b: 5, c: 2 }, d: 3  } -> { "a.b": 5, "a.c": 2, d: 3 }
 *
 * @param obj
 * @returns
 */
const flattenWithDotNotation = (obj: object) => {
  const dottedObject: { [key: string]: any } = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value !== "object") {
      dottedObject[key] = value;
    } else {
      Object.entries(flattenWithDotNotation(value)).forEach(
        ([subKey, subValue]) => {
          dottedObject[`${key}.${subKey}`] = subValue;
        }
      );
    }
  });

  return dottedObject;
};

export { flattenWithDotNotation };
