import { PaymentContext } from "./app/PaymentContext";
import { PaymentProviderFactory } from "./core/PaymentProviderFactory";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

const providerArg = process.argv[2]?.toLowerCase();

const factories: Record<string, PaymentProviderFactory> = {
  stripe: new StripeFactory(),
  paypal: new PaypalFactory(),
  apple: new AppleFactory(),
};

const factory = factories[providerArg];

if (!factory) {
  console.error(
    `Unknown provider: "${providerArg}". Use: stripe | paypal | apple`,
  );
  process.exit(1);
}

const context = new PaymentContext(factory);
context.processPayment(100);
