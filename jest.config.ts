module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)s$": "esbuild-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  testTimeout: 60000,
  moduleFileExtensions: ["ts", "js", "json", "node"],
  transformIgnorePatterns: ["node_modules/(?!(@zip.js/zip.js))"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
