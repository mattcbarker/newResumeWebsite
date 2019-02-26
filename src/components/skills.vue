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
          <!--b-img :src="skill.image" fluid :alt="skill.skill"/-->
          <svg viewBox="0 0 150 150" preserveAspectRatio="none">
            <path fill-rule="evenodd" :fill="colors.mountainSec" :d="skill.svg"></path>
          </svg>
          <h6 v-bind:style="{ color: colors.text }">{{ skill.skill }}</h6>
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
  text-align: left;
  padding-left: 20px;
}
.skillItem {
  padding: 20px;
}
.svgContainer {
  display: inline-block;
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  vertical-align: middle;
  overflow: hidden;
}
.svg {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
