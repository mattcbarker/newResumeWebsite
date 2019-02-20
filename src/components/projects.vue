<template>
  <div class="container">
    <div class="row">
      <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "projects",
  props: {
    sectionName: String,
    list: Array,
    colors: Object,
  }
};
</script>
<style>
</style>
