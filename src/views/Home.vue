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
            <img src="map.svg" alt="">
          </div>

        </div>
        <!-- / landing-data -->

        <div class="landing-navigation ">
          <div class="container">
            <VueSlickCarousel class="slick-carousel landing-slick" v-bind="Settings">
            <div v-for="(n, index) in 10" :key="index + '_group'" class="pd-x-10">
                <a href="#" class="home-nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="42.022" height="38.989" viewBox="0 0 42.022 38.989">
                    <g id="Conference" transform="translate(0 0.75)">
                      <g id="Group_2564" data-name="Group 2564" transform="translate(0 0)">
                        <path id="Path_210" data-name="Path 210"
                              d="M4.092,15.184A2.092,2.092,0,1,0,2,13.092,2.092,2.092,0,0,0,4.092,15.184Z"
                              transform="translate(-0.605 -5.422)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_211" data-name="Path 211"
                              d="M10.092,7.184A2.092,2.092,0,1,0,8,5.092,2.092,2.092,0,0,0,10.092,7.184Z"
                              transform="translate(-2.422 -3)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_212" data-name="Path 212"
                              d="M22.092,7.184A2.092,2.092,0,1,0,20,5.092,2.092,2.092,0,0,0,22.092,7.184Z"
                              transform="translate(-6.005 -3)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_213" data-name="Path 213"
                              d="M36.092,7.184A2.092,2.092,0,1,0,34,5.092,2.092,2.092,0,0,0,36.092,7.184Z"
                              transform="translate(-10.209 -3)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_214" data-name="Path 214"
                              d="M48.092,7.184A2.092,2.092,0,1,0,46,5.092,2.092,2.092,0,0,0,48.092,7.184Z"
                              transform="translate(-13.792 -3)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_215" data-name="Path 215"
                              d="M16.092,15.184A2.092,2.092,0,1,0,14,13.092,2.092,2.092,0,0,0,16.092,15.184Z"
                              transform="translate(-4.204 -5.422)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_216" data-name="Path 216" d="M14.643,28H0" transform="translate(0 -10.619)"
                              fill="none" stroke="#68bfca" stroke-miterlimit="10" stroke-width="1.5"/>
                        <path id="Path_217" data-name="Path 217"
                              d="M2.075,20.265A7.642,7.642,0,0,1,4.114,20c2.311,0,4.184.936,4.184,2.092v3.486"
                              transform="translate(-0.628 -8.186)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_218" data-name="Path 218"
                              d="M17.223,20.265A7.642,7.642,0,0,0,15.184,20C12.873,20,11,20.936,11,22.092"
                              transform="translate(-3.301 -8.183)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_219" data-name="Path 219"
                              d="M43.092,15.184A2.092,2.092,0,1,0,41,13.092,2.092,2.092,0,0,0,43.092,15.184Z"
                              transform="translate(-12.311 -5.422)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_220" data-name="Path 220"
                              d="M55.092,15.184A2.092,2.092,0,1,0,53,13.092,2.092,2.092,0,0,0,55.092,15.184Z"
                              transform="translate(-15.911 -5.422)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_221" data-name="Path 221" d="M53.643,28H39" transform="translate(-11.673 -10.619)"
                              fill="none" stroke="#68bfca" stroke-miterlimit="10" stroke-width="1.5"/>
                        <path id="Path_222" data-name="Path 222"
                              d="M41.075,20.265A7.642,7.642,0,0,1,43.115,20c2.311,0,4.184.936,4.184,2.092v3.486"
                              transform="translate(-12.327 -8.186)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_223" data-name="Path 223"
                              d="M56.223,20.265A7.642,7.642,0,0,0,54.184,20C51.873,20,50,20.936,50,22.092"
                              transform="translate(-15.003 -8.183)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_224" data-name="Path 224"
                              d="M23.113,12.023c.2-.015.409-.023.618-.023,2.311,0,4.184.936,4.184,2.092"
                              transform="translate(-6.939 -5.744)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                        <path id="Path_225" data-name="Path 225"
                              d="M34.8,12.023c-.2-.015-.409-.023-.618-.023C31.873,12,30,12.936,30,14.092"
                              transform="translate(-9.007 -5.744)" fill="none" stroke="#68bfca" stroke-miterlimit="10"
                              stroke-width="1.5"/>
                      </g>
                      <path id="Path_226" data-name="Path 226"
                            d="M28.184,27.762c2.311,0,4.184-2.185,4.184-4.881S30.494,18,28.184,18,24,20.185,24,22.881,25.873,27.762,28.184,27.762Z"
                            transform="translate(-7.199 -7.582)" fill="none" stroke="#60cb5f" stroke-miterlimit="10"
                            stroke-width="1.5"/>
                      <path id="Path_229" data-name="Path 229"
                            d="M27.4,51.037V40.264l5.721,1.629a2.113,2.113,0,0,0,1.741-.27l4.2-2.789a2.095,2.095,0,0,0-2.327-3.484L33.341,37.6l-5.849-1.664a6.345,6.345,0,0,0-1.731-.241H19.235a6.34,6.34,0,0,0-1.73.241L11.656,37.6,8.264,35.35a2.095,2.095,0,1,0-2.327,3.484l4.2,2.789a2.113,2.113,0,0,0,1.741.27L17.6,40.264V51.037"
                            transform="translate(-1.514 -12.798)" fill="none" stroke="#60cb5f" stroke-miterlimit="10"
                            stroke-width="1.5"/>
                    </g>
                  </svg>
                  <span>البنية التحتية</span>
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


      </video-bg>



    </main>

  </section>
</template>

<script>

import VideoBg from 'vue-videobg'
import PageHeader from "../components/PageHeader";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {PageHeader, VideoBg, VueSlickCarousel},
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
