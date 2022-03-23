<template>
  <section class="contact">
    <page-header></page-header>

    <banner-heading banner-height="385" image-url="https://placeimg.com/1000/920/tech">
      <h1 class="tx-40">اتصل بنا</h1>
      <p class="tx-18">نحن نرحب دائماً بتعاونك معنا ومشاركتنا كل مقترحاتك. يمكنك الاتصال على أي من <br>الأرقام المذكورة أدناه وستسعدنا خدمتك:</p>
      <div class="social d-flex align-items-center">
        <a href="#"> <i class="ri-twitter-line"></i> </a>
        <a href="#"> <i class="ri-facebook-fill"></i> </a>
        <a href="#"><i class="ri-instagram-line"></i></a>
        <a href="#"><i class="ri-youtube-line"></i></a>
        <a href="#"> <i class="ri-snapchat-line"></i> </a>
      </div>
    </banner-heading>

    <over-bar>
      <div class="d-flex align-items-center flex-wrap">
        <h3 class="pd-15 tx-24">أرقام تهمك</h3>
        <div class="d-flex pd-y-10 justify-content-between flex-grow-1 contact-widgets">
          <div class="numbers-box">
            <h5 class="tx-30 tx-primary">199090</h5>
            <p class="tx-14">سكني</p>
          </div>
          <div class="divider flex-grow-0 op-5 bd-l bd-2"></div>
          <div class="numbers-box">
            <h5 class="tx-30 tx-primary">940</h5>
            <p class="tx-14">بلاغات البلدية</p>
          </div>
          <div class="divider flex-grow-0 op-5 bd-l bd-2"></div>
          <div class="numbers-box">
            <h5 class="tx-30 tx-primary">500103</h5>
            <p class="tx-14">رسائل نصية</p>
          </div>
          <div class="divider flex-grow-0 op-5 bd-l bd-2"></div>
          <div class="numbers-box">
            <h5 class="tx-30 tx-primary">955</h5>
            <p class="tx-14">صندوق البريد</p>
          </div>
          <div class="divider flex-grow-0 op-5 bd-l bd-2"></div>
          <div class="numbers-box">
            <h5 class="tx-30 tx-primary">11136</h5>
            <p class="tx-14">الرمز البريدي</p>
          </div>
        </div>
      </div>
    </over-bar>
     <!-- over bar -->

    <main class="container pages pd-y-40 rounded">

    <div class="card rounded bd shadow pd-30">
      <h2 class="mg-b-20">نموذج التواصل الالكتروني</h2>

      <div class="row contact-fields">
        <div class="col">
          <div class="form-group">
            <label>الاسم<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="اسمك الكامل">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>رقم الهوية/الإقامة/خليجي<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="هويتك / إقامتك / رقم خليجي">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>البريد الإلكتروني<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="عنوان بريدك الإلكتروني">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>رقم الجوال<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="رقم هاتفك">
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>نوع المراسلة<span class="star">*</span></label>
             <drop-down title="" class="form-dropdown lg" toggle-arrow="true">
               <a href="#" class="menu-item">شكوى</a>
               <a href="#" class="menu-item">شكوى</a>
               <a href="#" class="menu-item">شكوى</a>
               <a href="#" class="menu-item">شكوى</a>
             </drop-down>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label>عنوان الرسالة<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="عنوان الرسالة">
          </div>
        </div>
        <div class="col col-full ">
          <div class="form-group">
            <label>الرسالة<span class="star">*</span></label>
            <textarea name="" class="form-textarea lg" placeholder="رسالتك…" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div class="col col-full ">
          <div class="d-flex align-items-center">
              <div class="form-group">
            <label>أدخل الرموز التي في الصورة<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="">
          </div>
              <div class="form-group  captcha-img pd-x-30 mg-t-20">
                <img src="/cms/captcha.png" alt="">
              </div>
          </div>
        </div>

      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-secondary lg pd-x-60">إرسال</button>
      </div>

    </div>

    </main>

    <page-footer></page-footer>


  </section>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import BannerHeading from "@/components/BannerHeading";
import OverBar from "@/components/OverBar";
import PageFooter from "@/components/PageFooter";
import DropDown from "../components/DropDown";
export default {
  name: "Contact",
  components: {DropDown, OverBar, BannerHeading, PageHeader, PageFooter}
}
</script>

<style scoped>

</style>
