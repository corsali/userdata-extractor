import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { PaymentHistory } from "../models/paymentHistory.js";

class PaymentHistoryJson extends JsonExtractor {
  async process() {
    const paymentHistory = this.query(`$.payments_v2.payments.*`);

    const processedPaymentHistory = paymentHistory.map(
      (payment) =>
        new PaymentHistory({
          paymentDate: payment.created_timestamp,
          amount: payment.amount,
          currency: payment.currency,
          senderName: payment.sender,
          receiverName: payment.receiver,
          type: payment.type,
          paymentStatus: payment.status,
          paymentMemo: payment.payment_data?.p2p_payment?.memo,
          paymentMethod: payment.payment_method,
          ipAddress: payment.ip,
        })
    );

    this.table.rows.push(...processedPaymentHistory);
  }
}

export const paymentHistoryJson = new PaymentHistoryJson(
  config.SERVICE_FACEBOOK,
  ".*/payment_history.json",
  "payment_history"
);
