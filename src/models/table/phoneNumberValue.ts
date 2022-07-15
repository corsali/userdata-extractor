import { TextTableValue } from "./textTableValue";

export class PhoneNumberValue extends TextTableValue {
  constructor(value: string) {
    super(value);
    this.type = "phone_number";
    this.value = value ?? "";
  }
}
