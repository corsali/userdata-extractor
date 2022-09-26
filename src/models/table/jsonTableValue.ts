import { ColumnTableValue } from "./columnTableValue.js";

export class JsonTableValue extends ColumnTableValue {
  constructor(value?: object | string) {
    let stringifiedValue = "";
    try {
      stringifiedValue =
        typeof value !== "string" ? JSON.stringify(value) : value;
    } finally {
      // Unable to stringify JSON
      stringifiedValue = stringifiedValue || "";
    }

    super(stringifiedValue);
    this.type = "json";
    this.value = stringifiedValue;
  }
}
