import { TextTableValue } from "./textTableValue.js";

export class UrlTableValue extends TextTableValue {
  constructor(value: string) {
    super(value);
    this.type = "url";
    this.value = value ?? "";
  }
}
