// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const path = require("path");

module.exports = {
    preset: "ts-jest",
    testEnvironment: "jest-environment-jsdom-sixteen",

    clearMocks: true,

    collectCoverage: false,

    globals: {
        "ts-jest": {
            babelConfig: path.join(__dirname, ".babelrc"),
        },
    },

    moduleDirectories: [
        "src",
        "node_modules",
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "mjs",
        "js",
    ],
    moduleNameMapper: {
        "\\.(jpg|png|otf|svg|ttf|woff|woff2)$": "jest-file-stub.js",
        "\\.(css)$": "identity-obj-proxy",
    },

    rootDir: "src",
    setupFiles: [
        path.join(__dirname, "jest-setup.js"),
    ],

    snapshotSerializers: ["enzyme-to-json/serializer"],
    snapshotResolver: path.join(__dirname, "jest-snapshot-resolver.js"),

    testMatch: [
        "**/**\\.test\\.ts",
        "**/**\\.test\\.tsx",
    ],
    testPathIgnorePatterns: [
        "/node_modules/",
    ],

    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.tsx$": "ts-jest",
        "^.+\\.js$": "babel-jest",
    },
};
