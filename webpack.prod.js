const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.config.js")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = merge.merge(common, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          keep_classnames: true, // necessary for AudioWorkletProcessors
        },
      }),
    ],
  },
})
