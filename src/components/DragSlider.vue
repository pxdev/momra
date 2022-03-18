<template>
<div class="d-flex indicator-container align-items-center">
   <vue-slider class="indicator-slider flex-fill mg-x-50" v-model="value"  :interval="1" :data="data" :marks="true" :tooltip="'none'">
     <template v-slot:dot>
      <span class="custom-dot"></span>
    </template>
  </vue-slider>
</div>
</template>

<script>

import VueSlider from 'vue-slider-component'

export default {
  name: "DragSlider",
  components: {
    VueSlider
  },
  data(){
    return{
      value:[1, 20],
      data: ['2021', '2020', '2019', '2018', '2017', '...', '2010']
    }
  }
}
</script>

<style scoped>

</style>
