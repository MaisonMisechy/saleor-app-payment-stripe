import { type PaymentAppConfig } from "../app-config";
import { defaultPaymentAppConfig } from "../payment-app-config";
import {
  getFakePaymentAppConfigurator,
  type MetadataManagerOverride,
} from "./payment-app-configuration-factory";
import { testEnv } from "@/__tests__/test-env.mjs";

export const getEmptyMetadata = () => {
  const configurator = getFakePaymentAppConfigurator(
    defaultPaymentAppConfig,
    testEnv.TEST_SALEOR_API_URL,
  );
  return configurator.getRawConfig();
};

export const filledFakeMatadataConfig = {
  configurations: [
    {
      apiKey: "super-secret-key",
      apiKeyId: "test-1234",
      clientKey: "not-so-secret-key",
      configurationId: "mock-id",
      webhookPassword: "password",
      configurationName: "test",
    },
  ],
  channelToConfigurationId: {
    "1": "mock-id",
  },
} satisfies PaymentAppConfig;

export const getFilledFakeMetadataConfigurator = (override?: MetadataManagerOverride) => {
  return getFakePaymentAppConfigurator(
    filledFakeMatadataConfig,
    testEnv.TEST_SALEOR_API_URL,
    override,
  );
};

export const getFilledMetadata = () => {
  const configurator = getFilledFakeMetadataConfigurator();
  return configurator.getRawConfig();
};
