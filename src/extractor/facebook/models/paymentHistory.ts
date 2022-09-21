import {
  DateTableValue,
  FloatTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class PaymentHistory extends FacebookBaseModel {
  payment_date?: DateTableValue;

  amount?: FloatTableValue;

  currency?: TextTableValue;

  sender_name?: TextTableValue;

  receiver_name?: TextTableValue;

  type?: TextTableValue;

  payment_status?: TextTableValue;

  payment_memo?: TextTableValue;

  payment_method?: TextTableValue;

  ip_address?: TextTableValue;

  constructor(values: {
    paymentDate: number;
    amount: number;
    currency: string;
    senderName: string;
    receiverName: string;
    type: string;
    paymentStatus: string;
    paymentMemo: string;
    paymentMethod: string;
    ipAddress: string;
  }) {
    super();
    this.payment_date = new DateTableValue(values.paymentDate);
    this.amount = new FloatTableValue(values.amount);
    this.currency = new TextTableValue(values.currency);
    this.sender_name = new TextTableValue(values.senderName);
    this.receiver_name = new TextTableValue(values.receiverName);
    this.type = new TextTableValue(values.type);
    this.payment_status = new TextTableValue(values.paymentStatus);
    this.payment_memo = new TextTableValue(values.paymentMemo);
    this.payment_method = new TextTableValue(values.paymentMethod);
    this.ip_address = new TextTableValue(values.ipAddress);
  }
}
