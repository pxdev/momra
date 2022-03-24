<template>
  <div class="footer">

    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="footer-start mg-b-30">
            <router-link to="/" class="d-flex mg-b-35"><img src="/footer_logo.png" alt=""></router-link>
            <div class="links">
              <router-link to="/" class="d-flex align-items-center tx-16">
                <i class="ri-mail-line tx-secondary tx-24"></i>
                <span class="phone-number pd-x-10 tx-bold">hadry@momrah.gov.sa</span>
              </router-link>
            </div>
          </div>
          <div class="footer-end d-flex flex-wrap">

            <div class="footer-links">
              <div class="footer-heading">
                <h3>عن المرصد</h3>
              </div>
              <router-link to="/brief" class="menu-item">نبذة عن المرصد</router-link>
              <router-link to="/our-vision" class="menu-item">الرؤية والرسالة</router-link>
              <router-link to="/regulation" class="menu-item">اللائحة التنظيمية</router-link>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>أعمالنا الحضرية</h3>
              </div>
              <router-link to="/guidelines" class="menu-item">الأدلة الاسترشادية للمراصد المحلية</router-link>
              <router-link to="/experiences" class="menu-item">التجارب الدولية والمحلية</router-link>
              <router-link to="/urban-surveys" class="menu-item">الاستطلاعات الحضرية</router-link>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>المؤشرات الحضرية</h3>
              </div>
              <a href="#" class="menu-item" @click.prevent="exploreSectorStats(0)">المنصة التحليلية </a>
              <a href="#" class="menu-item" @click.prevent="exploreSector(0)">أداء القطاعات الحضرية </a>
              <a href="#" class="menu-item" @click.prevent="setActiveRegionID(1)">أداء المناطق والمدن والمحافظات</a>
              <router-link to="/interactive-map" class="menu-item">الخارطة التفاعلية</router-link>
              <router-link to="/data-importance-calculator" class="menu-item">حاسبة أهمية البيانات</router-link>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3><router-link to="/urban-studies">دراسات حضرية</router-link></h3>
              </div>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3><router-link to="/news">الأخبار الحضرية</router-link></h3>
              </div>
            </div>

          </div>
        </div>
        <div class="footer-bar d-flex flex-wrap align-items-center justify-content-between">
          <p class="op-7 tx-12">جميع الحقوق محفوظة – المرصد الحضري الوطني - وزارة الشؤون البلدية والقروية والإسكان © 2022</p>

          <div class="social d-flex align-items-center">
            <router-link to="/" class="pd-x-5"> <i class="ri-twitter-line"></i> </router-link>
            <router-link to="/" class="pd-x-5"> <i class="ri-facebook-fill"></i> </router-link>
            <router-link to="/" class="pd-x-5"><i class="ri-instagram-line"></i></router-link>
            <router-link to="/" class="pd-x-5"><i class="ri-youtube-line"></i></router-link>
            <router-link to="/" class="pd-x-5"> <i class="ri-snapchat-line"></i> </router-link>
          </div>


          <div class="footer-bar-links tx-12 d-flex op-6">
            <router-link to="/privacy">سياسة الخصوصية</router-link>
            <span class="divider bd-l mg-x-10"></span>
            <router-link to="/terms">سياسة الاستخدام</router-link>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",

  methods:{
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

  }

}
</script>

<style scoped>

</style>
