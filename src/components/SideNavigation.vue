<template>
  <aside class="side-bar fixed-sidebar ">

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
            <li :class="{'active' : sectorCounter == sectorIndex }"
                v-for="(sector, sectorIndex) in sectors"
                :key="sectorIndex + '_sector'">
              <a href="#" class="side-nav-link" @click.prevent="setActiveSector(sectorIndex)">
                <svg class="svg-ico" :width="sector.iconWidth" :height="sector.iconHeight">
                  <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
                </svg>
                <span class="pd-x-20">{{ sector.label }}</span></a>
              <ul v-if="sector.children.length && sectorCounter == sectorIndex ">
                <li :class="{'active': indicatorCounter[0] == sectorIndex && indicatorCounter[1] == indicatorIndex }"
                    v-for="(indicator, indicatorIndex) in sector.children"
                    :key="indicatorIndex + '_indicator'">
                  <a href="#" @click.prevent="setActiveIndicator(sectorIndex,indicatorIndex)">
                    {{ indicator.label }}
                  </a>
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

    setActiveIndicator(sectorIndex, IndicatorIndex) {
      this.$store.state.indicatorCounter = [sectorIndex, IndicatorIndex];
      this.$router.push("/analytics");

    },


    setActiveSector(index) {
      this.$store.state.sectorCounter = index
      this.$store.state.defaultSectorCounter = index
      // this.$store.state.indicatorCounter = [index, 0];
    },

  },

  computed: {

    defaultSectorCounter() {
      return this.$store.state.defaultSectorCounter;
    },

    sectorCounter() {
      return this.$store.state.sectorCounter;
    },

    indicatorCounter() {
      return this.$store.state.indicatorCounter;
    },
  },

}
</script>

<style scoped>

</style>
