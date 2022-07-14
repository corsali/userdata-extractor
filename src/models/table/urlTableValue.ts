import { TextTableValue } from "./textTableValue";

export class UrlTableValue extends TextTableValue {
  constructor(value: string) {
    super(value);
    this.type = "url";
    this.value = value || "";
  }
}
