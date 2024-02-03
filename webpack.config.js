"use strict"
const webpack = require("webpack")
const path = require("path")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",
  output: { filename: "./index.js", globalObject: "this" },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    modules: ["node_modules", "modules"],
    extensions: [".ts", ".tsx", ".js"],
    // fallback: {
    //   zlib: require.resolve("browserify-zlib"),
    //   stream: require.resolve("stream-browserify"),
    //   assert: require.resolve("assert-browserify"),
    //   buffer: require.resolve("buffer"),
    // },
  },
  performance: {
    hints: false,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),

    // // We import some NodeJS-oriented code that expects certain global variables
    // // to be present, so we use this plugin to provide those from libraries.
    // new webpack.ProvidePlugin({
    //   process: "process/browser",
    //   Buffer: ["buffer", "Buffer"],
    // }),
  ],
}
