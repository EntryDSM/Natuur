const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", __dirname + "/src/index.tsx"],
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        loader: "ts-loader",
        test: /\.(ts|tsx)$/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "postcss-styled" }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 200000,
              name: "[name].[ext]?[hash]",
              publicPath: "/dist"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
  },
  node: { fs: "empty" },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./public/favicon.ico",
      filename: "./index.html",
      showErrors: true,
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      chunkFilename: "[id].css",
      template: "[name].css"
    }),
    new Dotenv()
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      "*": {
        changeOrigin: true,
        target: "https://api.entrydsm.hs.kr"
      }
    }
  },
  devtool: "inline-source-map" // 코드의 오류를 상세하게함. ( 배포 후 'none' 으로 )
};
