const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      clients: [
        './src/clients/clients.js',
      ],
      home: [
        './src/home/home.js',
      ],
      login: [
        './src/login/login.js',
      ],
      map: [
        './src/map/map.js',
      ],
      main: [
        './src/main.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: (chunkData) => {
        return chunkData.chunk.name === 'main' ? '[name].js': '[name]/[name].js';
      },
    },
   module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ],
    },
  plugins: [
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'home',
            ],
            template: 'src/home/home.html',
            filename: 'home/home.html'
          }
      ),
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'clients',
            ],
            template: 'src/clients/clients.html',
            filename: 'clients/clients.html'
          }
        ),
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'login',
            ],
            template: 'src/login/login.html',
            filename: 'login/login.html'
          }
        ),
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'map',
            ],
            template: 'src/map/map.html',
            filename: 'map/map.html'
          }
        )
    ]
};
  
