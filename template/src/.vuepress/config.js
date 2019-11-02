const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

const sitePath = 'http://localhost:3000'
// const seoOptions = require('./config-files/seo-options')

module.exports = {
  themeConfig: {
    domain: sitePath
  },
  base: '/',
  title: 'はじめてのVuePress',
  description: 'VuePressを使用したサイトです。',
  port: '3000',
  dest: 'build',
  head: [
    ['meta', { name: 'keywords', content: 'vue, vuepress' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: './favicon.ico' }],
    ['link', { rel: 'apple-touch-icon-precomposed', href: './apple-touch-icon.png' }]
  ],
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  shouldPrefetch: () => {
    return false
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
    '@vuepress/google-analytics': { ga: 'UA-00000000-0' }
    // 'vuepress-plugin-seo': seoOptions,
    // 'vuepress-plugin-sitemap': { hostname: sitePath }
  },
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, './components')
    config.resolve.alias['@public'] = path.resolve(__dirname, './public')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../assets')

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
      ]
    }
  },
  chainWebpack: (config, isServer) => {
    // glsl
    config.module
      .rule('glsl')
      .test(/\.(glsl|vs|fs|vert|frag)$/)
      .use('webpack-glsl-loader')
      .loader('webpack-glsl-loader')
      .end()
    // optimize
    if (process.env.NODE_ENV === 'production' && !isServer) {
      config.plugin('aggressive-merging').use(webpack.optimize.AggressiveMergingPlugin)
      config.plugin('occurrence-order').use(webpack.optimize.OccurrenceOrderPlugin)
    }
  }
}
