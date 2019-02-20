<template>
  <div class="container">
    <div class="row">
      <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
      <div class="col-md-12">
        <div class="listItem" v-for="skill in list" :key="skill.id" v-bind:style="{ color: colors.text }">{{ skill }}</div>
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
    colors: Object
  }
};
</script>
<style>
.listItem{
    display: inline-block;
    margin: 0 20px;
}

</style>
