import { TextTableValue } from "./textTableValue";

export class EmailTableValue extends TextTableValue {
  constructor(value: string) {
    super(value);
    this.type = "email";
    this.value = value ?? "";
  }
}
