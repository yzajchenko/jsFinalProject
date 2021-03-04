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
      authorization: [
        './src/authorization/authorization.js',
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
                // TODO: * add babel.config.js, and remove inline options from here
                // TODO: **** add 'optional chaining' (elvis operator) plugin and use new syntax
                presets: [
                  ['@babel/preset-env',
                    {
                      targets: {
                        browsers: [
                          '>0.25%',
                          'not ie 11',
                          'not op_mini all',
                        ],
                      },
                    },
                  ],
                ],
                plugins: [
                  ['@babel/plugin-transform-runtime', {
                    regenerator: true,
                  }],
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
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
            inject: "head",
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
            inject: "head",
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
            inject: "head",
            template: 'src/login/login.html',
            filename: 'login/login.html'
          }
        ),
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'authorization',
            ],
            inject: "head",
            template: 'src/authorization/authorization.html',
            filename: 'authorization/authorization.html'
          }
        ),
        new HtmlWebpackPlugin(
          {
            chunks: [
                'main',
                'map',
            ],
            inject: "head",
            template: 'src/map/map.html',
            filename: 'map/map.html'
          }
        )
    ]
};
  
