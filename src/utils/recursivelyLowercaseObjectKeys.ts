/**
 * Recursively modifies a JSON object so that all of its keys are lowercase
 * { Key: value } => { key: value }
 * @param jsonDocument
 * @returns
 */
const recursivelyLowercaseObjectKeys = (jsonDocument: any) => {
  if (typeof jsonDocument !== "object" || jsonDocument === null) {
    return jsonDocument;
  }
  if (isArray(jsonDocument)) {
    return jsonDocument.map((o: any) => recursivelyLowercaseObjectKeys(o));
  }
  return Object.keys(jsonDocument).reduce(
    (
      prev: {
        [key: string]: any;
      },
      curr
    ) => {
      // eslint-disable-next-line no-param-reassign
      prev[curr.toLowerCase()] = recursivelyLowercaseObjectKeys(
        jsonDocument[curr]
      );
      return prev;
    },
    {}
  );
};

const isArray = (obj: any) => {
  return Object.prototype.toString.call(obj) === "[object Array]";
};

export { recursivelyLowercaseObjectKeys };
