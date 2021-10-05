<template>
  <div>
    <div>HEADER</div>
    <ul>
      <li
        v-for="(item, index) in headerNav"
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
import { mapState } from 'vuex'

export default {
  props: {},
  computed: {
    ...mapState('global', {
      headerNav: (state) => state.headerNav,
    }),
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
