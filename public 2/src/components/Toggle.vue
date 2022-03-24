<template>
  <div class="widget-collapsible" :class="{opened: state}" >
    <h3 class="widget-title">
      <a class="d-flex" href="#" @click.prevent="toggleCollapse" >
        <slot name="title"><span>{{ title }}</span></slot>
        <span class="toggle-btn mg-x-5" :class="{opened: state}" ></span>
      </a>
    </h3>
    <div class="widget-collapsible-content" v-show="state">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  props: ['title' ,'opened'],
  data() {
    return {
      state: this.opened
    }
  },
  methods: {
    toggleCollapse(e) {
      this.state = !this.state
      console.log(e)
    },

  }
}

</script>

<style lang="scss">
</style>
