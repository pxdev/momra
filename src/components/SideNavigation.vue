<template>
  <aside class="side-bar">

    <nav class="side-nav card shadow rounded">
      <div class="pd-25">
        <div class="quick-search ">
          <i class="ri-search-line search-ico"></i>
          <treeselect placeholder="بحث عن المؤشرات" v-model="value" :options="sectors"/>
        </div>
      </div>
      <VuePerfectScrollbar class="scroll-area" :settings="scrollSettings">
        <div class="scroll-content pd-x-25">
          <ul>
            <li :class="{'active' : ActiveSectorIndex == index }" v-for="(sector, index) in sectors"
                :key="index + '_sector'">
              <a href="#" class="side-nav-link" @click.prevent="toggleNav(index)">
                <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
                  <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
                </svg>
                <span class="pd-x-20">{{ sector.label }}</span></a>
              <ul v-if="sector.children.length && ActiveSectorIndex == index  ">
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
  props: ['ActiveSectorIndex'],
  data() {
    return {
      scrollSettings: {
       },
      value: null,
      sectors: sectors
    }
  }
  ,
  methods: {
    toggleNav(index) {
      this.$emit('updateActive', index)
    }
  }
}
</script>

<style scoped>

</style>
