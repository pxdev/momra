<template>
  <aside class="side-bar fixed-sidebar">
    <nav class="side-nav card shadow rounded pd-y-15">
      <div class="nav-search mg-b-20">
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
              <a href="#" class="side-nav-link" @click.prevent="setActiveSector(sectorIndex, $event)">
                <i class="ico" :class="'icon-'+ sector.iconId"><span class="path1"></span><span class="path2"></span></i>
                <span class="text">{{ sector.label }}</span>
              </a>
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
      sectors: sectors,
      sideNavHeight: null,
    }
  }
  ,
  methods: {

    setActiveIndicator(sectorIndex, IndicatorIndex) {
      this.$store.state.indicatorCounter = [sectorIndex, IndicatorIndex];
      this.$router.push("/analytics");

    },


    setActiveSector(index, e) {
      this.$store.state.sectorCounter = index
      this.$store.state.defaultSectorCounter = index;
      let nextNavList = e.target.parentElement.parentElement;
      nextNavList.classList.toggle('active')
    },



    sideNavSize() {
      this.sideNavHeight = window.innerHeight - 155;
      console.log(this.sideNavHeight)
    }

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

  created() {
    window.addEventListener('resize', this.sideNavSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.sideNavSize);
  },

  mounted() {
    this.sideNavSize();
  }

}
</script>

<style scoped>

</style>
