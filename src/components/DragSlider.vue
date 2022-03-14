<template>
<div>
  <vue-slider class="indicator-slider" v-model="value" :data="data" :marks="true" :tooltip="'none'">

  </vue-slider>
</div>
</template>

<script>

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "DragSlider",
  components: {
    VueSlider
  },
  data(){
    return{
      value:[10, 20],
      data: ['2021', '2020', '2019', '2018', '2017', '..2010']
    }
  }
}
</script>

<style scoped>

</style>
