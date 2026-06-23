import { PaymentProvider } from "../../core/PaymentProvider";

export class ApplePaymentProvider implements PaymentProvider {
  authorize(amount: number): void {
    console.log(`[Apple] Authorizing $${amount}`);
  }
  capture(transactionId: string): void {
    console.log(`[Apple] Capturing transaction ${transactionId}`);
  }
  refund(transactionId: string): void {
    console.log(`[Apple] Refunding transaction ${transactionId}`);
  }
}
