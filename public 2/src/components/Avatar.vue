<template>
<div class="avatar d-flex justify-content-between align-items-center" :style="{height: size+'px', width: size+'px', backgroundImage: 'url('+ src +')'  }">
  <span class="flex-fill avatar-text">{{title}}</span>
</div>
</template>

<script>
export default {
  name: "Avatar",
  props:['size', 'src', 'title'],

  methods:{




  }

}
</script>

<style scoped>

</style>
