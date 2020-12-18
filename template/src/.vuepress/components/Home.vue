<template lang="pug">
.home
  p {{ currentLang }}
  p ホームです。
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(['currentLang'])
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.home
  p
    color: $color-black
</style>
