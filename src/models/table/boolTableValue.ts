import { ColumnTableValue } from "./columnTableValue.js";

export class BoolTableValue extends ColumnTableValue {
  constructor(value: string) {
    super(value);
    this.type = "bool";
    this.value = value?.toLowerCase() === "true";
  }
}
