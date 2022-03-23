<template>
  <header class="fixed" id="header">

    <div class="pre-header">
      <div class="container pd-y-5 d-flex justify-content-between align-items-center">
        <div class="toll-free">
          <p class="d-flex align-items-center">
            <i class="ri-phone-line"></i><span class="pd-x-5">الدعم المباشر</span><span class="pd-x-5 phone-number">92000 01234</span>
          </p>
        </div>
        <div class="social d-flex align-items-center">
          <a href="#"> <i class="ri-twitter-line"></i> </a>
          <a href="#"> <i class="ri-facebook-fill"></i> </a>
          <a href="#"> <i class="ri-snapchat-line"></i> </a>
          <a href="#"><i class="ri-instagram-line"></i></a>
          <a href="#"><i class="ri-youtube-line"></i></a>
        </div>
      </div>
    </div>
    <!-- pre-header -->

    <div class="container page-header  d-flex justify-content-between align-items-center">
      <router-link to="/" class="logo"><img src="/logo.svg" alt=""></router-link>
      <div class="d-flex left-heading">
        <nav v-show="mobileNav">

          <div class="d-flex justify-content-between nav-heading" v-if="isMobile">
            <h5>القائمة الرئيسية</h5>
            <a href="#" @click.prevent="toggleMobileNav"><i class="ri-close-line tx-22"></i></a>
          </div>
          <ul>
            <li>
              <router-link class="parent-link" to="/">الرئيسية</router-link>
            </li>
            <li>
              <drop-down class="parent-link" title="عن المرصد" width="200" toggle-arrow="true">
                <router-link to="/brief" class="menu-item">نبذة عن المرصد</router-link>
                <router-link to="/our-vision" class="menu-item">الرؤية والرسالة</router-link>
                <router-link to="/regulation" class="menu-item">اللائحة التنظيمية</router-link>
              </drop-down>
            </li>
            <li>
              <drop-down class="parent-link" title="اعمالنا الحضرية" width="250" toggle-arrow="true">
                <router-link to="/guidelines" class="menu-item">الأدلة الاسترشادية للمراصد المحلية</router-link>
                <router-link to="/experiences" class="menu-item">التجارب الدولية والمحلية</router-link>
                <router-link to="/urban-surveys" class="menu-item">الاستطلاعات الحضرية</router-link>
              </drop-down>
            </li>
            <li>
              <drop-down class="parent-link" title="المؤشرات الحضرية" width="250" toggle-arrow="true">

                <a href="#" class="menu-item" @click.prevent="exploreSectorStats(0)">المنصة التحليلية </a>
                <a href="#" class="menu-item" @click.prevent="exploreSector(0)">أداء القطاعات الحضرية </a>
                <a href="#" class="menu-item" @click.prevent="setActiveRegionID('SA-01')">أداء المناطق والمدن
                  والمحافظات</a>
                <router-link to="/interactive-map" class="menu-item">الخارطة التفاعلية</router-link>
                <router-link to="/data-importance-calculator" class="menu-item">حاسبة أهمية البيانات</router-link>
              </drop-down>
            </li>
            <li>
              <router-link to="/urban-studies" class="parent-link">دراسات حضرية</router-link>
            </li>
            <li>
              <router-link to="/news" class="parent-link">الأخبار الحضرية</router-link>
            </li>
            <li>
              <router-link to="/contact" class="parent-link">تواصل معنا</router-link>
            </li>


          </ul>
        </nav>
        <div v-if="loggedIn" class="divider bd-l mg-x-10"></div>
        <div class="d-flex">

          <div v-if="loggedIn" class="d-flex align-items-center user-navigation mg-r-10">
            <avatar class="rounded-circle" size="35" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"></avatar>
            <drop-down class="user-profile mg-x-10 tx-secondary" title="عبد الله" width="200" toggle-arrow="true">
              <a href="#" class="menu-item">الملف الشخصى</a>
              <a href="#" class="menu-item" @click.prevent="loggedIn=false">تسجيل الخروج</a>
            </drop-down>
          </div>
          <a v-else href="#" class="btn  btn-secondary" @click.prevent="loggedIn=true">تسجيل الدخول</a>


          <div class="mobile-nav">
            <a href="#" @click.prevent="toggleMobileNav">
              <span class="mobile-nav-line"></span>
              <span class="mobile-nav-line"></span>
              <span class="mobile-nav-line"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="backdrop" @click.prevent="toggleMobileNav" v-show="isMobile && mobileNav"></div>
    </div>
  </header>
</template>

<script>
import DropDown from "./DropDown";
import Avatar from "./Avatar";

export default {
  name: "PageHeader",
  components: {Avatar, DropDown},
  data() {
    return {
      loggedIn: true,
      mobileNav: true,
      isMobile: false
    }
  },
  methods: {

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1023) {
        this.mobileNav = false;
        this.isMobile = true;

      } else {
        this.isMobile = false;
      }

    },


    setActiveRegionID(data) {

      if (this.$route.name == 'Explore') {
        return false
      } else {
        this.$store.state.activeRegionId = data;
        this.$store.state.sectorCounter = null;
        this.$router.push("/explore");
      }

    },


    exploreSector(sector) {
      this.$store.state.sectorCounter = sector;
      this.$store.state.activeRegion = null;
      this.$router.push("/explore");
    },

    exploreSectorStats(sector) {
      this.$store.state.sectorCounter = sector;
      this.$store.state.activeRegion = null;
      this.$router.push("/analytics");
    },


  },
  computed: {},

  created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },


}
</script>



