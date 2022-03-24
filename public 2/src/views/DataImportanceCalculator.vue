<template>
  <section class="interactive-map">
    <page-header></page-header>

    <banner-heading banner-height="325" image-url="/regions/regions/aljouf.jpg">
      <div class="news-heading-content">
        <p>المنصة التحليلية</p>
        <h2 class="tx-40">حاسبة أهمية البيانات</h2>
        <p>كما يُعرف أحيانًا ، هو نص وهمي يستخدم في تصميمات الطباعة أو الرسوم أو الويب</p>

      </div>
    </banner-heading>


    <main class="pages pd-y-40 rounded container">

      <under-constructions></under-constructions>

    </main>

    <page-footer></page-footer>


  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import BannerHeading from "@/components/BannerHeading";
import PageFooter from "@/components/PageFooter";
import UnderConstructions from "../components/UnderConstructions";

export default {
  name: "DataImportanceCalculator",
  components: {UnderConstructions, BannerHeading, PageHeader, PageFooter},

}
</script>

<style scoped>

</style>
