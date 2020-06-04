const env = process.env.NODE_ENV || 'development';
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const sitePath = {
  development: 'http://localhost:3000',
  staging: '',
  production: ''
};

module.exports = {
  themeConfig: {
    domain: sitePath[env]
  },
  base: '/',
  title: 'はじめてのVuePress',
  description: 'VuePressを使用したサイトです。',
  port: '3000',
  dest: 'build',
  head: [
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { name: 'keywords', content: 'vue, vuepress' }],
    ['meta', { property: 'og:locale', content: 'ja_JP' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '' }],
    ['meta', { property: 'og:title', content: '' }],
    ['meta', { property: 'og:description', content: '' }],
    ['meta', { property: 'og:url', content: '' }],
    ['meta', { property: 'og:image', content: '' }],
    ['meta', { property: 'og:image:secure_url', content: '' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: './favicon.ico' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: './apple-touch-icon.png' }]
  ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  shouldPrefetch: () => {
    return false;
  },
  postcss: {
    plugins: [
      require('autoprefixer')({
        grid: true
      })
    ]
  },
  stylus: {
    import: [path.resolve(__dirname, './styles/global.styl')]
  },
  plugins: {
    {{#isUseAnalytics}}
    '@vuepress/google-analytics': { ga: 'UA-00000000-0' },
    {{/isUseAnalytics}}
    '@goy/svg-icons': { svgsDir: 'svgs' }
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, './components');
    config.resolve.alias['@public'] = path.resolve(__dirname, './public');
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../assets');

    if (config.mode === 'production' && !isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 5,
            compress: {
              warnings: false,
              drop_console: true
            },
            mangle: {
              keep_fnames: true
            },
            output: {
              beautify: false,
              comments: /^\**!|@preserve|@license|@cc_on|LICENSE|License|license/
            },
            ie8: true
          }
        })
      ];
    }
  },
  chainWebpack: (config, isServer) => {
    {{#isUseGlsl}}
    // glsl
    config.module
      .rule('glsl')
      .test(/\.(glsl|vs|fs|vert|frag)$/)
      .use('webpack-glsl-loader')
      .loader('webpack-glsl-loader')
      .end();
    {{/isUseGlsl}}

    // optimize
    if (process.env.NODE_ENV === 'production' && !isServer) {
      config.plugin('aggressive-merging').use(webpack.optimize.AggressiveMergingPlugin);
      config.plugin('occurrence-order').use(webpack.optimize.OccurrenceOrderPlugin);
    }
  }
};
