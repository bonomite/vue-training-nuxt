<template>
  <div>
    <h1>Learning</h1>
    <!-- <Form @addCat="onAddCat" /> -->
    <p>Form</p>
    <input v-model="newCat" />
    <button @click="onAddCat">+ ADD</button>
    <List :cats="cats" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: [
        { name: 'Tojo' },
        { name: 'Pixie' },
        { name: 'Kenya' },
        { name: 'Malachi' },
        { name: 'Johnny' },
      ],
      newCat: '',
    }
  },
  methods: {
    onAddCat: (event) => {
      console.log('adding...', this.cats)
      return this.cats.push({ name: this.newCat })
    },
  },
}
</script>
