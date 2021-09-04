/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.d.ts"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
};

module.exports = config;
