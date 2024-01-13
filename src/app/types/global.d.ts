declare module "*.module.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS_MOBILE__: boolean;
