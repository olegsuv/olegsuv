/// <reference types="react-scripts" />
declare module "*.css";
declare module "*.pdf";

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
