<template>
  <div class="container">
    <div class="row">
      <h3 class="section-title">{{ sectionName }}</h3>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "projects",
  props: {
    sectionName: String,
    list: Array
  }
};
</script>
<style>
</style>
