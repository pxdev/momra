<template>
  <aside class="side-bar">

    <nav class="side-nav card shadow rounded">
      <div class="quick-search mg-y-20">
        <i class="ri-search-line search-ico"></i>
        <treeselect placeholder="بحث عن المؤشرات" v-model="value" :options="sectors"/>
      </div>
      <ul>
        <li :class="{'active' : activeSector == index }" v-for="(sector, index) in sectors" :key="index + '_sector'">
          <a href="#" class="side-nav-link" @click.prevent="toggleNav(index)" >
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
            </svg>
            <span class="pd-x-20">{{ sector.label }}</span></a>
          <ul v-if="sector.children.length && activeSector == index  " >
            <li :class="{'active' : indicator.isActive==true }" v-for="(indicator, index) in sector.children" :key="index + '_indicator'">
              <a href="#">{{ indicator.label }}</a>
            </li>
          </ul>
        </li>
      </ul>

    </nav>
  </aside>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import sectors from "@/json/sectors.json";

export default {
  name: "SideNavigation",
  components: {Treeselect},
  data() {
    return {
      activeSector : 0,
      value: null,
      sectors: sectors
    }
  }
  ,
  methods:{
    toggleNav(index){
      this.activeSector = index
    }
  }
}
</script>

<style scoped>

</style>
