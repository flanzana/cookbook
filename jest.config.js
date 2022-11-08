// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

module.exports = nextJest({
  dir: "./",
})({
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/pages/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-extended/all"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/public/"],
})
