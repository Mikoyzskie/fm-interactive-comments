import type { Config } from "tailwindcss";
// import tailwindCssMotion from "tailwindcss-motion";

const config: Config = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {},
 },
 // eslint-disable-next-line @typescript-eslint/no-require-imports
 plugins: [require("tailwindcss-motion")],
};
export default config;
