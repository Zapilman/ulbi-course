import { merge } from "webpack-merge";
import getCommonConfig from "./config/webpack/webpack.config";

export default merge(getCommonConfig(__dirname), {
  mode: "production",
});
