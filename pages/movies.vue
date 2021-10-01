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
import fetches from '~/mixins/fetches.js'

export default {
  components: { FacebookIcon },
  mixins: [fetches],
  data() {
    return {
      movies: {},
    }
  },
  mounted() {
    this.fetchMovies('1')
  },
  methods: {
    onAddMovie(obj) {
      this.movies.results.push(obj)
      // update db
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
