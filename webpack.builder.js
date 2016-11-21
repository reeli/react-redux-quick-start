class Builder {
  constructor() {
    this.babel = {
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    };
  }

  build() {
    return this.babel;
  }
}
