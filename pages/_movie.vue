<template>
  <div>
    <p>Movie Page</p>
    {{ id }}
    {{ movieData.title }}
  </div>
</template>

<script>
import fetches from '~/mixins/fetches.js'

export default {
  asyncData({ params }) {
    console.log('params = ', params)
    const id = params.movie

    return { id }
  },
  mixins: [fetches],
  data() {
    return {
      id: '',
      movieData: {},
    }
  },
  mounted() {
    this.fetchMovie(this.id)
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
