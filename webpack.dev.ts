import { merge } from "webpack-merge";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import getCommonConfig from "./config/webpack/webpack.config";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default merge(getCommonConfig(__dirname), {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "./tsconfig.json",
      },
      async: true,
    }),
  ],
});
