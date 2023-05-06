import type { JestConfigWithTsJest } from "ts-jest";
const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "miniflare",
  testEnvironmentOptions: {
    // Miniflare doesn't yet support the `main` field in `wrangler.toml` so we
    // need to explicitly tell it where our built worker is. We also need to
    // explicitly mark it as an ES module.
    scriptPath: "dist/index.mjs",
    modules: true,
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "test/tsconfig.json",
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@app/backend/(.*)$": "<rootDir>/src/$1",
    "^@app/shared$": "<rootDir>/../shared/src/index.ts",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};

export default jestConfig;
