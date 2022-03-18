<template>
  <section class="explore-page">
    <page-header></page-header>
    <main class="container pages pd-y-30 d-flex ">

      <section class="sector-bg" style="background-image: url(https://placeimg.com/1000/920/tech)"></section>

      <side-navigation></side-navigation>
      <div class="pages-content">
        <div class="explore-data">

          <div class="explore-heading">
            <svg class="svg-ico" :width="sectors[counter].iconWidth" :height="sectors[counter].iconHeight">
              <use class="svg-ico-use"
                   :xlink:href="`icons/icon.symbol.svg#${sectors[counter].iconId}`"></use>
            </svg>
            <div class="explore-nav d-flex">
               <a href="#" class="moving-arrow next" @click.prevent="increase" title="التالى"><i class="ri-arrow-right-line tx-warning tx-42"></i></a>
              <a href="#" class="moving-arrow prev" @click.prevent="decrease" title="السابق"><i class="ri-arrow-left-line tx-warning tx-42"></i></a>
            </div>
            <h1 class="tx-42">{{ sectors[counter].label }}</h1>
            <p class="op-6">إنه نص وهمي لتصميم الويب</p>
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
          <router-link to="/analytics" href="#" class="btn btn-secondary lg pd-x-30">تفاصيل</router-link>
        </div>
      </div>
    </main>

  </section>
</template>

<script>

import PageHeader from "@/components/PageHeader";
import SideNavigation from "@/components/SideNavigation";
import sectors from "@/json/sectors.json";

export default {
  components: {SideNavigation, PageHeader},
  data() {
    return {
      activeSectorIndex: 0,
      sectors: sectors,

    }
  },

  methods: {


    increase (){

      if (this.$store.state.counter< this.sectors.length - 1){
        this.$store.state.counter ++;
      }else
        return false

    },
    decrease (){
      if (this.$store.state.counter >  0){
        this.$store.state.counter --;
      }else
        return false

    }

  },

  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },


}
</script>

<style lang="css">

</style>
