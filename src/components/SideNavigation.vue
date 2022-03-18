<template>
  <aside class="side-bar ">

    <nav class="side-nav card shadow rounded pd-y-15">
      <div class="pd-25 mg-b-20">
        <div class="quick-search ">
          <i class="ri-search-line search-ico"></i>
          <treeselect placeholder="بحث عن المؤشرات" v-model="value" :options="sectors"/>
        </div>
      </div>
      <VuePerfectScrollbar class="scroll-area">
        <div class="scroll-content pd-x-25">
          <ul>
            <li :class="{'active' : counter == index }" v-for="(sector, index) in sectors"
                :key="index + '_sector'">
              <a href="#" class="side-nav-link" @click.prevent="setActiveSector(index)">
                <svg class="svg-ico" :width="sector.iconWidth" :height="sector.iconHeight" >
                  <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
                </svg>
                <span class="pd-x-20">{{ sector.label }}</span></a>
              <ul v-if="sector.children.length && counter == index  ">
                <li :class="{'active' : indicator.isActive==true }" v-for="(indicator, index) in sector.children"
                    :key="index + '_indicator'">
                  <a href="#">{{ indicator.label }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

      </VuePerfectScrollbar>

    </nav>
  </aside>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import sectors from "@/json/sectors.json";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: "SideNavigation",
  components: {Treeselect, VuePerfectScrollbar},

  data() {
    return {
      value: null,
      sectors: sectors
    }
  }
  ,
  methods: {

    setActiveSector(index){
      this.$store.state.counter = index
    },

  },

  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },

}
</script>

<style scoped>

</style>
