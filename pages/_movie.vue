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
  computed: {
    posterPath() {
      return this.movieData?.poster_path !== null
        ? `https://image.tmdb.org/t/p/w500${this.movieData?.poster_path}`
        : process.env.PUBLIC_URL + '/no-poster.jpg'
    },
  },
  async created() {
    this.movieData = await fetches.fetchMovie(this.id)
    console.log(await fetches.fetchMovie(this.id))
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
