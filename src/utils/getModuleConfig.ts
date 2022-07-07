import { MODULE_CONFIG, ModuleConfig } from "../config/modules.js";

/**
 * Retrieves the module configuration which determines what makes a module valid
 * @param moduleName
 * @returns Module configuration
 */
const getModuleConfig = (moduleName: string): ModuleConfig => {
  const moduleConfig = MODULE_CONFIG.find(
    (mc: ModuleConfig) => mc.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!moduleConfig) {
    throw new Error(
      `Unable to load module configuration for module ${moduleName}`
    );
  }
  return moduleConfig;
};

export { getModuleConfig };
