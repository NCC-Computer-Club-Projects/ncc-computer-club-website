const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Create an HTML file to inject source code into
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Extract CSS from each JS file and create a new CSS reference file
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const autoprefixer = require('autoprefixer');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const ASSETS_DIR = path.resolve(SRC_DIR, 'assets');

const BRAND_COLOR = '#bebebeff';

const REGEX = Object.freeze({
  image: /\.(jpg|jpeg|png|svg|gif)$/i,
  font: /\.(woff|woff2|eot|ttf|otf)$/i,
});

const babelOptions = {
  cacheDirectory: true,
  presets: [
    ['@babel/preset-env', { targets: 'defaults' }],
  ],
};

const styleLoaders = [
  MiniCssExtractPlugin.loader, // Extract styles into CSS files
  'css-loader', // Resolve `@import` and `url()`
  {
    // Process CSS with PostCSS
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [autoprefixer()],
      },
    },
  },
  {
    // Compile Sass/SCSS to CSS
    loader: 'sass-loader',
    options: {
      implementation: require('sass'),
      sourceMap: true,
    },
  },
];

module.exports = {
  entry: {
    index: path.resolve(SRC_DIR, 'index.tsx'),
  },

  plugins: [
    new HtmlWebpackPlugin({ // Should be first, as it is depended on by other integrated plugins
      title: 'N4C',
      filename: 'index.html',
      template: path.resolve(ASSETS_DIR, 'html-templates/index.html'),
      inject: true, // Inject all assets into template; Position (head or body) depends on scriptLoading
      scriptLoading: 'defer', // Choose how scripts are injected into the HTML {'blocking'|'defer'|'module'}
    }),

    new MiniCssExtractPlugin(),

    new FaviconsWebpackPlugin({
      logo: path.resolve(ASSETS_DIR, 'images/logos/n4c/n4c-logo.svg'), // Source image to generate icon from
      inject: true, // Inject links/metadata into HtmlWebpackPlugin(s)
      // outputPath: 'assets', // Directory to output the assets relative to the webpack output dir
      prefix: 'assets/images/favicons/', // prefix path for generated assets
      // Generated icon depends on the webpack mode:
      // development -> use a light favicons build
      // production -> use a full webapp favicons build
      favicons: {
        developerURL: null, // Prevent retrieving from the nearest package.json
        background: BRAND_COLOR,
        theme_color: BRAND_COLOR,
        icons: { // Create icons for the following:
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          windows: true,
          yandex: true,
        },
      },
    }),
  ],

  module: {
    // Rules are processed top -> bottom. Loaders within each rule are processed bottom -> top
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: styleLoaders,
      },
      {
        test: REGEX.image,
        type: 'asset/resource',
      },
      {
        test: REGEX.font,
        type: 'asset/resource',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
    ],
  },

  resolve: {
    // Create resolve alias entries from the tsconfig.json "paths" option
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.ejs'], // Omit file extensions on import statements
  },

  output: {
    publicPath: './', // Path for static assets

    filename: 'assets/scripts/[name].[contenthash].bundle.js',

    assetModuleFilename: ({ filename }) => {
      const ext = path.extname(filename);

      if (REGEX.image.test(ext)) {
        return 'assets/images/[hash][ext][query]';
      }

      if (REGEX.font.test(ext)) {
        return 'assets/fonts/[hash][ext][query]';
      }

      return 'assets/[hash][ext][query]';
    },

    chunkFilename: '[name].[id].chunk.js', // Determine the name of dynamic chunk files

    path: DIST_DIR, // Filesystem of the machine

    clean: true,
  },

  optimization: {
    moduleIds: 'deterministic', // Keep the vendor hash consistent between builds

    runtimeChunk: 'single', // Create a single runtime bundle for all chunks

    splitChunks: {
      cacheGroups: {
        vendor: { // Create bundles for third-party libraries
          test: /[\\/]node_modules[\\/](react|react-dom|babel)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  cache: true,
};
