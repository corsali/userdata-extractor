import mapvalues from "lodash.mapvalues";

const caseInsensitiveWrapperPropertiesHandler = {
  has: (target: { [key: string]: unknown }, prop: string) => {
    if (target.prop) {
      return true;
    }
    return Object.keys(target).some(
      (key) => key.toLowerCase() === prop.toLowerCase()
    );
  },

  get: (target: { [key: string]: unknown }, prop: string) => {
    if (target.prop) {
      return target.prop;
    }
    const entries = Object.entries(target);
    const found = entries.find(([key]) => {
      return key.toLowerCase() === prop.toLowerCase();
    })?.[1];
    return found;
  },
};

/**
 * Recursively wraps the object with Proxy that returns its properties with
 * case insensitive matching.
 * { Key: value } => { key: value }
 * @param jsonDocument
 * @returns
 */
const caseInsensitiveWrapper = (jsonDocument: any): object => {
  if (typeof jsonDocument !== "object" || jsonDocument === null) {
    return jsonDocument;
  }
  if (Array.isArray(jsonDocument)) {
    return jsonDocument.map((o: any) => caseInsensitiveWrapper(o));
  }

  return new Proxy(
    mapvalues(jsonDocument, (value) => caseInsensitiveWrapper(value)),
    caseInsensitiveWrapperPropertiesHandler
  );
};

export { caseInsensitiveWrapper };
