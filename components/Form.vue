<template>
  <div>
    <p>Form</p>
    <input v-model="newCat" />
    <button @click="add">+ ADD</button>
  </div>
</template>

<script>
export default {
  props: {
    addCat: {
      type: Function,
      default: (obj) => {
        return obj
      },
    },
  },
  data() {
    return {
      newCat: '',
    }
  },
  methods: {
    add: () => {
      // console.log('adding')
      return this.$emit('addCat', { name: this.newCat })
    },
  },
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: left;
}
</style>
