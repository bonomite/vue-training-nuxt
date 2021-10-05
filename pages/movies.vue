<template>
  <div>
    <img src="~/assets/svg/facebook.svg" />
    <FacebookIcon title="New Title" />
    <h1 class="red">Learning</h1>
    <Lazy-FormComp @onAddMovie="onAddMovie" />
    <ListComp :movies="movies.results" />

    <VButton label="BUTTON" @click="() => {}" />
    <p>Current break point = {{ currentBreakPoint }}</p>
    <p>Current width = {{ currentWidth }}</p>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import VButton from 'nypr-design-system-vue/src/components/VButton'
import FacebookIcon from '~/assets/svg/facebook.svg?inline'
import fetches from '~/plugins/fetches.js'
import breakPointsUtil from '~/mixins/breakPointsUtil.js'

export default {
  components: {
    FacebookIcon,
    VButton,
  },
  mixins: [breakPointsUtil],
  async asyncData() {
    const movies = await fetches.fetchMovies(1)
    return { movies }
  },
  data() {
    return {
      movies: {},
      page: 1,
    }
  },
  computed: {},
  beforeMount() {
    this.getCurrentBreakPoint()
  },
  /*  beforeDestroy() {
    window.removeEventListener('resize', this.reportWindowSize)
  }, */
  methods: {
    onAddMovie(obj) {
      this.movies.results.push(obj)
      // update db
    },
    async onChangePage(pageNum) {
      console.log(pageNum)
      this.page = pageNum
      this.movies = await fetches.fetchMovies(pageNum)
      // update page of items
    },
  },
}
</script>

<style lang="scss">
</style>
