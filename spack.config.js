const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    removeTrackers: __dirname + "/src/removeTrackers.ts",
  },
  output: {
    path: __dirname + "/build",
  },
});
