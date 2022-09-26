import config from "../../../config/index.js";
import { JsonExtractor } from "../../jsonExtractor.js";
import { MobileDevices } from "../models/mobileDevices.js";

class MobileDevicesJson extends JsonExtractor {
  async process() {
    const mobileDevices = this.query(`$.devices_v2.*`);

    mobileDevices.forEach((device) => {
      const pushTokens = device?.push_tokens ?? [{}];
      pushTokens.forEach((pushToken: any) =>
        this.table.rows.push(
          new MobileDevices({
            deviceType: device.type,
            deviceOs: device.os,
            dateUpdated: device.update_time,
            familyDeviceId: device.family_device_id,
            deviceLocale: device.device_locale,
            pushToken: {
              disabled: pushToken?.disabled,
              dateUpdated: pushToken?.client_update_time,
              dateCreated: pushToken?.creation_time,
              appVersion: pushToken?.app_version,
              locale: pushToken?.locale,
              osVersion: pushToken?.os_version,
              token: pushToken?.token,
              deviceId: pushToken?.device_id,
            },
          })
        )
      );
    });
  }
}

export const mobileDevicesJson = new MobileDevicesJson(
  config.SERVICE_FACEBOOK,
  ".*/mobile_devices.json",
  "mobile_devices"
);
