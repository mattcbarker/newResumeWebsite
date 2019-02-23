<template>
  <div id="app" v-bind:style="{ backgroundColor: colorTheme.mountain }">
    <resumeHeader v-bind:colors="colorTheme"/>
    <projects sectionName="Projects" v-bind:list="projectsList" v-bind:colors="colorTheme"/>
    <experience sectionName="Experience" v-bind:list="workExperience" v-bind:colors="colorTheme"/>
    <skillstab sectionName="Skills" v-bind:list="skills" v-bind:colors="colorTheme"/>
    {{ weatherDesc }}
    <footertab v-bind:colors="colorTheme"/>
  </div>
</template>

<script>
import resumeHeader from "./components/resume-header.vue";
import projects from "./components/projects.vue";
import experience from "./components/experience.vue";
import skillstab from "./components/skills.vue";
import footertab from "./components/footerTab.vue";
import axios from "axios";
import * as myResume from "./assets/js/myResume.js";

export default {
  name: "app",
  components: {
    resumeHeader,
    skillstab,
    experience,
    projects,
    footertab
  },
  data() {
    return {
      skills: myResume.default.skills,
      workExperience: myResume.default.workExperience,
      projectsList: myResume.default.projectsList,
      weatherDesc: String,
      colorTheme: {
        mountain: "#122a39",
        sky: "#070c10",
        text: "white"
      }
    };
  },
  mounted() {
    axios
      .get("https://api.weather.gov/gridpoints/eax/40,44/forecast?units=us")
      .then(response => {
        this.weatherDesc = response.data.properties.periods[0].shortForecast;

        switch (this.weatherDesc) {
          case "Cloudy then Chance Drizzle":
          case "Freezing Drizzle":
          case "Chance Drizzle":
            this.colorTheme.mountain = "#ebecf3";
            this.colorTheme.sky = "#afafaf";
            this.colorTheme.text = "#335aca";
            break;
          case "Partly Sunny":
          case "Mostly Sunny":
            this.colorTheme.mountain = "#4a4f52";
            this.colorTheme.sky = "#9fc2de";
            this.colorTheme.text = "white";
            break;
          default:
            this.colorTheme.mountain = "#122a39";
            this.colorTheme.sky = "#070c10";
            this.colorTheme.text = "white";
        }
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #122a39;
  font-family: "Geo", sans-serif;
}
.section-title {
  font-family: "Geo", sans-serif;
  font-size: 2em;
  width: 100%;
  text-align: left;
  border-bottom: 2px solid;
  margin-bottom: 20px;
}
</style>
