<template>
  <div>
    <h1 class="red">API Example: Gallery</h1>
    <h2 class="red">{{ gallery.title }}</h2>
    <ListCompGallery :results="gallery.slides" />
  </div>
</template>

<script>
import fetches from '~/plugins/fetches.js'

export default {
  mixins: [],
  layout: 'default',
  props: {
    var: {
      type: Array,
      default: () => [],
    },
  },
  async asyncData() {
    const gallery = await fetches.fetchApiGallery('132837')
    return { gallery }
  },
  data() {
    return {
      gallery: {},
    }
  },
  head() {
    return {}
  },
  computed: {},
  watch: {},
  updated() {},
  created() {},
  mounted() {
    console.log('gallery = ', this.gallery)
  },
  unmounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>