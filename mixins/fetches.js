
const apiKey = '9e0e3fea734301f2135b9ab28c9d8be5'
export default {
  methods: {
    async fetchMovies(page) {
      const requestedPage = page || '1'

      await this.$axios
        .$get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${requestedPage}`
        )
        .then((response) => {
          // handle success

          this.movies = response
          // console.log('response - ', response)
          // return response
        })
        /* .catch((error) => {
          // handle error
          // console.log(error)
        }) */
        .then(() => {
          // always executed
        })
    },
    async fetchMovie(id) {
      await this.$axios
        .$get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        )
        .then((response) => {
          // handle success
          // console.log(response)
          this.movieData = response
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


