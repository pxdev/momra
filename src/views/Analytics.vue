<template>
  <section class="analytics">

    <page-header></page-header>

    <main class="container pages pd-y-30 d-flex">

      <side-navigation></side-navigation>

      <div class="pages-content">
        <div class="pages-data">

        <div class="pages-heading mg-b-20 d-flex align-items-center justify-content-between">
          <div class="heading-start d-flex align-items-center">
            <div class="pd-5 heading-icon">
               <svg class="svg-ico"
                    :width="sectors[defaultSectorCounter].iconWidth"
                    :height="sectors[sectorCounter].iconHeight" >
                 <use class="svg-ico-use"
                      :xlink:href="`icons/icon.symbol.svg#${ sectors[sectorCounter].iconId }`"></use>
              </svg>
            </div>
            <div class="pd-x-15">
              <h1 class="mg-b-10 d-flex align-items-center">
                <span>{{ sectors[indicatorCounter[0]].children[indicatorCounter[1]].label }}</span>
                <i class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title" data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
              </h1>
              <p class="op-8">
                مثال نص عشوائى
               </p>
            </div>
          </div>
          <div class="heading-end pd-y-10">
            <p class="tx-12 mg-b-5">مصدر البيانات </p>
            <h3>الهيئة العامة للإحصاء</h3>
          </div>
        </div>
        <!-- / page heading -->
        <div class="quick-stats mg-b-15 card shadow rounded justify-content-between flex-wrap d-flex">
          <div class="number-stats pd-y-15  d-flex align-items-center">
            <div class="stats-box flex-fill">
              <h2 class="mg-b-10">5.68</h2>
              <p class="tx-12"><span>الفترة الحالية</span><span class="pd-x-5">-</span><span
                  class="tx-primary tx-number">2020</span></p>
            </div>
            <div class="stats-box flex-fill">
              <h2 class="mg-b-10">5.68</h2>
              <p class="tx-12"><span>الفترة السابقة</span><span class="pd-x-5">-</span><span
                  class="tx-primary tx-number">2020</span></p>
            </div>
            <div class="stats-box flex-fill">
              <h2 class="mg-b-10 d-flex align-items-center">5.68 <span
                  class="change-rate tx-number pd-x-10 tx-16 tx-secondary"><i
                  class="ri-arrow-right-up-line "></i>+1%</span></h2>
              <p class="tx-12"><span>مقارنة</span><span class="pd-x-5">-</span><span class="tx-primary tx-number">2019 & 2020</span>
              </p>
            </div>
          </div>
          <div class="divider flex-grow-0 bd-l bd-2"></div>
          <div class="indicator-info">
            <h4 class="mg-b-10 d-flex align-items-center">بيانات المؤشر
              <i class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title"
                 data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
            </h4>
            <drag-slider></drag-slider>
          </div>
        </div>
        <!-- / quick-stats -->
        <div class="state-widgets cols-2 d-flex align-items-stretch">
          <div class="card mg-b-15 shadow rounded">
            <div class="d-flex justify-content-between flex-wrap align-items-center">
              <div class="widget-heading mg-b-15">
                <h4 class="mg-b-5 d-flex align-items-center">متوسط حجم الأسرة<i
                    class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title"
                    data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
                </h4>
                <p class="op-8 tx-12">التغير السنوي في أداء المدن حسب المؤشر</p>
              </div>
              <div class="toggle-switch">
                <a href="#" @click.prevent="activeToggle=1" :class="{'active' : activeToggle==1}">المناطق</a>
                <a href="#" @click.prevent="activeToggle=2" :class="{'active' : activeToggle==2}">مدن</a>
              </div>
            </div>

            <xy-chart class="xy-chart" chart-id="xyChart1"></xy-chart>

          </div>
          <div class="card mg-b-15 shadow rounded">
            <div class="widget-heading mg-b-15">
              <h4 class="mg-b-5 d-flex align-items-center">المقارنات الدولية <i
                  class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title"
                  data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
              </h4>
              <p class="op-8 tx-12">يُعرف أيضًا أحيانًا بالنص الوهمي المستخدم في تصميمات الويب</p>
            </div>

            <xy-chart class="xy-chart" chart-id="xyChart2"></xy-chart>

          </div>
        </div>
        <div class="state-widgets cols-2 d-flex align-items-stretch">
          <div class="card d-flex flex-column justify-content-between mg-b-15 shadow rounded">

            <div class="d-flex justify-content-between flex-wrap align-items-center">
            <div class="widget-heading mg-b-15">
              <h4 class="mg-b-5 d-flex align-items-center">منهجية الحساب <i
                  class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title"
                  data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
              </h4>
              <p class="op-8 tx-12">المعلومات تعرض حسب توفر البيانات</p>
            </div>
              <a href="files/desc_data.pdf" target="_blank" class="desc-data"><span class="pd-x-10">البيانات الوصفية</span><i class="ri-download-2-line"></i></a>
            </div>


