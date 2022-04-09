<template>
  <section class="urban-studies">
    <page-header></page-header>

    <banner-heading banner-height="250" image-url="/regions/regions/madinahmonawwarah.jpg">
      <div class="news-heading-content">
<!--        <p>أعمالنا الحضرية</p>-->
        <h2 class="tx-40">الاستطلاعات الحضرية</h2>
<!--        <p>كما يُعرف أحيانًا ، هو نص وهمي يستخدم في تصميمات الطباعة أو الرسوم أو الويب</p>-->

      </div>
    </banner-heading>

    <main class="container pages pd-y-40 rounded">

      <div class="list-heading mg-b-40 d-flex align-items-center justify-content-between">
        <div class="mg-b-15">
        <h1 class="tx-primary tx-22 tx-bold">الاستطلاعات الحضرية</h1>
        <p>في حفل إطلاق ملتقى استثمر بالجوف الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص سعياً لرفع مساهمة القطاع الخاص في تنمية المدن  أكد معالي وزير الشؤون البلدية والقروية والإسكان الأستاذ… في حفل إطلاق ملتقى استثمر بالجوف الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص سعياً لرفع مساهمة القطاع الخاص في تنمية المدن  أكد معالي وزير الشؤون البلدية والقروية والإسكان الأستاذ… </p>
        </div>



      </div>

      <div class="news-list flex-wrap d-flex">

        <div v-for="(newsPost, index) in newsPosts" :key="index+'_news'" class="news-box card rounded shadow pd-20">
          <div class="news-box-data">
            <div class="featured-img rounded" :style="`background-image: url(${newsPost.img});`">
              <div class="overlay">
              <a :href="newsPost.link" target="_blank" class="btn lg btn-secondary btn-pre">
                <span class=" btn-ico"><i class="ri-download-2-line"></i></span>
                <span>تحميل</span>
              </a>
              </div>
             </div>
            <h3 class="mg-b-10 tx-16"><router-link class="tx-primary" to="/news-details">{{newsPost.title.substring(0,80) }}</router-link></h3>
             <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span></p>
          </div>
        </div>

      </div>

      <div class="paging d-flex justify-content-between flex-wrap align-items-center pd-y-30">
        <div class="data-pagination">
          <ul class="pagination justify-content-center">
            <li class="page-item pagination-page-nav active"><a href="#" class="page-link">1<span class="sr-only">(current)</span></a></li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">2</a></li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">3</a></li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">4</a></li>
            <li class="page-item pagination-next-nav"><a href="#" aria-label="Next" class="page-link"><span aria-hidden="true">»</span><span class="sr-only">التالى</span></a></li></ul>
        </div>
        <p class="tx-primary">عرض 01-09 من أصل 72 إرشادات</p>
      </div>


    </main>

    <page-footer></page-footer>


  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import BannerHeading from "@/components/BannerHeading";
import PageFooter from "@/components/PageFooter";

export default {
  name: "UrbanStudies",
  components: { BannerHeading, PageHeader, PageFooter},
  data() {
    return {
      activeToggle: 1,
      activeFeaturedNewsIndex:0,
      newsPosts: [
        {
          "img": "news/green-riyadh-2019-riyadh-green-7.jpg",
          "title" : "إرشادات للمراصد المحلية 1",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
        {
          "img": "news/saudi-arabia-for-first-time-marks-its-founding-downplaying-conservative-roots.webp",
          "title" : "إرشادات للمراصد المحلية 2",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
        {
          "img": "news/landmark-tower-Markaz-al-Mamlakah-Saudi-Arabia-Riyadh.webp",
          "title" : "إرشادات للمراصد المحلية 3",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
        {
          "img": "news/King-Salman-Park_2.webp",
          "title" : "إرشادات للمراصد المحلية 4",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
        {
          "img": "news/506543e3-6e94-40ab-9d43-40c8d486cf71.webp",
          "title" : "إرشادات للمراصد المحلية 5",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
        {
          "img": "news/506543e3-6e94-40ab-9d43-40c8d486cf71.webp",
          "title" : "إرشادات للمراصد المحلية 6",
          "link" : "https://www.orimi.com/pdf-test.pdf",
        },
      ]
    }
  },
  methods:{

    nextNews(){

      if (this.activeFeaturedNewsIndex + 1 < this.newsFeaturedList.length ){
        this.activeFeaturedNewsIndex ++;
      }else {
        return false
      }

    },

    prevNews(){
      if (this.activeFeaturedNewsIndex + 1 >= 1 ){
        this.activeFeaturedNewsIndex --;
      }
      else {
        return false
      }


    },


    showNewsFeatured(index, item){
      this.activeFeaturedNewsIndex = index;
      item.isFeaturedActive = true
    }

  },
  computed: {
    newsFeaturedList() {
      return this.newsPosts.filter(item => item.isFeatured == true).slice(0,3);
    },

  }
}
</script>

<style scoped>

</style>
