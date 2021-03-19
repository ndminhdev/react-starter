const paths = require('./paths');

// alias
exports.alias = {
  '@': paths.src
};

// devServer
const port = process.env.PORT || 8080;

exports.devServer = {
  port,
  publicPath: '/',
  historyApiFallback: true,
  compress: true,
  hot: true,
  open: true,
  overlay: true
};

// postcss
const { isProd } = require('./env');

exports.postcss = () => {
  const plugins = [
    'autoprefixer',
    isProd ? 'cssnano' : null
  ].filter(Boolean);
  return { plugins };
};

// sassResources
exports.sassResourceItems = [];