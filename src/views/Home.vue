<template>
  <section class="landing-page">

    <page-header></page-header>
    <main class="bg-primary">
      <video-bg class="home-video" :sources="['intro.mp4']"></video-bg>
      <div class="landing-heading">
        <div class="container">
          <h1 class="tx-34">المرصد الحضري الوطني</h1>
        </div>
      </div>
      <!-- / landing-heading -->
      <div class="container landing-data d-flex justify-content-between align-items-center"
           :style="`height:${homeHeight}px`">

        <VueSlickCarousel class="slick-carousel landing-primary-slick" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true" v-bind="primarySettings">
          <div v-for="(sectorName, index) in sectors" :key="index + '_sectorName'" class="landing-primary-sectors pd-x-10">
            <h3>{{ sectorName.label }}</h3>

            <div class="data-icons d-flex flex-wrap">
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-1.svg" alt="">
                <div class="pd-x-15">
                  <p>طول الطرق الحضرية المعبدة (المسفلتة) لكل 1000 نسمة من السكان</p>
                  <p class="tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-6.svg" alt="">
                <div class="pd-x-15">
                  <p>إمكانية الوصول إلى المناطق العامة المفتوحة</p>
                  <p class="tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-4.svg" alt="">
                <div class="pd-x-15">
                  <p>نسبة خدمات الإنترنت الثابت عالي السرعة</p>
                  <p class="tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-3.svg" alt="">
                <div class="pd-x-15">
                  <p> عدد المتطوعين لكل 100،000 نسمة من السكان</p>
                  <p class="tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-5.svg" alt="">
                <div class="pd-x-15">
                  <p>النسبة المئوية  لعدد المساكن التي تستخدم الطاقة الشمسية</p>
                  <p class="tx-bold">3,681,927</p>
                </div>
              </div>
              <div class="data-icon-box d-flex align-items-start">
                <img class="mg-t-5" src="data-icons/d-2.svg" alt="">
                <div class="pd-x-15">
                  <p>نسبة إجمالي عدد السُكان النشطين اقتصاديا</p>
                  <p class="tx-bold">0.23</p>
                </div>
              </div>
            </div>


          </div>

        </VueSlickCarousel>


        <div class="ksa-map">
          <home-map chart-id="homeMap"></home-map>
        </div>

      </div>
      <!-- / landing-data -->
      <div class="landing-navigation ">
        <div class="container">

          <VueSlickCarousel class="slick-carousel landing-slick" v-bind="secondarySettings" :focusOnSelect="true" :asNavFor="$refs.c1" ref="c2">
            <div v-for="(sector, index) in sectors" :key="index + '_group'" class="pd-x-10">
              <a href="#" @click.prevent="setActiveSector(index)" class="home-nav-item">
                <svg class="svg-ico" :width="sector.iconWidth" :height="sector.iconHeight">
                  <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
                </svg>
                <span>{{ sector.label }}</span>
                <span class="explore-btn tx-12 d-flex align-items-center"><i class="ri-arrow-left-line"></i><span
                    class="pd-x-5">استكشف</span></span>
              </a>
            </div>
            <template #prevArrow>
              <div>
                <div class="home-slider-arrow">
              <i class="ri-arrow-left-s-line"></i>
                </div>
              </div>
            </template>
            <template #nextArrow>
              <div>
                <div class="home-slider-arrow">
                <i class="ri-arrow-right-s-line"></i>
                </div>
              </div>
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
      homeHeight: null,

      primarySettings: {
        "dots": false,
        "arrows": false,
        "infinite": true,
        "speed": 300,
        "slidesToShow": 1,
        "adaptiveHeight": false,
        // "fade": true,
        "pauseOnHover": true,
        "swipeToSlide": true,


      },
      secondarySettings: {
        "dots": false,
        "infinite": true,
        "speed": 300,
        "slidesToShow": 7,
        "adaptiveHeight": false,
        "autoplay": true,
        "autoplaySpeed": 4000,
        "swipeToSlide": true,
        "centerMode": true,
        "centerPadding": "20px",

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

    setActiveSector(index) {
      this.$store.state.sectorCounter = index;
      this.$store.state.defaultSectorCounter = index;
      this.$store.state.activeRegion = null;
      this.$store.state.activeRegionId = null;
      this.$store.state.indicatorCounter = [index, 0];
      this.$router.push("/explore");
    },

    homeSize() {
      this.homeHeight = window.innerHeight - 220;
     }
  },

  mounted() {
    this.homeSize();
  },

  created() {
    window.addEventListener('resize', this.homeSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.homeSize);
  },

  computed: {
    sectorCounter() {
      return this.$store.state.sectorCounter;
    }
  },


}
</script>

<style lang="css">

</style>
