<template>
  <b-container>
    <b-row>
      <b-col md="12">
        <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
      </b-col>
      <b-col md="4" cols="6" v-for="project in list" :key="project.id" class="preview">
        <b-link :href="project.urldest">
          <b-img thumbnail fluid :src="project.img" alt="Image 1"/>
        </b-link>
        <h4 v-bind:style="{ color: colors.text }">{{ project.title}}</h4>
        <p v-bind:style="{ color: colors.text }">{{ project.desc }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>


export default {
  name: "projects",
  props: {
    sectionName: String,
    list: Array,
    colors: Object
  }
};
</script>
<style>
.preview p{
  font-family: Montserrat;
}
</style>
