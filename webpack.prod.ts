import { merge } from "webpack-merge";
import getCommonConfig from "./config/webpack/webpack.config";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default merge(getCommonConfig(__dirname), {
  mode: "production",
  plugins: [process.env.Analyze && new BundleAnalyzerPlugin()].filter(Boolean),
});
