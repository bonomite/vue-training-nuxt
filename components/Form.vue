<template>
  <div>
    <p>Form</p>
    <input v-model="newCat" @keyup.enter="add" />
    <button :disabled="newCat.length < 1" @click="add">+ ADD</button>
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
      console.log('computing')
      if (this.newCat.length > 1) {
        return `${this.newCat}y`
      }
      return ''
    },
  },
  methods: {
    add() {
      if (this.newCat.length > 0) {
        this.$emit('onAddCat', { name: this.newCat })
        this.newCat = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
/* ask Kim why something has to be here */
</style>
