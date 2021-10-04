<template>
  <div>
    <p>Movie Page</p>
    {{ id }}
    <br />
    {{ movieData.title }}
  </div>
</template>

<script>
import fetches from '~/mixins/fetches.js'

export default {
  mixins: [fetches],
  asyncData({ params }) {
    console.log('params = ', params)
    const id = params.movie

    return { id }
  },
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
