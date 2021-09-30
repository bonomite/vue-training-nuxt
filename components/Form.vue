<template>
  <div>
    <p>Form</p>
    <input v-model="newCat" @keyup.enter="add" />
    <button @click="add">+ ADD</button>
    {{ kittifyName }}
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    onAddCat: {
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
  computed: {
    kittifyName() {
      if (this.newCat.length > 1) {
        return `${this.newCat}y`
      }
      return ''
    },
  },
  methods: {
    add() {
      this.$emit('onAddCat', { name: this.newCat })
      this.newCat = ''
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

<style lang="scss" scoped>
/* ask Kim about global */
</style>
