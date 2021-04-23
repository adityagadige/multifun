module.exports = {
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader', //take cares of running typescr ipt compiler
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js' // will generate in memory and serve to browser
  },
  devServer: {
    inline: false, // prevents browser from auto refresh when new bundles are produced /change occurs
    port: 8000
  }
};
