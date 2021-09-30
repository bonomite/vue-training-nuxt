<template>
  <div>
    <p>Form</p>
    <input v-model="newMovie" @keyup.enter="add" />
    <button :disabled="newMovie.length < 1" @click="add">+ ADD</button>
    {{ kittifyName }}
  </div>
</template>

<script>
export default {
  props: {
    onAddMovie: {
      type: Function,
      default: (obj) => {
        return obj
      },
    },
  },
  data() {
    return {
      newMovie: '',
    }
  },
  computed: {
    kittifyName() {
      if (this.newMovie.length > 1) {
        return `${this.newMovie}y`
      }
      return ''
    },
  },
  methods: {
    initCap(name) {
      return name.charAt(0).toUpperCase() + name.slice(1)
    },
    add() {
      if (this.newMovie.length > 0) {
        this.$emit('onAddMovie', { title: this.initCap(this.newMovie) })
        this.newMovie = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
