import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";

export default (dirname: string): webpack.Configuration => ({
  entry: path.resolve(dirname, "./src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    preferRelative: true,
    modules: [path.resolve(dirname, "src"), "node_modules"],
    mainFiles: ["index"],
    alias: {},
  },
  output: {
    path: path.resolve(dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, "public", "index.html"),
    }),
    new webpack.DefinePlugin({
      __IS_MOBILE__: process.env.Platform === "mobile",
    }),
  ],
});
