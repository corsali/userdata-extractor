export default {
  // General
  appName: "@corsali/userdata-extractor",

  // Zip config
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
  SERVICE_INSTAGRAM: "instagram",
  SERVICE_FACEBOOK: "facebook",
  SERVICE_YOUTUBE: "youtube",
};
