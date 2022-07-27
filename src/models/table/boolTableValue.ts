import { ColumnTableValue } from "./columnTableValue.js";

export class BoolTableValue extends ColumnTableValue {
  constructor(value: string | boolean) {
    super(`${value}`);
    this.type = "bool";
    this.value =
      typeof value === "boolean" ? value : value?.toLowerCase() === "true";
  }
}
