<template>
  <section class="OurVision">
    <page-header></page-header>

    <banner-heading banner-height="325" image-url="/regions/regions/aljouf.jpg">
      <div class="news-heading-content">
        <p>عن المرصد</p>
        <h2 class="tx-40">الرؤية والرسالة</h2>
        <p>كما يُعرف أحيانًا ، هو نص وهمي يستخدم في تصميمات الطباعة أو الرسوم أو الويب</p>

      </div>
    </banner-heading>

    <div class="vision-section d-flex flex-wrap">
      <div class="vision-section-box pd-y-40 tx-center flex-fill">
        <div class="d-flex justify-content-center mg-b-15">
          <img src="cms/vision_white.svg" alt="">
        </div>

        <h4 class="tx-bold tx-white">الرؤية</h4>
        <p class="tx-white">الرصد الحضري في مناطق المملكة كافة لتوجيه التنمية الحضرية وتحسين جودة الحياة.</p>
      </div>
      <div class="vision-section-box pd-y-40 tx-center flex-fill">
        <div class="d-flex justify-content-center mg-b-15">
          <img src="cms/msg_white.svg" alt="">
        </div>

        <h4 class="tx-bold tx-white">الرسالة</h4>
        <p class="tx-white">التميز لتقديم أفضل خدمات تطوير عمليات الرصد الحضري والمؤشرات الحضرية والدراسات ذات العلاقة.</p>
      </div>
    </div>

    <main class="pages rounded">


      <div class="bg-gray pd-y-80 ">
        <div class="container ">
          <h3 class="tx-primary tx-32 mg-b-20">القيم</h3>

          <div class="d-flex our-values">
            <div class="data-box card rounded pd-25">
              <img src="/cms/search.svg" alt="" class="mg-15">
              <p class="tx-18 tx-bold tx-primary">الشفافية</p>
            </div>
            <div class="data-box card rounded pd-25">
              <img src="/cms/update_profile.svg" alt="" class="mg-15">
              <p class="tx-18 tx-bold tx-primary">المسؤولية الاجتماعية</p>
            </div>
            <div class="data-box card rounded pd-25">
              <img src="/cms/add_user.svg" alt="" class="mg-15">
              <p class="tx-18 tx-bold tx-primary">رضا المستفيدين</p>
            </div>
            <div class="data-box card rounded pd-25">
              <img src="/cms/idea.svg" alt="" class="mg-15">
              <p class="tx-18 tx-bold tx-primary">الابتكار</p>
            </div>

            <div class="data-box card rounded pd-25">
              <img src="/cms/shield.svg" alt="" class="mg-15">
              <p class="tx-16 tx-bold tx-primary">النزاهة</p>
            </div>

          </div>
        </div>
      </div>


      <div class="bg-light pd-y-80 ">
        <div class="container our-targets ">
          <h3 class="tx-primary tx-32 mg-b-30">الأهداف</h3>

          <div class="row">
            <div class="col col-xs-12 col-md-4 mg-b-15">
              <p class="tx-40 tx-bold tx-secondary">01</p>
              <h3>تطوير عمليات الرصد الحضري </h3>
              <div class="divider mg-y-20"></div>
              <p>تطوير عمليات الرصد الحضري في المملكة ووضع ضوابط للإشراف الفني على المراصد المحلية في المناطق، والمدن، والمحافظات.</p>
            </div>
            <div class="col col-xs-12 col-md-4 mg-b-15">
              <p class="tx-40 tx-bold tx-secondary">02</p>
              <h3>تعزيز العلاقات بين القطاعات المساهمة  </h3>
              <div class="divider mg-y-20"></div>
              <p>تعزيز العلاقات بين القطاعات المساهمة في قياس وتحديث المؤشرات، وإعداد نموذج حوكمة طبقاً لأفضل الممارسات العالمية لتفعيل الشراكة مع الجهات ذات العلاقة. </p>
            </div>
            <div class="col col-xs-12 col-md-4 mg-b-15">
              <p class="tx-40 tx-bold tx-secondary">03</p>
              <h3>تهيئة البنية التحتية  </h3>
              <div class="divider mg-y-20"></div>
              <p>تهيئة البنية التحتية المناسبة لإنشاء شبكة معلوماتية بين المرصد الحضري الوطني والمراصد الحضرية المحلية والجهات ذات العلاقة لتعزيز سياسات التنمية الحضرية.</p>
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

export default {
  name: "OurVision",
  components: {BannerHeading, PageHeader, PageFooter},

}
</script>

<style scoped>

</style>
