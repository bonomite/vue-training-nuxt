<template>
  <div class="list-comp">
    <LoadingIndicator v-if="!movies.length" />
    <div v-else>
      <p ref="title">List of cats</p>
      <ul>
        <li
          v-for="(movie, index) in movies"
          ref="items"
          :key="index"
          :attr="index"
          class="red"
        >
          <NuxtLink :to="String(movie.id)">{{ movie.title }} </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import LoadingIndicator from '../shared/LoadingIndicator.vue'

export default {
  components: { LoadingIndicator },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      firstLoad: true,
    }
  },
  watch: {
    movies(newVal) {},
  },
  updated() {
    const { items } = this.$refs
    if (this.firstLoad) {
      this.firstLoad = false
      gsap.from(items, {
        duration: 0.2,
        opacity: 0,
        x: '+=20',
        stagger: {
          amount: 0.2,
        },
      })
    } else {
      const lastItem = items.at(-1)
      gsap.from(lastItem, {
        duration: 0.2,
        opacity: 0,
        x: '+=20',
      })
    }
  },
  mounted() {
    // animate list when mounted
    /* console.log('mounted')
    const { items } = this.$refs

    gsap.from(items, {
      duration: 0.2,
      opacity: 0,
      x: '+=20',
      stagger: {
        amount: 0.2,
      },
    }) */
  },
}
</script>

<style lang="scss" scoped>
.list-comp {
  position: relative;
}
</style>
