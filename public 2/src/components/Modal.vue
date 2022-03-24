<template>
  <transition name="modal-fade">
  <div class="modal">
      <div class="modal-dialog" :class="size" >
        <div class="modal-content">

          <div class="modal-header d-flex justify-content-between align-items-center">
            <slot name="modal-header"><h3>{{title}} <span class="op-7 tx-sm tx-normal">{{subtitle}}</span></h3> </slot>
            <a href="#" @click.prevent="close" class="close-btn"><i class="abjd-close"></i></a>
          </div>

          <div class="modal-body pd-y-30">
            <slot>

            </slot>
          </div>

          <div class="modal-footer d-flex align-items-center justify-content-end">
            <button v-if="!disableCancel" @click.prevent="close" class="btn lg btn-primary-outline mg-x-10 pd-x-30">Cancel</button>
            <slot name="modal-footer"></slot>
          </div>
        </div>
      </div>
      <div class="modal-backdrop" @click.prevent="close"></div>
    </div>
  </transition>
 </template>

<script>
export default {
  name: "Modal",
  props: ['size', 'title', 'subtitle' , 'disableCancel'],
  data() {
    return {

    }
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },

}
</script>

