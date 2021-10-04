<template>
  <div>
    <img src="~/assets/svg/facebook.svg" />
    <FacebookIcon title="New Title" />
    <h1 class="red">Learning</h1>
    <Lazy-FormComp @onAddMovie="onAddMovie" />
    <ListComp :movies="movies.results" />
    <!-- <paginate
      v-model="page"
      :page-count="20"
      :page-range="3"
      :margin-pages="2"
      :click-handler="onChangePage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    > 
    </paginate>-->
    <!-- <v-button
      href="https://google.com"
      target="_blank"
      class="donate-banner-button"
      label="Donate Now"
      @click="
        () => {
          console.log('clicked')
        }
      "
      >NYPR Button
    </v-button> -->
  </div>
</template>

<script>
// import Paginate from 'vuejs-modern-pagination'
// eslint-disable-next-line import/no-unresolved
import FacebookIcon from '~/assets/svg/facebook.svg?inline'
// import fetches from '~/mixins/fetches.js'
import fetches from '~/plugins/fetches.js'

export default {
  components: {
    FacebookIcon,
    /* Paginate, */
    // VButton: () => import('nypr-design-system-vue/src/components/VButton'),
  },
  // mixins: [fetches],
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
  created() {
    // this.movies = fetches.fetchMovies('1')
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
