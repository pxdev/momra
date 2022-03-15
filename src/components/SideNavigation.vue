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
          id: 'السكان والخصائص السكانية',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: ' السكان والخصائص السكانية ',
          children: [
            {
              id: ' عدد الأسر',
              label: '  عدد الأسر ',
              isActive: true,
            },
            {
              id: 'المعدل السنوي  الأسر الجديدة',
              label: ' المعدل السنوي  الأسر الجديدة ',
              isActive: false,
            }
          ],
        },
        {
          id: ' المياه والبيئة',
          iconId: "conference-ico",
          isActive: true,
          isOpened: true,
          label: 'المياه والبيئة',
          children: [
            {
              id: ' تركيز ثاني أكسيد الكبريت ',
              label: '  تركيز ثاني أكسيد الكبريت  ',
              isActive: true,
            },
            {
              id: ' عدد محطات الرصد والمراقبة ',
              label: '  عدد محطات الرصد والمراقبة  ',
              isActive: false,
            },
            {
              id: ' نسبة زمن الاستجابة  دقائق فأقل ',
              label: '  نسبة زمن الاستجابة  دقائق فأقل  ',
              isActive: false,
            },

            {
              id: '  زمن الاستجابة  دقائق فأقل ',
              label: '   زمن الاستجابة  دقائق فأقل  ',
              isActive: false,
            },
          ],
        },
        {
          id: ' إدارة الكوارث ',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: '  إدارة الكوارث  ',
          children: [
            {
              id: ' نسبة زمن الاستجابة للحوادث خلال سبع دقائق فأقل ',
              label: '  نسبة زمن الاستجابة للحوادث خلال سبع دقائق فأقل  ',
              isActive: false,
            },
            {
              id: 'المعدل السنوي الأسر الجديدة',
              label: ' المعدل السنوي الأسر الجديدة ',
              isActive: false,
            }
          ],
        },
        {
          id: ' الايواء والمساكن ',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: '  الايواء والمساكن  ',
          children: []
        },
        {
          id: 'البنية التحتية',
          iconId: "conference-ico",
          isActive: false,
          isOpened: false,
          label: 'البنية التحتية',
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
