import { ColumnTableValue } from "./columnTableValue.js";

export class JsonTableValue extends ColumnTableValue {
  constructor(value?: object) {
    const stringifiedValue = value != null ? JSON.stringify(value) : "";
    super(stringifiedValue);
    this.type = "json";
    this.value = stringifiedValue;
  }
}
