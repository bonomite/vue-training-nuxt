<template>
  <div>
    <p>Movie Page</p>
    {{ id }}
    <br />
    {{ movieData.title }}
  </div>
</template>

<script>
// import fetches from '~/mixins/fetches.js'
import fetches from '~/plugins/fetches.js'

export default {
  // mixins: [fetches],

  asyncData({ params }) {
    const id = params.movie
    return { id }
  },
  data() {
    return {
      id: '',
      movieData: {},
    }
  },
  async created() {
    this.movieData = await fetches.fetchMovie(this.id)
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
