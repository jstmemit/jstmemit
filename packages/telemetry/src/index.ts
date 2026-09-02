import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { BatchLogRecordProcessor } from "@opentelemetry/sdk-logs";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { Env } from "@jstmemit/shared/schemas/Env";

const env = Env.parse(process.env);

const sdk = new NodeSDK({
    resource: resourceFromAttributes({
        "service.name": "jstmemit",
    }),
    logRecordProcessor: new BatchLogRecordProcessor({
        exporter: new OTLPLogExporter({
            url: "https://eu.i.posthog.com/i/v1/logs",
            headers: {
                Authorization: `Bearer ${env.POSTHOG_PUBLIC_KEY}`,
            },
        }),
    }),
});
sdk.start();
