<template>
  <div class="footer">
    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="footer-start mg-b-30">
            <router-link to="/" class="d-flex mg-b-35"><img src="/footer_logo.png" alt=""></router-link>
            <div class="links">
              <a href="#" class="d-flex align-items-center tx-16">
                <i class="ri-mail-line tx-secondary tx-24"></i>
                <span class="phone-number pd-x-10 tx-bold">hadry@momrah.gov.sa</span>
              </a>
            </div>
          </div>
          <div class="footer-end d-flex flex-wrap">

            <div class="footer-links">
              <div class="footer-heading">
                <h3>عن المرصد</h3>
              </div>
              <a href="#">عن المرصد</a>
              <a href="#">الرؤية والرسالة</a>
              <a href="#"> اللائحة التنظيمية</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>أعمالنا الحضرية</h3>
              </div>
              <a href="#">الأدلة الاسترشادية </a>
              <a href="#">التجارب الدولية والمحلية</a>
              <a href="#"> الاستطلاعات الحضرية</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>المؤشرات الحضرية</h3>
              </div>
              <a href="#">أداء القطاعات الحضرية</a>
              <a href="#">أداء المناطق والمدن والمحافظات</a>
              <a href="#"> الخريطة التفاعلية</a>
              <a href="#"> حاسبة أهمية البيانات</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>دراسات حضرية</h3>
              </div>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>الأخبار الحضرية</h3>
              </div>
            </div>

          </div>
        </div>
        <div class="footer-bar d-flex align-items-center justify-content-between">
          <p class="op-7 tx-12">جميع الحقوق محفوظة – المرصد الحضري الوطني - وزارة الشؤون البلدية والقروية والإسكان © 2022</p>

          <div class="social d-flex align-items-center">
            <a href="#" class="pd-x-5"> <i class="ri-twitter-line"></i> </a>
            <a href="#" class="pd-x-5"> <i class="ri-facebook-fill"></i> </a>
            <a href="#" class="pd-x-5"><i class="ri-instagram-line"></i></a>
            <a href="#" class="pd-x-5"><i class="ri-youtube-line"></i></a>
            <a href="#" class="pd-x-5"> <i class="ri-snapchat-line"></i> </a>
          </div>


          <div class="footer-bar-links tx-12 d-flex op-6">
            <a href="#">سياسة الخصوصية</a>
            <span class="divider bd-l mg-x-10"></span>
            <a href="#">سياسة الاستخدام</a>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter"
}
</script>

<style scoped>

</style>
