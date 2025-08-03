import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";

export function startTracing(app: any) {
  const sdk = new NodeSDK({
    instrumentations: [getNodeAutoInstrumentations(), new ExpressInstrumentation()],
  });

  sdk.start();
}
