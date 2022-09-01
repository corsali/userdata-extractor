import mapkeys from "lodash.mapkeys";
import mapvalues from "lodash.mapvalues";

/**
 * Recursively modifies a JSON object so that all of its keys are lowercase
 * { Key: value } => { key: value }
 * @param jsonDocument
 * @returns
 */
const recursivelyLowercaseObjectKeys = (jsonDocument: any): object => {
  if (typeof jsonDocument !== "object" || jsonDocument === null) {
    return jsonDocument;
  }
  if (Array.isArray(jsonDocument)) {
    return jsonDocument.map((o: any) => recursivelyLowercaseObjectKeys(o));
  }

  return mapvalues(
    mapkeys(jsonDocument, (value, key) => key.toLowerCase()),
    (value) => recursivelyLowercaseObjectKeys(value)
  );
};

export { recursivelyLowercaseObjectKeys };
