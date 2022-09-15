module.exports = {
  prefix: "t-",
  configPath: "tailwind.config.js",
  cssPath: "@/assets/css/tailwind.css",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
