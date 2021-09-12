const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {

  mode: "production",
  entry: "./app/js/main.js",
  output: {
    filename: "main.js"
  },

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}