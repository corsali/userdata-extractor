import config from "../config/index.js";

/**
 * Logging utility to organize logs in browser console
 */
export class Logger {
  private _enabled = true;

  public set enabled(enabled: boolean) {
    this._enabled = enabled;
  }

  info(item: any): void {
    if (this._enabled) {
      console.info(config.appName, item);
    }
  }

  warn(item: any): void {
    if (this._enabled) {
      console.warn(config.appName, item);
    }
  }

  error(item: any): void {
    if (this._enabled) {
      console.error(config.appName, item);
    }
  }
}

export const logger = new Logger();
