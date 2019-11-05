const seoOptions = {
  title: ($page, $site) => $page.title || $site.title,
  description: ($page, $site) => $page.frontmatter.description || $site.description,
  twitterCard: _ => 'summary_large_image',
  type: $page => ($page.regularPath === '/' ? 'website' : 'article'),
  url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
  image: $page => $page.frontmatter.image || './images/ogp.jpg',
  customMeta: (add, ctx) => {
    const { $site } = ctx
    if ($site.themeConfig.locale) {
      let name = $site.themeConfig.locale > 1 ? 'og:locale:alternate' : 'og:locale'
      for (let i = 0; i < $site.themeConfig.locale.length; i++) {
        add(name, $site.themeConfig.locale[i])
      }
    }
  },
  defaultMeta(add, ctx) {
    add('og:title', ctx.title)
    add('og:description', ctx.description)
    add('og:type', ctx.type)
    add('og:url', ctx.url)
    add('og:image', ctx.image)
    add('og:image:secure_url', ctx.image)
    add('og:site_name', ctx.siteTitle)
    add('twitter:card', ctx.twitterCard)
  }
}

module.exports = seoOptions
