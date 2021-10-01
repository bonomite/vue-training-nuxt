<template>
  <div>
    <TheHeader
      :menu-items="[
        { text: 'Home', url: '/' },
        { text: 'Movies', url: '/movies' },
        {
          text: 'Bono',
          url: 'http://thomasbono.com',
          target: '_blank',
          external: true,
        },
      ]"
    />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>