<!--           <no-data></no-data>-->
            <div>
              <p class="mg-b-40">يتم حساب هذا المؤشر ، X ، على أنه تلخيص بسيط للمؤشرات ذات الصلة (حالات الوفاة ، والمفقودين ، والمتضررين)
                من قواعد البيانات الوطنية المتعلقة بالخسائر الناجمة عن الكوارث مقسومة على إجمالي بيانات السكان (من
                التعدادات الوطنية للهيئة العامة للإحصاء ، أو معلومات البنك الدولي أو اللجنة الإحصائية للأمم المتحدة).X =
                ((A_2+A_3+B_1)) مقسومة على عدد السكان) ويضرب الحاصل في 100,000حيث:X: عدد الوفيات والأشخاص المفقودين
                والأشخاص المتضررين مباشرة بسبب الكوارث لكل 100,000 نسمة:A2 عدد الوفيات بسبب الكوارث:A3 عدد المفقودين بسبب
                الكوارث:B1 عدد الأشخاص المتأثرين بشكل مباشر بسبب الكوارث</p>
              <div
                  class="bg-gray calc-legend shadow bd rounded mg-t-15 pd-15 d-flex align-items-center justify-content-between">
                <div class="meta-data pd-x-20 flex-fill">
                  <p class="tx-12">وحدة القياس</p>
                  <p class="tx-20 tx-bold tx-primary">عدد</p>
                </div>
                <div class="meta-data pd-x-20 bd-l bd-r flex-fill">
                  <p class="tx-12">الدورية</p>
                  <p class="tx-20 tx-bold tx-primary">سنوي</p>
                </div>
                <div class="meta-data pd-x-20 flex-fill">
                  <p class="tx-12">آخر تحديث</p>
                  <p class="tx-20 tx-bold tx-primary">12 فبراير 2022</p>
                </div>
              </div>
            </div>


          </div>
          <div class="card mg-b-15 shadow rounded">
            <div class="widget-heading">
              <h4 class="mg-b-5 d-flex align-items-center">المؤشر على مستوى المناطق <i
                  class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title"
                  data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i>
              </h4>
              <p class="op-8 tx-12">يُعرف أيضًا أحيانًا بالنص الوهمي المستخدم في تصميمات الويب</p>
            </div>

            <map-chart chart-id="chartMap"></map-chart>

          </div>
        </div>
        <div class="divider bd-b bd-2 mg-t-20 mg-b-30"></div>
        <div class="state-widgets cols-3 d-flex align-items-stretch">
          <div class="card mg-b-15 shadow rounded">
            <div class="widget-heading mg-b-15">
              <h4 class="mg-b-5 tx-16 d-flex align-items-center">المؤشرات ذات الصلة<i class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title" data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i></h4>
            </div>
            <bar-chart class="related-indicator" chart-id="chart01"></bar-chart>
          </div>
          <div class="card mg-b-15 shadow rounded">
            <div class="widget-heading mg-b-15">
              <h4 class="mg-b-5 tx-16 d-flex align-items-center">المؤشرات ذات الصلة<i class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title" data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i></h4>
            </div>
            <bar-chart class="related-indicator" chart-id="chart02"></bar-chart>
          </div>
          <div class="card mg-b-15 shadow rounded">
            <div class="widget-heading mg-b-15">
              <h4 class="mg-b-5 tx-16 d-flex align-items-center">المؤشرات ذات الصلة<i class="ri-question-line tx-18 tx-default tx-normal mg-x-5 hint data-title" data-title="كما تصميمات الطباعة أو الرسوم أو الويب"></i></h4>
            </div>
            <bar-chart class="related-indicator" chart-id="chart03"></bar-chart>
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
import SideNavigation from "@/components/SideNavigation";
import DragSlider from "@/components/DragSlider";
import BarChart from "@/components/Charts/BarChart";
import MapChart from "@/components/Charts/MapChart";
import XyChart from "@/components/Charts/XyChart";
import sectors from "@/json/sectors.json";
import PageFooter from "@/components/PageFooter";

export default {
  components: {XyChart, MapChart, BarChart, DragSlider, SideNavigation, PageHeader, PageFooter},
  data() {
    return {
      activeToggle: 1,
      sectors: sectors,

    }
  },

  methods:{


  },

  computed:{
    defaultSectorCounter(){
      return this.$store.state.defaultSectorCounter;
    },
    sectorCounter(){
      return this.$store.state.sectorCounter || this.$store.state.defaultSectorCounter;
    },
    activeRegion(){
      return this.$store.state.activeRegion;
    },

    indicatorCounter(){
      return this.$store.state.indicatorCounter;
    }

  },



}
</script>

<style lang="css">

</style>
