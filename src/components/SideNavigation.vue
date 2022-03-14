<template>
  <aside class="side-bar">


    <nav class="side-nav card shadow rounded">

      <div class="quick-search mg-y-20">
        <i class="ri-search-line search-ico"></i>
        <treeselect placeholder="بحث عن المؤشرات" v-model="value" :options="options"/>
      </div>
      <ul>
        <li>
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>
            <span class="pd-x-20">السكان والخصائص السكانية</span></a>
        </li>
        <li>
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>
            <span class="pd-x-20">إدارة الكوارث</span></a>
        </li>
        <li>
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>
            <span class="pd-x-20">السكان والخصائص السكانية</span>
          </a>
        </li>
        <li>
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>
            <span class="pd-x-20">السكان والخصائص السكانية</span></a>
        </li>
        <li class="active">
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>

            <span class="pd-x-20">السكان والخصائص السكانية</span></a>
          <ul>
            <li><a href="#">إجمالي عدد الأسر</a></li>
            <li class="active"><a href="#">متوسط حجم الأسرة</a></li>
            <li><a href="#">متوسط دخل الأسرة</a></li>
            <li><a href="#">معدل بطالة الشباب</a></li>
            <li><a href="#">متوسط العمر المتوقع عند الولادة</a></li>
            <li><a href="#">نصيب الفرد من الناتج المحلي</a></li>
          </ul>
        </li>
        <li>
          <a href="#" class="side-nav-link">
            <svg class="svg-ico" width="42.053" height="39.501" viewBox="0 0 42.022 38.989">
              <use class="svg-ico-use" xlink:href="icons/icon.symbol.svg#conference-ico"></use>
            </svg>

            <span class="pd-x-20">السكان والخصائص السكانية</span></a>
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
      // define the default value
      value: null,
      // define options
      options: [{
        id: 'a',
        label: 'a',
        children: [{
          id: 'aa',
          label: 'aa',
        }, {
          id: 'ab',
          label: 'ab',
        }],
      }, {
        id: 'b',
        label: 'b',
      }, {
        id: 'c',
        label: 'c',
      }],
    }
  }
}
</script>

<style scoped>

</style>
