<template>
  <div>
    <p>List of cats</p>
    <ul>
      <li v-for="(cat, index) in cats" :key="index" :attr="index">
        {{ cat.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cats: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
