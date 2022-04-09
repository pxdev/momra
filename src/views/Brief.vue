<template>
  <section class="brief">
    <page-header></page-header>

    <banner-heading banner-height="250" image-url="/regions/regions/tabouk.jpg">
      <div class="news-heading-content">
<!--        <p>عن المرصد</p>-->
        <h2 class="tx-40">نبذة عن المرصد</h2>
<!--        <p>كما يُعرف أحيانًا ، هو نص وهمي يستخدم في تصميمات الطباعة أو الرسوم أو الويب</p>-->

      </div>
    </banner-heading>

    <main class="pages rounded">

      <div class="content-section bg-light pd-y-80 pd-x-40">
        <div class="container">
          <h3 class="tx-center tx-primary tx-32 mg-b-30">التنمية العمرانية المعاصرة</h3>
          <div class="row">
            <div class="col col-xs-12 col-md-1 mg-b-15">
              <img src="/cms/business_agreement.svg" alt="">
            </div>

            <div class="col col-xs-12 col-md-6 mg-b-15">
              <p>بدأ التطور العمراني المعاصر في المملكة حول مراكز إنتاج النفط وعاصمة المملكة والمدينتين المقدستين.
                وانتقل السكان من المناطق الريفية والصحراوية ليعيشوا في المناطق الحضرية في موجات متتالية ، ثم بدأت عملية
                التحضر بالانتشار في جميع أنحاء البلاد ، حيث زادت الاستثمارات الحضرية لتطوير الخدمات والمرافق والنقل
                والتعليم والصحة والسياحة والتجارة ، وبالتالي كانت هناك موجات من الهجرة الريفية إلى جميع مدن المملكة.</p>
              <br><br>
              <p>أدى هذا النمو العمراني السريع إلى وجود فجوات من عدم التوازن في توزيع المرافق والخدمات بين مناطق المملكة
                ، مما أدى إلى تفاوت في حجم الهجرة الداخلية إلى المراكز الحضرية.

                ومن هنا جاءت الحاجة إلى رصد المتغيرات التي تحدث في القطاعات الحضرية على جميع المستويات (الوطنية
                والإقليمية والمحلية) ، حيث تم الاعتماد على فكرة صياغة المؤشرات الإحصائية التي يتم من خلالها رصد
                المتغيرات.</p>

            </div>
            <div class="col col-xs-12 col-md-5 mg-b-15">
              <div class="video-player">
                <video controls>
                  <source src="intro.mp4" type="video/mp4">
                  Your browser does not support HTML video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-section bg-gray pd-y-80 pd-x-40">
        <div class="container tx-center">
          <h3 class="tx-center tx-primary tx-32 mg-b-30">التنمية الحضرية المستدامة</h3>


          <p>من أجل تحقيق التنمية الحضرية المستدامة ومتابعة عملية التحضر ، بدأ عدد من المدن والمناطق والمناطق في العديد
            من البلدان المتقدمة في إنشاء مراصد حضرية بدعم ودعم من المرصد الحضري العالمي التابع لبرنامج الأمم المتحدة
            للمستوطنات البشرية. HABITAT ©).</p>
          <br><br>
          <p class="tx-20">
            وتنفيذاً للأمر الملكي الكريم ببرقيته رقم 28725 وتاريخ 14/6/1437 هـ ، صدر قرار مجلس الوزراء رقم 250.
          </p>


        </div>
      </div>


      <div class="content-section bg-light pd-y-80 pd-x-40">
        <div class="container tx-center">
          <h3 class="tx-center tx-primary tx-32 mg-b-30">الإدارة العامة للمرصد الحضري الوطني</h3>


          <p>أنشأت الوزارة وحدة إدارية باسم الإدارة العامة للمرصد الحضري الوطني ، وتأتي مهامها من إنتاج المؤشرات الحضرية
            وإتاحتها للقيادات وأصحاب المصلحة.</p>
          <br><br>
          <p class="tx-20">
            المرصد الحضري الوطني هو المرجع الرئيسي للرصد العمراني في المملكة ويختص بالتنسيق والشراكة مع الجهات المعنية
            لإنتاج وإدارة المؤشرات العمرانية وبياناتها بهدف المساهمة في رسم السياسات الحضرية في المملكة ، وكذلك الإشراف
            الفني على المراصد الحضرية المحلية في المناطق والمدن والمحافظات.
          </p>




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

export default {
  name: "UrbanStudies.vue",
  components: {BannerHeading, PageHeader, PageFooter},
  data() {
    return {
      activeToggle: 1,
      activeFeaturedNewsIndex: 0,
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
  methods: {

    nextNews() {

      if (this.activeFeaturedNewsIndex + 1 < this.newsFeaturedList.length) {
        this.activeFeaturedNewsIndex++;
      } else {
        return false
      }

    },

    prevNews() {
      if (this.activeFeaturedNewsIndex + 1 >= 1) {
        this.activeFeaturedNewsIndex--;
      } else {
        return false
      }


    },


    showNewsFeatured(index, item) {
      this.activeFeaturedNewsIndex = index;
      item.isFeaturedActive = true
    }

  },

  computed: {
    newsFeaturedList() {
      return this.newsPosts.filter(item => item.isFeatured == true).slice(0, 3);
    },

  }
}
</script>

<style scoped>

</style>
