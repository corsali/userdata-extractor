import { ColumnItem } from "./columnItem.js";

export class DateItem extends ColumnItem {
  constructor(value: string) {
    super(value);
    this.type = "date";
    this.value = this.toDate(value);
  }

  // eslint-disable-next-line class-methods-use-this
  private toDate(input: string | number): number {
    if (input) {
      if (typeof input === "string") {
        return Date.parse(input);
      }
      if (typeof input === "number") {
        if (input.toString().length === 10) {
          return new Date(input * 1000).getTime();
        }
        if (input.toString().length === 13) {
          return new Date(input).getTime();
        }
      }
    }
    return 0;
  }
}