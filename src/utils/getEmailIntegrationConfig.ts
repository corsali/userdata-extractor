import {
  EMAIL_INTEGRATION_CONFIG,
  EmailIntegrationConfig,
} from "../config/emailIntegrations.js";

/**
 * Retrieves the module configuration which determines what makes a module valid
 * @param emailIntegrationName
 * @returns Module configuration
 */
const getEmailIntegrationConfig = (
  emailIntegrationName: string
): EmailIntegrationConfig => {
  const emailIntegrationConfig = EMAIL_INTEGRATION_CONFIG.find(
    (mc: EmailIntegrationConfig) =>
      mc.name.toLowerCase() === emailIntegrationName.toLowerCase()
  );
  if (!emailIntegrationConfig) {
    throw new Error(
      `Unable to load configuration for email integration ${emailIntegrationName}`
    );
  }
  return emailIntegrationConfig;
};

export { getEmailIntegrationConfig };
