<template>
  <section class="contact">
    <page-header></page-header>


    <banner-heading banner-height="385" image-url="cms/contact.jpg">
      <h1 class="tx-40">اتصل بنا</h1>
      <p class="tx-18">نحن نرحب دائماً بتعاونك معنا ومشاركتنا كل مقترحاتك.</p>

      <div class="social d-flex align-items-center">
        <a href="#"> <i class="ri-linkedin-box-fill"></i> </a>
        <a href="#"> <i class="ri-youtube-line"></i> </a>
        <a href="#"> <i class="ri-twitter-fill"></i> </a>
       </div>


    </banner-heading>

    <over-bar>

    </over-bar>
    <!-- over bar -->


    <main class="container pages pd-y-40 rounded">

    <div class="card rounded contact-card bd shadow pd-30">
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
          <div class="d-flex align-items-center flex-wrap">
              <div class="form-group">
            <label>أدخل الرموز التي في الصورة<span class="star">*</span></label>
            <input type="text" class="form-control lg" placeholder="">
          </div>
              <div class="form-group flex-fill  captcha-img pd-x-30 mg-t-20">
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
