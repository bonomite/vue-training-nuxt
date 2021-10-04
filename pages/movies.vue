<template>
  <div>
    <img src="~/assets/svg/facebook.svg" />
    <FacebookIcon title="New Title" />
    <h1 class="red">Learning</h1>
    <Lazy-FormComp @onAddMovie="onAddMovie" />
    <ListComp :movies="movies.results" />

    <VButton label="show window width" @click="() => {}" />
    {{ this.currentBreakPoint }}
  </div>
</template>

<script>
// import Paginate from 'vuejs-modern-pagination'
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
  /*  async mounted() {
    this.movies = await this.fetchMovies('1')
  }, */
  computed: {},
  mounted() {
    // this.movies = fetches.fetchMovies('1')
    this.getCurrentBreakPoint()
  },
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
.pagination {
  margin: 50px auto;
  background: rgb(109, 109, 109);
  display: flex;
  li {
    width: 50px;
    position: relative;
    display: inline-flex;
    border: 1px solid black;
    a {
      text-align: center;
      width: 100%;
      color: white;
      &:hover {
        color: red;
      }
    }
    &.disabled {
      pointer-events: none;
      a {
        color: rgb(51, 51, 51);
      }
    }
    &.active {
      background: blue;
    }
  }
}
.page-item {
}
</style>
