<template>
  <div>
    <div class="container">
      <nuxt-img class="cats" src="/apple-touch-icon.png" />
    </div>

    <p>Movie Page</p>
    {{ id }}
    <br />
    {{ movieData.title }}
    <br />
    <div ref="holder" style="width: 50vw">
      <nuxt-img
        v-if="currentWidth"
        class="poster"
        :src="posterPath"
        style="width: 100%"
      />
    </div>
    <!-- <nuxt-img
      class="poster"
      sizes="xxxl:2000px xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
      format="webp"
      quality="70"
      src="/images/cats.png"
    /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import fetches from '~/plugins/fetches.js'
import breakPointsUtil from '~/mixins/breakPointsUtil.js'

export default {
  mixins: [breakPointsUtil],
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
    ...mapState('global', {
      defaultImage: (state) => state.defaultImage,
    }),

    posterPath() {
      return this.movieData?.poster_path !== null
        ? `https://image.tmdb.org/t/p/${this.getResponsiveWidth()}${
            this.movieData?.poster_path
          }`
        : this.defaultImage
    },
  },
  created() {},
  mounted() {
    this.getCurrentBreakPoint()
  },
  methods: {
    getResponsiveWidth() {
      const { holder } = this.$refs
      if (holder.offsetWidth > this.breakPointWidths.SM) {
        return 'original'
      } else {
        return 'w500'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
}
.poster {
  @media (max-width: $md+'px') {
    opacity: 0.2;
  }
}
</style>
