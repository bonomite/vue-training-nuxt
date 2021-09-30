<template>
  <div>
    <p ref="title">List of cats</p>
    <ul>
      <li
        v-for="(movie, index) in movies"
        ref="items"
        :key="index"
        :attr="index"
        class="red"
      >
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    movies() {},
    loading() {
      console.log('loading watched')
    },
  },
  updated() {
    const { items } = this.$refs
    const lastItem = items.at(-1)
    gsap.from(lastItem, {
      duration: 0.2,
      opacity: 0,
      x: '+=20',
    })
  },
  mounted() {
    // animate list when mounted
    console.log('mounted')
    const { items } = this.$refs

    gsap.from(items, {
      duration: 0.2,
      opacity: 0,
      x: '+=20',
      stagger: {
        amount: 0.2,
      },
    })
  },
}
</script>

<style lang="scss" scoped>
</style>
