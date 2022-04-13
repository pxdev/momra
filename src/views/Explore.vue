<template>
  <section class="explore-page">
    <page-header></page-header>
    <main class="container pages pd-y-30 d-flex ">

      <div class="sector-bg" v-if="sectors[sectorCounter] && !activeRegionId"
           :style="`background-image: url(/regions/sectors/${sectors[sectorCounter].bgImage })`"
      ></div>

      <div class="sector-bg region" v-if="activeRegionId"
           :style="`background-image: url(/regions/regions/${regions.find( item=>item.regIndex == activeRegionId).bgImage })`"
      ></div>

      <side-navigation></side-navigation>

      <div class="pages-content">
        <div class="pages-data">

          <div v-if="activeRegionId" class="explore-data">
            <div class="explore-heading">

              <div class="explore-nav d-flex">
                <a href="#" class="moving-arrow next" @click.prevent="nextRegion" title="التالى"><i
                    class="ri-arrow-right-s-line"></i></a>
                <a href="#" class="moving-arrow prev" @click.prevent="prevRegion" title="السابق"><i
                    class="ri-arrow-left-s-line"></i></a>
              </div>

              <div class="region-map-bg">
                <img :src="`/maps/${regions.find( item=>item.regIndex == activeRegionId).id}.png`" alt="">
              </div>
              <h1 class="tx-38">منطقة <span>{{ regions.find( item=>item.regIndex == activeRegionId).title }}</span></h1>

              <span v-if="sectors[sectorCounter]">{{sectors[sectorCounter].label}}</span>
              <p class="op-6" v-else>أهم المؤشرات</p>

            </div>
            <div class="data-icons d-flex flex-wrap pd-y-10">
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">إجمالي عدد الأسر</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/briefcase.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">معدل بطالة الشباب</p>
                  <p class="tx-32 tx-bold">0.23</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">إجمالي عدد الأسر</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/heart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط العمر المتوقع عند الولادة</p>
                  <p class="tx-32 tx-bold">75</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/sar.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/heart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">75</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
            </div>
            <a href="#" @click.prevent="exploreRegionStats(activeRegion)"
               class="btn btn-success lg pd-x-30">قراءة المؤشرات</a>
          </div>



          <div v-if="sectors[sectorCounter] && !activeRegionId" class="explore-data">
            <div class="explore-heading">
              <svg class="svg-ico" :width="sectors[sectorCounter].iconWidth"
                   :height="sectors[sectorCounter].iconHeight">
                <use class="svg-ico-use"
                     :xlink:href="`icons/icon.symbol.svg#${sectors[sectorCounter].iconId}`"></use>
              </svg>
              <div class="explore-nav d-flex">
                <a href="#" class="moving-arrow next" @click.prevent="increase" title="التالى"><i
                    class="ri-arrow-right-s-line"></i></a>
                <a href="#" class="moving-arrow prev" @click.prevent="decrease" title="السابق"><i
                    class="ri-arrow-left-s-line"></i></a>
              </div>
              <h1 class="tx-38"><span>{{ sectors[sectorCounter].label }}</span> على المستوى الوطنى</h1>
              <p class="op-6">
                <span>أهم المؤشرات</span>
              </p>


            </div>
            <div class="data-icons d-flex flex-wrap pd-y-10">
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">إجمالي عدد الأسر</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/briefcase.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">معدل بطالة الشباب</p>
                  <p class="tx-32 tx-bold">0.23</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">إجمالي عدد الأسر</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/heart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط العمر المتوقع عند الولادة</p>
                  <p class="tx-32 tx-bold">75</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/sar.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/heart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">75</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/chart.svg" alt="">
                <div class="pd-x-15">
                  <p class="tx-16">متوسط حجم الأسرة</p>
                  <p class="tx-32 tx-bold">3,681,927</p>
                </div>
              </div>
            </div>
            <router-link to="/analytics" href="#" class="btn btn-success lg pd-x-30">قراءة المؤشرات</router-link>
          </div>
        </div>
      </div>
    </main>

  </section>
</template>

<script>

import PageHeader from "@/components/PageHeader";
import SideNavigation from "@/components/SideNavigation";
import sectors from "@/json/sectors.json";
import regions from "@/json/regions.json";

export default {
  components: {SideNavigation, PageHeader},
  data() {
    return {
      sectors: sectors,
      regions : regions
    }
  },

  methods: {

    nextRegion( ){
      if(this.$store.state.activeRegionId < this.regions.length){
        let currentIndex = regions.find( item=>item.regIndex == this.activeRegionId).regIndex;
        let nextIndex = currentIndex + 1;
        this.$store.state.activeRegionId = nextIndex;
        console.log(this.regions.length)
      }else {
        return  false
      }
    },

    prevRegion(){

      if(this.$store.state.activeRegionId > 1){
        let currentIndex = regions.find( item=>item.regIndex == this.activeRegionId).regIndex;
        let nextIndex = currentIndex - 1;
        this.$store.state.activeRegionId = nextIndex;
        console.log(this.regions.length)
      }else {
        return  false
      }

    },


    exploreRegionStats(region) {
      this.$store.state.activeRegion = region;
      this.$store.state.sectorCounter = null;
      this.$router.push("/analytics");
    },

    increase() {
      if (this.$store.state.sectorCounter < this.sectors.length - 1) {
        this.$store.state.sectorCounter++;
      } else
        return false

    },
    decrease() {
      if (this.$store.state.sectorCounter > 0) {
        this.$store.state.sectorCounter--;
      } else
        return false

    }
  },

  computed: {

    activeRegionId() {
      return this.$store.state.activeRegionId ;
    },

    sectorCounter() {
      return this.$store.state.sectorCounter ;
    },

    activeRegion() {
      return this.$store.state.activeRegion;
     },

    activeRegionObj() {
      return this.$store.state.activeRegionObj;
    },


    indicatorCounter(){
      return this.$store.state.indicatorCounter;
    },


}
}
</script>

<style lang="css">

</style>
