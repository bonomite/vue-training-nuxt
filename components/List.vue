<template>
  <div>
    <p>List of cats</p>
    <ul>
      <li v-for="(cat, index) in cats" :key="index" :attr="index" class="red">
        {{ cat.name | capitalize | customFormat(1) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  filters: {
    capitalize(value) {
      return value.toUpperCase()
    },
    customFormat(value, num) {
      return value.repeat(num)
    },
  },
  props: {
    cats: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
/* ask Kim why something has to be here */
</style>
