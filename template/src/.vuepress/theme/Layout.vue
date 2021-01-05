<template lang="pug">
.theme-container
  Header
  h1 HogeHoge
  Content(:custom='false')
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
  created() {},
  mounted() {
    console.log(this.$site);
  },
  beforeDestroy() {},
  methods: {}
};
</script>

<style lang="stylus">
.hoge
  width: 10px
</style>
