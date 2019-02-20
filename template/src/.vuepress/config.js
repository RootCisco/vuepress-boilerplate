const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  base: '/',
  title: 'はじめてのVuePress',
  description: 'VuePressを使用したサイトです。',
  port: '3000',
  dest: 'build',
  head: [
    ['meta', { name: 'keywords', content: 'vue, vuepress' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'はじめてのVuePress',
      description: 'VuePressを使用したサイトです。',
      head: [
        ['meta', { property: 'og:locale', content: 'ja_JP' }],
        ['meta', { property: 'og:title', content: 'はじめてのVuePress' }],
        ['meta', { property: 'og:description', content: 'VuePressを使用したサイトです。' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'http://localhost:3000' }],
        ['meta', { property: 'og:image', content: 'http://localhost:3000/og.png' }],
        ['meta', { property: 'og:image:secure_url', content: 'http://localhost:3000/og.png' }],
        ['meta', { property: 'og:site_name', content: 'はじめてのVuePress' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ]
    },
    '/en/': {
      lang: 'en',
      title: 'First time VuePress',
      description: 'The site using VuePress.',
      head: [
        ['meta', { property: 'og:locale', content: 'ja_JP' }],
        ['meta', { property: 'og:title', content: 'First time VuePress' }],
        ['meta', { property: 'og:description', content: 'The site using VuePress.' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'http://localhost:3000' }],
        ['meta', { property: 'og:image', content: 'http://localhost:3000/og.png' }],
        ['meta', { property: 'og:image:secure_url', content: 'http://localhost:3000/og.png' }],
        ['meta', { property: 'og:site_name', content: 'First time VuePress' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
      ]
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
  ga: 'TEST_ID_20181213',
  configureWebpack: (config, isServer) => {
    config.resolve.alias['@components'] = path.resolve(__dirname, './components')
    config.resolve.alias['@public'] = path.resolve(__dirname, './public')
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../assets')

    if (config.mode === 'production' && !isServer) {
      config.optimization.minimizer = [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
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
            }
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
    // svg-sprite
    const svgRule = config.module.rule('svg')
    svgRule.uses.delete('file-loader')
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end()
    // optimize
    if (process.env.NODE_ENV === 'production' && !isServer) {
      config.plugin('aggressive-merging').use(webpack.optimize.AggressiveMergingPlugin)
      config.plugin('occurrence-order').use(webpack.optimize.OccurrenceOrderPlugin)
    }
  }
}
