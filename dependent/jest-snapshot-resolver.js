const path = require('path');

module.exports = {

    resolveSnapshotPath: (testPath, snapshotExtension) => {
        return testPath.replace("src", path.join("src","test","snapshots")) + snapshotExtension;
    },

    resolveTestPath: (snapshotFilePath, snapshotExtension) => {
        return snapshotFilePath
            .replace(path.join("src","test","snapshots"), "src")
            .slice(0, -snapshotExtension.length);
    },

    testPathForConsistencyCheck: "src/some/example.test.js",
};
