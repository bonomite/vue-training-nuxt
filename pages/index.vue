<template>
  <div>
    <h1 class="red">Learning</h1>
    <Form @onAddCat="onAddCat" />
    <List :cats="cats" />
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import List from '../components/List.vue'

export default {
  components: {
    Form,
    List,
  },
  data() {
    return {
      cats: [
        { name: 'Tojo' },
        { name: 'Pixie' },
        { name: 'Kenya' },
        { name: 'Malachi' },
        { name: 'Johnny' },
      ],
    }
  },
  methods: {
    onAddCat(obj) {
      this.cats.push(obj)
      // update db
    },
  },
}
</script>

<style lang="scss" scoped>
/* ask Kim why something has to be here */
</style>
