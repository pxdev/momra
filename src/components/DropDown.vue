<template>
  <div class="dropdown" :class="{shown: state , type}">

    <a href="#" @click.prevent="toggleDropdown" :class="{shown: state}"
       class="dropdown-btn justify-content-between d-flex align-items-center">
      <i v-if="isKebabNav" class="abjd-vertical_dots pd-15 d-block"></i>
      <span v-else class="pd-x-5">
        <slot name="title">{{ title }}</slot>
      </span>
      <svg class="toggle-arrow" v-if="this.toggleArrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/>
      </svg>
    </a>

    <div :style="{marginLeft: -width/2+'px', width: width+'px', height: height+'px'}" class="dropdown-menu"
         :class="{'fixed' : height , 'reverse' : reverse }" v-if="state">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDown",
  props: ['toggleArrow', 'width', 'title', 'type', 'height', 'reverse', 'isKebabNav'],
  data() {
    return {
      state: false
    }
  },
  methods: {

    toggleDropdown(e) {
      this.state = !this.state
      console.log(e)
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.state = false
      }
    }
  },
  mounted() {

    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>


