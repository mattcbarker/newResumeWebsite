<template>
  <div class="container">
    <div class="row">
      <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
      <div class="col-md-12">
        <div v-for="cat in list" :key="cat.id" v-bind:style="{ color: colors.text }">
          <h4>{{ cat.name }}</h4>
          <div v-for="skill in cat.skills" :key="skill.id">
            <b-img thumbnail fluid :src="skill.image" :alt="skill.skill"/>
          </div>
        </div>
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
  },

};
</script>
<style>
.listItem {
  display: inline-block;
  margin: 0 20px;
}
</style>
