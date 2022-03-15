<template>
  <aside class="side-bar">

    <nav class="side-nav card shadow rounded">

      <div class="quick-search mg-y-20">
        <i class="ri-search-line search-ico"></i>
        <treeselect placeholder="بحث عن المؤشرات" v-model="value" :options="sectors"/>
      </div>
      <ul>
        <li :class="{'active' : activeSector == index }" v-for="(sector, index) in sectors" :key="index + '_sector'">
          <a href="#" class="side-nav-link" @click.prevent="toggleNav(index)" >
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" :xlink:href="`icons/icon.symbol.svg#${sector.iconId}`"></use>
            </svg>
            <span class="pd-x-20">{{ sector.label }}</span></a>
          <ul v-if="sector.children.length && activeSector == index  " >
            <li :class="{'active' : indicator.isActive==true }" v-for="(indicator, index) in sector.children" :key="index + '_indicator'">
              <a href="#">{{ indicator.label }}</a>
            </li>
          </ul>
        </li>
      </ul>

    </nav>
  </aside>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: "SideNavigation",
  components: {Treeselect},
  data() {
    return {
      activeSector : 0,
      value: null,
      sectors: [
        {
          id: '01',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: ' السكان والخصائص السكانية ',
          children: [
            {
              id: ' 01-01',
              label: '  عدد الأسر ',
              isActive: true,
            },
            {
              id: '01-02',
              label: ' المعدل السنوي  الأسر الجديدة ',
              isActive: false,
            }
          ],
        },
        {
          id: ' 02',
          iconId: "conference-ico",
          isActive: true,
          isOpened: true,
          label: 'المياه والبيئة',
          children: [
            {
              id: ' 02-01 ',
              label: '  تركيز ثاني أكسيد الكبريت  ',
              isActive: true,
            },
            {
              id: ' 02-02 ',
              label: '  عدد محطات الرصد والمراقبة  ',
              isActive: false,
            },
            {
              id: ' 02-03 ',
              label: '  نسبة زمن الاستجابة  دقائق فأقل  ',
              isActive: false,
            },

            {
              id: '  02-04 ',
              label: '   زمن الاستجابة  دقائق فأقل  ',
              isActive: false,
            },
          ],
        },
        {
          id: ' 03 ',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: '  إدارة الكوارث  ',
          children: [
            {
              id: ' 03-01 ',
              label: '  نسبة زمن الاستجابة للحوادث خلال سبع دقائق فأقل  ',
              isActive: false,
            },
            {
              id: '03-02',
              label: ' المعدل السنوي الأسر الجديدة ',
              isActive: false,
            }
          ],
        },
        {
          id: ' 04',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: '  الشؤون الإسلامية والحج والعمرة ',
          children: []
        },
        {
          id: '05',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الأمن والسلامة',
          children: []
        },
        {
          id: '06',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الايواء والمساكن',
          children: []
        },
        {
          id: '07',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'البنية التحتية',
          children: []
        },
        {
          id: '08',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الطاقة',
          children: []
        },
        {
          id: '09',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الحوكمة والتشريعات',
          children: []
        },
        {
          id: '10',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الثقافة والإعلام',
          children: []
        },
        {
          id: '11',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'الصحة',
          children: []
        },
        {
          id: '12',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'النمو الاقتصادي',
          children: []
        },
        {
          id: '13',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'التعليم',
          children: []
        },
        {
          id: '14',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'العمل والحماية الاجتماعية',
          children: []
        },
        {
          id: '15',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'النسيج العمراني',
          children: []
        },
        {
          id: '16',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'تمويل البلديات',
          children: []
        },
        {
          id: '17',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'السياحة والترفيه والرياضة',
          children: []
        },
      ],
    }
  }
  ,
  methods:{
    toggleNav(index){
      this.activeSector = index
    }
  }
}
</script>

<style scoped>

</style>
