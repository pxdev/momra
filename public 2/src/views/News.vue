<template>
  <section class="news">
    <page-header></page-header>

    <banner-heading banner-height="525" :image-url="newsFeaturedList[activeFeaturedNewsIndex].img">
      <div class="news-heading-content">

        <div class="explore-nav d-flex">
          <a href="#" class="moving-arrow next" @click.prevent="nextNews" title="التالى"><i
              class="ri-arrow-right-line tx-warning tx-42"></i></a>
          <a href="#" class="moving-arrow prev" @click.prevent="prevNews" title="السابق"><i
              class="ri-arrow-left-line tx-warning tx-42"></i></a>
        </div>

        <h2 class="tx-40">{{ newsFeaturedList[activeFeaturedNewsIndex].title }}</h2>
        <p class="tx-18">{{ newsFeaturedList[activeFeaturedNewsIndex].description }}</p>

        <router-link to="/news-details" href="#" class="btn mg-y-30 btn-secondary lg pd-x-60">المزيد</router-link>

      </div>
    </banner-heading>

    <over-bar>
      <div class="d-flex align-items-center flex-wrap">

        <div :class="{'active' : activeFeaturedNewsIndex == index }" v-for="(newsFeatured, index) in newsFeaturedList" :key="index+'_newsFeatured'" class="featured-news">
          <a href="#" @click.prevent="showNewsFeatured(index, newsFeatured)" class="featured-img rounded"
             :style="`background-image: url(${newsFeatured.img});`"></a>
          <div class="featured-meta">
            <h3 class="tx-16">{{ newsFeatured.title.substring(0, 60) + "..." }}</h3>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span>
            </p>
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

        <div v-for="(newsPost, index) in newsPosts" :key="index+'_news'" class="news-box card rounded shadow pd-20">
          <div class="news-box-data">
            <div class="featured-img rounded"
                 :style="`background-image: url(${newsPost.img});`">
              <span class="news-category bg-primary" v-if="newsPost.isLocale==true">المحلية</span>
              <span class="news-category bg-info" v-else>الدولية</span>
            </div>
            <h3 class="mg-b-10 tx-16">
              <router-link class="tx-primary" to="/news-details">{{
                  newsPost.title.substring(0, 50) + "..."
                }}
              </router-link>
            </h3>
            <p class="tx-12 mg-b-15">{{ newsPost.description.substring(0, 150) + "..." }}</p>
            <p class="d-flex align-items-center"><i class="ri-calendar-line tx-16"></i><span class="pd-x-5 tx-12">1443/08/05 الموافق 2022/03/08</span>
            </p>
          </div>
        </div>

      </div>

      <div class="paging d-flex justify-content-between flex-wrap align-items-center pd-y-30">
        <div class="data-pagination">
          <ul class="pagination justify-content-center">
            <li class="page-item pagination-page-nav active"><a href="#" class="page-link">1<span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">2</a></li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">3</a></li>
            <li class="page-item pagination-page-nav"><a href="#" class="page-link">4</a></li>
            <li class="page-item pagination-next-nav"><a href="#" aria-label="Next" class="page-link"><span
                aria-hidden="true">»</span><span class="sr-only">التالى</span></a></li>
          </ul>
        </div>
        <p class="tx-primary">إظهار 01-05 من 72 مقالات</p>
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
      activeFeaturedNewsIndex: 0,
      newsPosts: [
        {
          "img": "https://placeimg.com/640/480/nature",
          "title": "الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص",
          "description": "في حفل إطلاق ملتقى استثمر بالجوف الحقيل يؤكد على تيسير وأتمتة كامل رحلة المستثمر عبر بوابة الاستثمار البلدي فرص سعياً لرفع مساهمة القطاع الخاص في تنمية المدن أكد معالي وزير الشؤون البلدية والقروية والإسكان",
          "isLocale": true,
          "isFeaturedActive": false,
          "isFeatured": false
        },
        {
          "img": "https://placeimg.com/640/480/people",
          "title": "الأمير سعود بن طلال يستقبل مدير المكتب الإقليمي لبرنامج",
          "description": " لرفع مساهمة القطاع الخاص في تنمية المدن أكد معالي وزير وأتمتة كامل رحلةالبلدي فرص سعياً لرفع مساهمة القطاع ",
          "isLocale": false,
          "isFeaturedActive": false,
          "isFeatured": true
        },
        {
          "img": "https://placeimg.com/640/480/animals",
          "title": "  طلال يستقبل  المكتب الإقليمي لبرنامج",
          "description": " تنمية مساهمة القطاع الخاص في  المدن أكد معالي وزير وأتمتة كامل رحلةالبلدي  سعياً لرفع مساهمة القطاع ",
          "isLocale": true,
          "isFeaturedActive": false,
          "isFeatured": true
        },
        {
          "img": "https://placeimg.com/640/480/arch",
          "title": " بن طلال يستقبل مدير المكتب الإقليمي لبرنامج",
          "description": " لرفع مساهمة القطاع الخاص في تنمية المدن أكد معالي وزير وأتمتة كامل  سعياً لرفع مساهمة القطاع ",
          "isLocale": false,
          "isFeaturedActive": false,
          "isFeatured": false
        },
        {
          "img": "https://placeimg.com/640/480/nature",
          "title": " فرص سعياً يستقبل مدير فرص سعياً  لبرنامج",
          "description": "  مساهمة القطاع الخاص في تنمية المدن أكد معالي وزير وأتمتة كامل رحلةالبلدي فرص سعياً لرفع مساهمة القطاع ",
          "isLocale": false,
          "isFeaturedActive": false,
          "isFeatured": true
        },
        {
          "img": "https://placeimg.com/640/480/people",
          "title": " الخاص في تنمية المدن أكد معالي وزير مدير  الإقليمي لبرنامج",
          "description": " لرفع مساهمة القطاع الخاص في تنمية المدن أكد معالي وزير وأتمتة كامل رحلةالبلدي فرص سعياً لرفع مساهمة القطاع ",
          "isLocale": false,
          "isFeaturedActive": false,
          "isFeatured": true
        },
      ]
    }
  },
  methods: {

    nextNews() {

      if (this.activeFeaturedNewsIndex < this.newsFeaturedList.length - 1) {
        this.activeFeaturedNewsIndex++;

      } else {
        return false
      }

    },

    prevNews() {
      if (this.activeFeaturedNewsIndex <= 0) {
        return false
      } else {
        this.activeFeaturedNewsIndex--;
      }


    },


    showNewsFeatured(index, item) {
      this.activeFeaturedNewsIndex = index;
      item.isFeaturedActive = true
    }

  },

  computed: {
    newsFeaturedList() {
      return this.newsPosts.filter(item => item.isFeatured == true).slice(0, 4);
    },

  }
}
</script>

<style scoped>

</style>
