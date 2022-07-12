import { ColumnItem } from "./columnItem.js";

export class BoolItem extends ColumnItem {
  constructor(value: string) {
    super(value);
    this.type = "bool";
    this.value = value?.toLowerCase() === "true";
  }
}
