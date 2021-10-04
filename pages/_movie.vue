<template>
  <div>
    <p>Movie Page</p>
    {{ id }}
    <br />
    {{ movieData.title }}
    <br />
    <img :src="posterPath" />
  </div>
</template>

<script>
import fetches from '~/plugins/fetches.js'

export default {
  // mixins: [fetches],

  async asyncData({ params }) {
    const id = params.movie
    const movieData = await fetches.fetchMovie(id)
    return { id, movieData }
  },
  data() {
    return {
      id: '',
      movieData: {},
    }
  },
  computed: {
    posterPath() {
      return this.movieData?.poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${this.movieData?.poster_path}`
        : process.env.PUBLIC_URL + '/no-poster.jpg'
    },
  },
  async created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
