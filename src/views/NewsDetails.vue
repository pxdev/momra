<template>
  <section class="news-details">
    <page-header></page-header>

    <banner-heading banner-height="250" :image-url="newsPosts[$route.params.id].img" >
      <div class="news-heading-content">
        <h2 class="tx-40">{{newsPosts[$route.params.id].title}}</h2>
        <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span>
        </p>
      </div>
    </banner-heading>


    <main class="container pages pd-y-40 rounded">


      <div class="cms flex-wrap d-flex">
        <div class="cms-content">
          <img :src="`${newsPosts[$route.params.id].img}`" alt="">
          <p>
            {{newsPosts[$route.params.id].details}}
          </p>
        </div>
        <div class="cms-sidebar">
          <div class="cms-sidebar-content">
          <h2 class="mg-b-20">محتوى ذو صلة</h2>
          <div class="featured-news">
            <div class="featured-img rounded" :style="`background-image: url(/news/green-riyadh-2019-riyadh-green-7.jpg);`"></div>
            <div class="featured-meta">
              <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
              <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
            </div>
          </div>
          <div class="featured-news">
            <div class="featured-img rounded" :style="`background-image: url(/news/landmark-tower-Markaz-al-Mamlakah-Saudi-Arabia-Riyadh.webp);`"></div>
            <div class="featured-meta">
              <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
              <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
            </div>
          </div>
          <div class="featured-news">
            <div class="featured-img rounded" :style="`background-image: url(/news/saudi-arabia-for-first-time-marks-its-founding-downplaying-conservative-roots.webp);`"></div>
            <div class="featured-meta">
              <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
              <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
            </div>
          </div>
          <div class="featured-news">
            <div class="featured-img rounded" :style="`background-image: url(/news/green-riyadh-2019-riyadh-green-7.jpg);`"></div>
            <div class="featured-meta">
              <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
              <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
            </div>
          </div>
          <div class="featured-news">
            <div class="featured-img rounded" :style="`background-image: url(/news/green-riyadh-2019-riyadh-green-7.jpg);`"></div>
            <div class="featured-meta">
              <h3 class="tx-16">الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج…</h3>
              <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
            </div>
          </div>
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
import PageFooter from "@/components/PageFooter";
import newsPosts from "@/json/news.json";

export default {
  name: "News",
  components: { BannerHeading, PageHeader, PageFooter},
  data() {
    return {
      activeToggle: 1,
      newsPosts: newsPosts

    }
  },
}
</script>

<style scoped>

</style>
