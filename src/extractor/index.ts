import * as Facebook from "./facebook/index.js";
import * as Instagram from "./instagram/index.js";
import * as NetflixLight from "./netflixLight/index.js";

// Initializing the extractors here instantiates all of the individual
// file extractors, which registers them and makes them available for parsing
Facebook.initialize();
Instagram.initialize();
NetflixLight.initialize();
export const register = () => {};
