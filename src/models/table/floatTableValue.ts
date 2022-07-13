import { ColumnTableValue } from "./columnTableValue.js";

export class FloatTableValue extends ColumnTableValue {
  constructor(value: string) {
    super(value);
    this.type = "float";
    this.value = Number.parseFloat(value);
  }
}
