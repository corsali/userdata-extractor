import { ColumnItem } from "./columnItem.js";

export class IntegerItem extends ColumnItem {
  constructor(value: string) {
    super(value);
    this.type = "integer";
    this.value = Number.parseInt(value, 10);
  }
}
