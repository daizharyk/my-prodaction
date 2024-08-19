const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { type } = require("os");
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
    article: path.resolve(__dirname, "src/article.js"),
  },
    output:{
      path: path.resolve(__dirname, "dist"),
      filename: "[name][contenthash].js",
      clean: true,
      assetModuleFilename: "[name].[ext]",
    },

    devServer: {
      static: {
        directory:  path.resolve(__dirname, "dist")
      },
        port: 3000,
        open: true,
        hot: true ,
    },
module: {
  rules: [
    {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  },
  {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
  },
],
},

    plugins: [
      new HtmlWebpackPlugin({
      title: "DIDAR AIZHARYK |BLOG",
      filename: "index.html",
      template: "src/template.html",
      chunks: ["main"],
      }),
      new HtmlWebpackPlugin({
      title: "Article",
      filename: "article.html",
      template: "src/article.html",
      chunks: ["article"],
      })
    ]
};