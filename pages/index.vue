<template>
  <div>
    <h1 class="red">Learning</h1>
    <Lazy-FormComp @onAddMovie="onAddMovie" />

    <!-- v-if="movies.results" -->
    <ListComp
      v-if="movies.results"
      :movies="movies.results"
      :loading="loading"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [
        { name: 'Tojo' },
        { name: 'Pixie' },
        { name: 'Kenya' },
        { name: 'Malachi' },
        { name: 'Johnny' },
      ],
      loading: false,
      movies: {},
    }
  },
  mounted() {
    this.fetchMovies()
  },
  methods: {
    onAddMovie(obj) {
      this.movies.results.push(obj)
      // update db
    },
    async fetchMovies() {
      const apiKey = '9e0e3fea734301f2135b9ab28c9d8be5'
      const requestedPage = '1'
      this.loading = true
      await this.$axios
        .$get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${requestedPage}`
        )
        .then((response) => {
          // handle success
          console.log(response)
          this.movies = response
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
        .then(() => {
          // always executed
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
