<template>
  <section class="explore-page" style="background-image: url(https://placeimg.com/1000/920/tech)">
    <page-header></page-header>
    <main class="container pages pd-y-30 d-flex">
      <side-navigation></side-navigation>
      <div class="pages-content">

        <div>
          <div class="explore-data">
            <div class="explore-heading pd-y-60">
          <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
            <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
          </svg>
          <div class="explore-nav d-flex">
            <a href="#"><i class="ri-arrow-right-line tx-warning tx-34"></i></a>
            <a href="#"><i class="ri-arrow-left-line tx-warning tx-34"></i></a>
          </div>
          <h1 class="tx-42">{{ sectors[activeSectorIndex].label }}</h1>
          <p class="op-6">إنه نص وهمي لتصميم الويب</p>
        </div>
            <div class="data-icons d-flex flex-wrap pd-y-10">
            <div v-for="n in 9" :key="n" class="data-icon-box d-flex align-items-start">
              <img class="mg-t-5" src="data-icons/data_icon_01.svg" alt="">
              <div class="pd-x-15">
                <p class="tx-16">إجمالي عدد الأسر</p>
                <p class="tx-32 tx-bold">3,681,927</p>
              </div>
            </div>
          </div>
          <router-link to="/analytics" href="#" class="btn btn-secondary lg pd-x-30">تفاصيل</router-link>
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

export default {
  components: {SideNavigation, PageHeader},
  data() {
    return {
      activeSectorIndex:3,
      sectors: sectors,
    }
  }


}
</script>

<style lang="css">

</style>
