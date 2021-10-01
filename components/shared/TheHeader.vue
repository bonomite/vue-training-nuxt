<template>
  <div>
    <div>HEADER</div>
    <ul>
      <li
        v-for="(item, index) in menuItems"
        ref="items"
        :key="index"
        :attr="index"
        class="red"
      >
        <a
          v-if="item.external"
          :href="item.url"
          :target="item.target || '_self'"
        >
          {{ item.text }}
        </a>
        <NuxtLink v-else :to="item.url" :target="item.target || '_self'"
          >{{ item.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
