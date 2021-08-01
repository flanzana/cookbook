module.exports = {
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/", "/pages/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "jest-extended"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/public/"],
}
