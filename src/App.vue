<template>
  <div id="app" v-bind:style="{ backgroundColor: colorTheme.mountain }">
    <resumeHeader v-bind:colors="colorTheme"/>
    <p
      v-bind:style="{ color: colorTheme.text}"
    >A {{ weatherDescPoetic }} day in Kansas City.</p>
    <!--select v-model="weatherDesc">
      <option disabled value>Please select one</option>
      <option>Sunny</option>
      <option>B</option>
      <option>C</option>
    </select>
    {{ weatherDesc }}-->
    <projects sectionName="Projects" v-bind:list="projectsList" v-bind:colors="colorTheme"/>
    <experience sectionName="Experience" v-bind:list="workExperience" v-bind:colors="colorTheme"/>
    <skillstab sectionName="Skills" v-bind:list="skills" v-bind:colors="colorTheme"/>

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
      weatherDescPoetic: String,
      colorTheme: {
        mountain: "#122a39",
        mountainSec: "#c79628",
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
        //this.weatherDesc = " "; //for testing various weather setups
        console.log(this.weatherDesc);
        switch (this.weatherDesc) {
          case "Freezing Drizzle":
          case "Slight Chance Light Snow":
            this.colorTheme.mountain = "#73726e";
            this.colorTheme.mountainSec = "#bbbbbb";
            this.colorTheme.sky = "#9c9898";
            this.colorTheme.text = "white";
            this.weatherDescPoetic = "cold";
            break;
          case "Chance Drizzle":
          case "Mostly Cloudy then Slight Chance Drizzle":
          case "Slight Chance Drizzle":
          case "Cloudy then Chance Drizzle":
          case "Cloudy":
          case "Mostly Cloudy":
            this.colorTheme.mountain = "#5a5850";
            this.colorTheme.mountainSec = "#948558";
            this.colorTheme.sky = "#b3b4b5";
            this.colorTheme.text = "#f3f3f3";
            this.weatherDescPoetic = "dreary";
            break;
          case "Partly Sunny":
          case "Mostly Sunny":
            this.colorTheme.mountain = "#71684e";
            this.colorTheme.mountainSec = "#b9a25b";
            this.colorTheme.sky = "#9fc2de";
            this.colorTheme.text = "white";
            this.weatherDescPoetic = "bright";
            break;
          case "Sunny":
            this.colorTheme.mountain = "#5d4612";
            this.colorTheme.mountainSec = "#c79628";
            this.colorTheme.sky = "#84c5ea";
            this.colorTheme.text = "white";
            this.weatherDescPoetic = "sunny";
            break;
          default:
            this.colorTheme.mountain = "#122a39";
            this.colorTheme.mountainSec = "#304352";
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Geo", sans-serif;
}
.section-title {
  font-family: "Geo", sans-serif;
  font-size: 3em;
  width: 100%;
  padding: 20px;
  border-bottom: 2px solid;
  border-top: 2px solid;
  margin-bottom: 20px;
}
.row {
  margin-bottom: 20px;
}
</style>
