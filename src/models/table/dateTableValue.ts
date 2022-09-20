import { ColumnTableValue } from "./columnTableValue.js";

export class DateTableValue extends ColumnTableValue {
  constructor(value: string | number | Date) {
    super(`${value}`);
    this.type = "date";
    this.value = this.toDate(value);
  }

  // eslint-disable-next-line class-methods-use-this
  private toDate(input: string | number | Date): number {
    if (input) {
      if (input instanceof Date) {
        return input.getTime();
      }
      if (typeof input === "string") {
        return Date.parse(input);
      }
      if (typeof input === "number") {
        if (input.toString().length <= 10) {
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
