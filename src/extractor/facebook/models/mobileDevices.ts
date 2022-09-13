import {
  BoolTableValue,
  DateTableValue,
  TextTableValue,
} from "../../../models/table/index.js";
import { FacebookBaseModel } from "./facebookBaseModel.js";

export class MobileDevices extends FacebookBaseModel {
  device_type?: TextTableValue;

  device_os?: TextTableValue;

  date_updated?: DateTableValue;

  family_device_id?: TextTableValue;

  device_locale?: TextTableValue;

  push_token_disabled?: BoolTableValue;

  push_token_date_updated?: DateTableValue;

  push_token_date_created?: DateTableValue;

  push_token_app_version?: TextTableValue;

  push_token_locale?: TextTableValue;

  push_token_os_version?: TextTableValue;

  push_token_token?: TextTableValue;

  push_token_device_id?: TextTableValue;

  constructor(values: {
    deviceType: string;
    deviceOs: string;
    dateUpdated: number;
    familyDeviceId: string;
    deviceLocale: string;
    pushToken: {
      disabled: boolean;
      dateUpdated: number;
      dateCreated: number;
      appVersion: string;
      locale: string;
      osVersion: string;
      token: string;
      deviceId: string;
    };
  }) {
    super();
    this.device_type = new TextTableValue(values.deviceType);
    this.device_os = new TextTableValue(values.deviceOs);
    this.date_updated = new DateTableValue(values.dateUpdated);
    this.family_device_id = new TextTableValue(values.familyDeviceId);
    this.device_locale = new TextTableValue(values.deviceLocale);
    this.push_token_disabled = new BoolTableValue(values.pushToken?.disabled);
    this.push_token_date_updated = new DateTableValue(
      values.pushToken?.dateUpdated
    );
    this.push_token_date_created = new DateTableValue(
      values.pushToken?.dateCreated
    );
    this.push_token_app_version = new TextTableValue(
      values.pushToken?.appVersion
    );
    this.push_token_locale = new TextTableValue(values.pushToken?.locale);
    this.push_token_os_version = new TextTableValue(
      values.pushToken?.osVersion
    );
    this.push_token_token = new TextTableValue(values.pushToken?.token);
    this.push_token_device_id = new TextTableValue(values.pushToken?.deviceId);
  }
}
