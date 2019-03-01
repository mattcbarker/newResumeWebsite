<template>
  <b-container>
    <b-row>
      <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
    </b-row>
    <b-row
      v-for="cat in list"
      :key="cat.id"
      v-bind:style="{ color: colors.text }"
      align-v="center"
      align-h="center"
    >
      <h4 class="skillHeader">{{ cat.name }}</h4>
      <b-col cols="4" lg="2" class="skillItem" v-for="skill in cat.skills" :key="skill.id">
        <b-link :href="skill.url">
          <svg viewBox="0 0 150 150" preserveAspectRatio="none">
            <path fill-rule="evenodd" :fill="colors.mountainSec" :d="skill.svg"></path>
          </svg>
          <h6 v-bind:style="{ color: colors.text}">{{ skill.skill }}</h6>
        </b-link>
      </b-col>
    </b-row>
  </b-container>
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
.skillHeader {
  width: 100%;
  border-bottom: 2px solid;
  margin-bottom: 20px;
}
.skillItem {
  padding: 20px;
}
.skillItem h6{
  padding: 20px;
}
.skillItem a:hover{
  color:white;
}
</style>
