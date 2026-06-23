import { PaymentProviderFactory } from "../core/PaymentProviderFactory";

export class PaymentContext {
  private factory: PaymentProviderFactory;

  constructor(factory: PaymentProviderFactory) {
    this.factory = factory;
  }

  processPayment(amount: number): void {
    const provider = this.factory.createPaymentProvider();
    const transactionId = Math.random().toString(36).slice(2, 8);

    provider.authorize(amount);
    provider.capture(transactionId);
    provider.refund(transactionId);
  }
}
