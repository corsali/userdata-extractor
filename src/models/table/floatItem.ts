import { ColumnItem } from "./columnItem.js";

export class FloatItem extends ColumnItem {
  constructor(value: string) {
    super(value);
    this.type = "float";
    this.value = Number.parseFloat(value);
  }
}
