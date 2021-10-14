<template>
  <div class="list-comp">
    <LoadingIndicator v-if="!movies.length" />
    <div v-else>
      <p ref="title">List of Movies</p>
      <div class="container">
        <NuxtLink
          v-for="(movie, index) in movies"
          :key="index"
          :to="getProcessUrl(movie)"
          :attr="index"
          class="item-holder"
        >
          <div ref="items" class="item">
            <img :src="getPoster(movie.poster_path)" />
            <p class="title">{{ movie.title }}</p>
            <div class="info">
              <p class="date">{{ movie.release_date }}</p>
              <p class="stars">
                {{ movie.vote_average / 2 }}<font-awesome-icon :icon="faStar" />
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import LoadingIndicator from '../shared/LoadingIndicator.vue'
import helpers from '~/plugins/helpers.js'

export default {
  components: { LoadingIndicator },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    faStar() {
      return faStar
    },
  },
  watch: {
    movies(newVal) {},
  },
  updated() {
    const { items } = this.$refs

    const lastItem = items.at(-1)
    gsap.from(lastItem, {
      duration: 0.2,
      opacity: 0,
      scale: '-=0.85',
    })
  },
  mounted() {
    console.log('movies = ', this.movies[0])
    // animate list when mounted
    const { items } = this.$refs

    gsap.from(items, {
      duration: 0.5,
      opacity: 0,
      scale: '-=0.85',
      stagger: {
        amount: 0.5,
      },
    })
  },
  methods: {
    getProcessUrl(movie) {
      return helpers.processUrl(movie)
    },
    getPoster(path) {
      return 'https://image.tmdb.org/t/p/w400/' + path
    },
  },
}
</script>

<style lang="scss" scoped>
.list-comp {
  position: relative;
}
.container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  .item-holder {
    display: grid;
    width: 100%;
    text-decoration: none;
    .item {
      display: grid;
      width: 100%;
      img {
        transition: all 0.25s;
        border-radius: 4px;
      }
      p {
        text-decoration: none;
      }
      .title {
        //margin: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: left;
        margin-top: 8px;
        line-height: 1rem;
      }
      .info {
        display: grid;
        grid-template-columns: 1fr auto;
        justify-items: space-between;
        .date,
        .stars {
          color: #c1c1c1;
          font-size: 0.8rem;
        }
        .stars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          svg {
            margin-left: 4px;
            path {
              fill: rgb(185, 185, 68);
            }
          }
        }
      }
    }
    &:hover {
      .item img {
        transform-style: preserve-3d;
        transform: rotateY(-10deg) rotateX(-10deg) rotateZ(2deg) !important;
        -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
