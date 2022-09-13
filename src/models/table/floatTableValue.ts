import { ColumnTableValue } from "./columnTableValue.js";

export class FloatTableValue extends ColumnTableValue {
  constructor(value: string | number) {
    super(`${value}`);
    this.type = "float";
    this.value = typeof value === "number" ? value : Number.parseFloat(value);
  }
}
