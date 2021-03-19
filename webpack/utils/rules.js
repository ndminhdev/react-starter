// Javascript rules
exports.jsRules = {
  test: /\.(js|jsx)$/,
  use: ['babel-loader']
};

// HTML rules
exports.htmlRules = {
  test: /\.(html)$/,
  use: ['html-loader']
};

// CSS rules
exports.cssRules = {
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }
  ]
};

// SASS rules
exports.sassRules = {
  test: /\.s[ac]ss$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true
      }
    }
  ]
};

// Image rules
exports.imageRules = {
  test: /\.(?:ico|png|gif|jpg|jpeg)/i,
  type: 'asset/resource'
};

// Font rules
exports.fontRules = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource'
};

// SVG rules
exports.svgRules = [
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: /\.(js|jsx)$/,
    use: [
      'babel-loader',
      {
        loader: '@svgr/webpack',
        options: {
          babel: false,
          icon: true
        }
      }
    ]
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: { not: [/\.[jt]sx$/] },
    type: 'asset/inline',
  }
]