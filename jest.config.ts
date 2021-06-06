import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>/app/src"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: false,
  restoreMocks: true,
  testTimeout: 100000
};
export default config;