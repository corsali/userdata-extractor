import config from "../config/index.js";

/**
 * Logging utility to organize logs in browser console
 */
export class Logger {
  private _enabled = true;

  public set enabled(enabled: boolean) {
    this._enabled = enabled;
  }

  info(...args: any): void {
    if (this._enabled) {
      console.info(config.appName, ...args);
    }
  }

  warn(...args: any): void {
    if (this._enabled) {
      console.warn(config.appName, ...args);
    }
  }

  error(...args: any): void {
    if (this._enabled) {
      console.error(config.appName, ...args);
    }
  }
}

export const logger = new Logger();
