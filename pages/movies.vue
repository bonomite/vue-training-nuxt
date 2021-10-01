<template>
  <div>
    <img src="~/assets/svg/facebook.svg" />
    <FacebookIcon title="New Title" />
    <h1 class="red">Learning</h1>
    <Lazy-FormComp @onAddMovie="onAddMovie" />
    <ListComp :movies="movies.results" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import FacebookIcon from '~/assets/svg/facebook.svg?inline'

export default {
  components: { FacebookIcon },
  data() {
    return {
      movies: {},
    }
  },
  mounted() {
    this.fetchMovies('1')
    /* this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    }) */
  },
  methods: {
    onAddMovie(obj) {
      this.movies.results.push(obj)
      // update db
    },
    async fetchMovies(page) {
      const apiKey = '9e0e3fea734301f2135b9ab28c9d8be5'
      const requestedPage = page || '1'

      await this.$axios
        .$get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${requestedPage}`
        )
        .then((response) => {
          // handle success
          // console.log(response)
          this.movies = response
        })
        /* .catch((error) => {
          // handle error
          // console.log(error)
        }) */
        .then(() => {
          // always executed
        })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
