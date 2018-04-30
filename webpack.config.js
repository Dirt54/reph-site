const path = require('path');
var webpack = require('webpack');

const CLIENT_DEST = path.join(__dirname, './client/dist');

module.exports = {
    entry: './client/src/index.js',
    output: { path: CLIENT_DEST, filename: 'bundle.js' },
    mode: 'production',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        publicPath: '/dist/images',
                        outputPath: 'images'
                    }  
                  }
                ]
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
  
}