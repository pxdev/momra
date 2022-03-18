<template>
  <section class="landing-page">
    <page-header></page-header>
    <main class="bg-primary">
      <video-bg class="home-video" :sources="['intro.mp4']"> </video-bg>
        <div class="landing-heading">
          <div class="container">
            <h1 class="tx-34">المرصد الحضري الوطني</h1></div>
        </div>
        <!-- / landing-heading -->
        <div class="container landing-data d-flex justify-content-between">
          <div class="data-icons d-flex flex-wrap">
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
              <div class="pd-x-15">
                <p>إجمالي عدد الأسر</p>
                <p class="tx-bold">3,681,927</p>
              </div>
            </div>
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/briefcase.svg" alt="">
              <div class="pd-x-15">
                <p>معدل بطالة الشباب</p>
                <p class="tx-bold">0.23</p>
              </div>
            </div>
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
              <div class="pd-x-15">
                <p>إجمالي عدد الأسر</p>
                <p class="tx-bold">3,681,927</p>
              </div>
            </div>
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/chart.svg" alt="">
              <div class="pd-x-15">
                <p>متوسط حجم الأسرة</p>
                <p class="tx-bold">3,681,927</p>
              </div>
            </div>
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/chart.svg" alt="">
              <div class="pd-x-15">
                <p>متوسط حجم الأسرة</p>
                <p class="tx-bold">3,681,927</p>
              </div>
            </div>
            <div class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/chart.svg" alt="">
              <div class="pd-x-15">
                <p>متوسط حجم الأسرة</p>
                <p class="tx-bold">3,681,927</p>
              </div>
            </div>


          </div>
          <div class="ksa-map">
            <home-map chart-id="homeMap"></home-map>
           </div>

        </div>
        <!-- / landing-data -->
        <div class="landing-navigation ">
          <div class="container">
            <VueSlickCarousel class="slick-carousel landing-slick" v-bind="Settings">
            <div v-for="(sector, index) in sectors" :key="index + '_group'" class="pd-x-10">
                <a href="#" @click.prevent="setActiveSector(index)" class="home-nav-item">
                  <svg class="svg-ico" :width="sector.iconWidth" :height="sector.iconHeight" >
                  <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
                  </svg>
                  <span>{{ sector.label }}</span>
                  <span class="explore-btn tx-12 d-flex align-items-center"><i class="ri-arrow-left-line"></i><span class="pd-x-5">استكشف</span></span>
                </a>
            </div>
            <template #prevArrow>
              <div class="ri-arrow-left-line"></div>
            </template>
            <template #nextArrow>
              <div class="ri-arrow-right-line"></div>
            </template>
          </VueSlickCarousel>
          </div>
        </div>
        <!-- / landing-navigation -->
    </main>
  </section>
</template>

<script>

import VideoBg from 'vue-videobg'
import VueSlickCarousel from 'vue-slick-carousel'
import HomeMap from "@/components/Charts/HomeMap";
import PageHeader from "@/components/PageHeader";
import sectors from "@/json/sectors.json";

export default {
  components: {HomeMap, PageHeader, VideoBg, VueSlickCarousel},
  data() {
    return {

      sectors: sectors,

      Settings: {
        "dots": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 7,
        "slidesToScroll": 7,
        "touchThreshold": 7,
        "adaptiveHeight": true,

        "responsive": [
          {
            "breakpoint": 1023,
            "settings": {
              "slidesToShow": 3,
            }
          },

          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
            }
          }
        ]


      }
    }
  },
  methods: {

    setActiveSector(index){
      this.$store.state.counter = index;
      this.$router.push("/explore");
    },

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
