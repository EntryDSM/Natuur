module.exports = () => ({
  parser: "postcss-styled",
  plugins: [require("autoprefixer"), require("postcss-nested")]
});
