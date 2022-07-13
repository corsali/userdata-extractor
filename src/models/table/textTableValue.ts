import { ColumnTableValue } from "./columnTableValue.js";

export class TextTableValue extends ColumnTableValue {
  constructor(value: string) {
    super(value);
    this.type = "text";
    this.value = value || "";
  }
}
