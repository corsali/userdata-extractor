import { TextTableValue } from "./textTableValue.js";

export class EmailTableValue extends TextTableValue {
  constructor(value: string) {
    super(value);
    this.type = "email";
    this.value = value ?? "";
  }
}
