import { ColumnTableValue } from "./columnTableValue.js";

export class IntegerTableValue extends ColumnTableValue {
  constructor(value: string) {
    super(value);
    this.type = "integer";
    this.value = Number.parseInt(value, 10);
  }
}
