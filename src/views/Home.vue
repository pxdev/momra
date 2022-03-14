<template>
  <section class="landing-page">
    <page-header></page-header>
    <main class="bg-primary">

      <video-bg :sources="['Summer_Flower_4K_Living_Background.mp4']">
        <div class="landing-heading">
          <div class="container"><h1 class="tx-34">المرصد الحضري الوطني</h1></div>
        </div>
        <!-- / landing-heading -->

        <div class="container landing-data d-flex align-items-center justify-content-between">
          <div class="data-icons d-flex flex-wrap pd-y-30">
            <div v-for="n in 6" :key="n" class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
              <div class="pd-x-15">
                <p class="tx-16">إجمالي عدد الأسر</p>
                <p class="tx-32 tx-bold">3,681,927</p>
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
            <div v-for="(n, index) in 10" :key="index + '_group'" class="pd-x-10">
                <router-link to="/explore" class="home-nav-item">
                  <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
                    <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
                  </svg>
                  <span>البنية التحتية</span>
                  <span class="explore-btn tx-12 d-flex align-items-center"><i class="ri-arrow-left-line"></i><span class="pd-x-5">استكشف</span></span>
                </router-link>
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


      </video-bg>



    </main>

  </section>
</template>

<script>

import VideoBg from 'vue-videobg'
import VueSlickCarousel from 'vue-slick-carousel'
import HomeMap from "@/components/Charts/HomeMap";
import PageHeader from "@/components/PageHeader";

export default {
  components: {HomeMap, PageHeader, VideoBg, VueSlickCarousel},
  data() {
    return {
      Settings: {
        "dots": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 7,
        "slidesToScroll": 1,
        "touchThreshold": 1,
        "adaptiveHeight": true,

        "responsive": [
          {
            "breakpoint": 1024,
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
  }


}
</script>

<style lang="css">

</style>
