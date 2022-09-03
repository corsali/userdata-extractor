import * as Facebook from "./facebook/index.js";
import * as Instagram from "./instagram/index.js";

// Initializing the extractors here instantiates all of the individual
// file extractors, which registers them and makes them available for parsing
Facebook.initialize();
Instagram.initialize();
export const register = () => {};
