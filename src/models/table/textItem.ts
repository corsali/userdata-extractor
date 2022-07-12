import { ColumnItem } from "./columnItem.js";

export class TextItem extends ColumnItem {
  constructor(value: string) {
    super(value);
    this.type = "text";
    this.value = value || "";
  }
}
