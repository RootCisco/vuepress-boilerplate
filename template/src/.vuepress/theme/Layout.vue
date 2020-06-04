<template lang="pug">
.theme-container
  Header
  h1 HogeHoge
  Content(:custom="false")
  Footer
</template>

<script>
import Header from '@components/Header';
import Footer from '@components/Footer';

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {};
  },
  computed: {},
  created() {
    if (this.$ssrContext) {
      // canonical
      this.$ssrContext.userHeadTags += `<link rel='canonical' href='${this.computeURL()}'>`;
    }
  },
  mounted() {
    console.log(this.$site);
  },
  beforeDestroy() {},
  methods: {
    computeURL() {
      let baseURL = this.$site.themeConfig.domain;
      let pagePath = this.$page.path.replace(/\.html$/, '');
      return baseURL + pagePath;
    }
  }
};
</script>

<style lang="stylus">
.hoge
  width: 10px
</style>
