export default {
  // General
  appName: "@corsali/userdata-extractor",

  // Zip config
  zipMimeTypes: [
    "zip",
    "application/octet-stream",
    "application/zip",
    "application/x-zip",
    "application/x-zip-compressed",
  ],
  whitelistedFileMimeTypes: [
    "text/csv",
    "text/html",
    "text/plain",
    "application/json",
    "application/javascript",
  ],

  // Validator
  minFileSizeInBytes: 10240,

  // Extractor
  SERVICE_AMAZON_ORDERS: "amazon_orders",
  SERVICE_INSTAGRAM: "instagram",
  SERVICE_FACEBOOK: "facebook",
  SERVICE_NETFLIX_VIEWING_HISTORY: "netflix_viewing_history",
  SERVICE_YOUTUBE: "youtube",
};
