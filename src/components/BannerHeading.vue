<template>
  <div class="banner-heading" :style="`background-image: url(${ImageUrl}); min-height: ${BannerHeight}px `">
    <div class="container banner-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
name: "BannerHeading",
  props :['ImageUrl', 'BannerHeight'],
}
</script>

<style scoped>

</style>