import { ColumnTableValue } from "./columnTableValue.js";

export class IntegerTableValue extends ColumnTableValue {
  constructor(value: string | number) {
    super(`${value}`);
    this.type = "integer";
    this.value = typeof value === "number" ? value : Number.parseInt(value, 10);
  }
}
