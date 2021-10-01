<template>
  <div class="iconHolder">
    <div ref="icon" class="icon">LOADING</div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  props: {},
  watch: {},
  updated() {},
  mounted() {
    const { icon } = this.$refs

    gsap.to(icon, {
      duration: 0.1,
      opacity: 0,
      yoyo: true,
      repeat: -1,
      ease: 'linear',
    })
  },
}
</script>

<style lang="scss" scoped>
.iconHolder {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: block;
  z-index: 2;
  .icon {
    width: 100px;
    height: 22px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: block;
  }
}
</style>
