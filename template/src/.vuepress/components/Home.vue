<template lang="pug">
.home
  p {{currentLang}}
  p ホームです。
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {},
  components: {},
  computed: {
    ...mapState(['currentLang'])
  },
  methods: {},
  data() {
    return {}
  },
  created() {},
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.home
  p
    color: $color-black
</style>
