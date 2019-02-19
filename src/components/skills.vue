<template>
  <div class="container">
    <div class="row">
      <h3 class="section-title">{{ sectionName }}</h3>
      <div class="col-md-12">
        <div class="listItem" v-for="skill in list" :key="skill.id">{{ skill }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "skills",
  props: {
    sectionName: String,
    list: Array,
  }
};
</script>
<style>
.listItem{
    color:white;
    display: inline-block;
    margin: 0 20px;
}

</style>
