<template>
  <div class="footer">
    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
          <div class="footer-start mg-b-30">
            <router-link to="/" class="d-flex mg-b-25"><img src="/footer_logo.png" alt=""></router-link>
            <div class="links">
              <a href="#" class="d-flex align-items-center tx-16 mg-b-5"><i class="ri-phone-line tx-secondary tx-24"></i><span class="phone-number pd-x-10 tx-bold">+966 11 4569999</span></a>
              <a href="#" class="d-flex align-items-center tx-16"><i class="ri-mail-line tx-secondary tx-24"></i><span class="phone-number pd-x-10 tx-bold">infocs@momrah.gov.sa</span></a>
            </div>
          </div>
          <div class="footer-end d-flex flex-wrap">

            <div class="footer-links">
              <div class="footer-heading">
                <h3>عن المرصد</h3>
              </div>
              <a href="#">حول المرصد”يتضمن فيديو تعريفي</a>
              <a href="#">الرؤية والرسالة وتشمل الأهداف</a>
              <a href="#"> اللائحة</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>عملنا الحضري</h3>
              </div>
              <a href="#">إرشادات للمراصد المحلية</a>
              <a href="#">الخبرات الدولية والمحلية</a>
              <a href="#"> المسوحات الحضرية</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>أداء القطاعات الحضرية</h3>
              </div>
              <a href="#">مجالات الأداء</a>
              <a href="#">الخريطة التفاعلية</a>
              <a href="#"> حاسبة أهمية البيانات</a>
            </div>
            <div class="footer-links">
              <div class="footer-heading">
                <h3>الدراسات الحضرية</h3>
              </div>
              <a href="#">أخبار حضرية</a>
              <a href="#">الأخبار الحضرية المحلية</a>
              <a href="#"> الأخبار الحضرية الدولية</a>
            </div>

          </div>
        </div>
        <div class="footer-bar d-flex align-items-center justify-content-between">
          <p class="op-7 tx-12">جميع الحقوق محفوظة – وزارة الشؤون البلدية والقروية والإسكان © 2022</p>

          <div class="social d-flex align-items-center">
            <a href="#" class="pd-x-5"> <i class="ri-twitter-line"></i> </a>
            <a href="#" class="pd-x-5"> <i class="ri-facebook-fill"></i> </a>
            <a href="#" class="pd-x-5"><i class="ri-instagram-line"></i></a>
            <a href="#" class="pd-x-5"><i class="ri-youtube-line"></i></a>
            <a href="#" class="pd-x-5"> <i class="ri-snapchat-line"></i> </a>
          </div>


          <div class="footer-bar-links tx-12 d-flex op-6">
            <a href="#">سياسة خاصة</a>
            <span class="divider bd-l mg-x-10"></span>
            <a href="#">سياسة الاستخدام</a>
            <span class="divider bd-l mg-x-10"></span>
            <a href="#">خريطة الموقع</a>
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
