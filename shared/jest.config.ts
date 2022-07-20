import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: "ts-jest",
    globals: {
        "ts-jest": {
            tsconfig: "test/tsconfig.json"
        }
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    testEnvironmentOptions: {
        scriptPath: "dist/shared.js",
    }
};
export default config;
