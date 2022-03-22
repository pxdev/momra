<template>
  <section class="news">
    <page-header></page-header>

    <banner-heading banner-height="525" image-url="https://placeimg.com/1000/920/tech">
      <div class="news-heading-content">
        <div class="explore-nav d-flex">
          <a href="#" class="moving-arrow next" @click.prevent="increase" title="التالى"><i
              class="ri-arrow-right-line tx-warning tx-42"></i></a>
          <a href="#" class="moving-arrow prev" @click.prevent="decrease" title="السابق"><i
              class="ri-arrow-left-line tx-warning tx-42"></i></a>
        </div>
        <h2 class="tx-40">الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص…</h2>
        <p class="tx-18">في حفل إطلاق ملتقى استثمر بالجوف الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص سعياً لرفع مساهمة القطاع الخاص في تنمية المدن  أكد معالي وزير الشؤون البلدية والقروية والإسكان الأستاذ… </p>
        <router-link to="/news-details" href="#"  class="btn mg-y-30 btn-secondary lg pd-x-60">المزيد</router-link>
      </div>

    </banner-heading>

    <over-bar>
      <div class="d-flex align-items-center flex-wrap">

        <div class="featured-news">
          <div class="featured-img rounded" :style="`background-image: url(https://placeimg.com/1000/920/tech);`"></div>
          <div class="featured-meta">
            <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
          </div>
        </div>
        <div class="featured-news">
          <div class="featured-img rounded" :style="`background-image: url(https://placeimg.com/1000/920/tech);`"></div>
          <div class="featured-meta">
            <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
          </div>
        </div>
        <div class="featured-news">
          <div class="featured-img rounded" :style="`background-image: url(https://placeimg.com/1000/920/tech);`"></div>
          <div class="featured-meta">
            <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
          </div>
        </div>

      </div>
    </over-bar>
     <!-- over bar -->

    <main class="container pages pd-y-40 rounded">

      <div class="list-heading mg-b-40 d-flex align-items-center justify-content-between">
        <h1 class="tx-primary tx-22 tx-bold">الأخبار الحضرية</h1>

        <div class="list-actions d-flex">
          <drop-down title="اختر السنة" class="form-dropdown lg" toggle-arrow="true">
            <a href="#" class="menu-item">2021</a>
            <a href="#" class="menu-item">2020</a>
            <a href="#" class="menu-item">2019</a>
            <a href="#" class="menu-item">2018</a>
          </drop-down>

          <div class="toggle-switch">
            <a href="#" @click.prevent="activeToggle=1" :class="{'active' : activeToggle==1}">المحلية</a>
            <a href="#" @click.prevent="activeToggle=2" :class="{'active' : activeToggle==2}">الدولية</a>
            <a href="#" @click.prevent="activeToggle=3" :class="{'active' : activeToggle==3}">الجميع</a>
          </div>


        </div>


      </div>

      <div class="news-list flex-wrap d-flex">

        <div v-for="n in 6" :key="n" class="news-box card rounded shadow pd-20">
          <div class="news-box-data">
            <div class="featured-img rounded" :style="`background-image: url(https://placeimg.com/1000/920/tech);`">
              <span class="news-category bg-primary">المحلية</span>

            </div>
            <h3 class="mg-b-10 tx-16">وافي “يرخص 500 وحدة سكنية صغيرة ومتوسطة …</h3>
            <p class="tx-12 mg-b-15">وقّعت الشركة السعودية لإعادة التمويل العقاري (SRC) المملوكة بالكامل لصندوق الاستثمارات العامة - اتفاقية تعاون مشترك مع البنك الأهلي السعودي…</p>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
          </div>
        </div>

      </div>



    </main>

    <page-footer></page-footer>


  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import BannerHeading from "@/components/BannerHeading";
import OverBar from "@/components/OverBar";
import PageFooter from "@/components/PageFooter";
import DropDown from "../components/DropDown";
export default {
  name: "News",
  components: {DropDown, OverBar, BannerHeading, PageHeader, PageFooter},
  data() {
    return {
      activeToggle: 1,
    }
  },
}
</script>

<style scoped>

</style>
