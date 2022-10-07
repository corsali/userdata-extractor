import * as AmazonOrders from "./amazonOrders/index.js";
import * as Facebook from "./facebook/index.js";
import * as Instagram from "./instagram/index.js";
import * as NetflixViewingHistory from "./netflixViewingHistory/index.js";
import * as Youtube from "./youtube/index.js";

// Initializing the extractors here instantiates all of the individual
// file extractors, which registers them and makes them available for parsing
Facebook.initialize();
Instagram.initialize();
NetflixViewingHistory.initialize();
Youtube.initialize();
AmazonOrders.initialize();
export const register = () => {};
