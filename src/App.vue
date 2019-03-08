<template>
  <div id="app" v-bind:style="{ backgroundColor: colorTheme.mountain }">
    <!--div id="weatherdiv"></div-->
    <resumeHeader v-bind:colors="colorTheme"/>
    <p v-bind:style="{ color: colorTheme.text}">
      A {{ weatherDescription.poetic }}
      <span v-if="weatherDescription.daytime == true">day</span>
      <span v-else>night</span> in Kansas City.
    </p>

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
      weatherDescription: {
        shortDesc: String,
        poetic: String,
        daytime: true
      },
      colorTheme: {
        mountain: "#122a39",
        mountainSec: "#c79628",
        sky: "#070c10",
        text: "white"
      }
    };
  },
  methods: {
    setWeather: (weather, colors) => {
      weather.daytime = false;
      if (weather.daytime === false) {
        colors.mountain = "#122a39";
        colors.mountainSec = "#304352";
        colors.sky = "#070c10";
        colors.text = "white";
        //switch here for what the poetic should be
        weather.poetic = "cold";
      } else {
        switch (weather.shortDesc) {
          case "Freezing Drizzle":
          case "Slight Chance Light Snow":
            colors.mountain = "#73726e";
            colors.mountainSec = "#bbbbbb";
            colors.sky = "#9c9898";
            colors.text = "white";
            weather.poetic = "cold";
            break;
          case "Chance Drizzle":
          case "Mostly Cloudy then Slight Chance Drizzle":
          case "Slight Chance Drizzle":
          case "Cloudy then Chance Drizzle":
          case "Cloudy":
          case "Mostly Cloudy":
            colors.mountain = "#5a5850";
            colors.mountainSec = "#948558";
            colors.sky = "#b3b4b5";
            colors.text = "#f3f3f3";
            weather.poetic = "dreary";
            break;
          case "Partly Sunny":
          case "Mostly Sunny":
            colors.mountain = "#71684e";
            colors.mountainSec = "#b9a25b";
            colors.sky = "#9fc2de";
            colors.text = "white";
            weather.poetic = "lovely";
            break;
          case "Sunny":
            colors.mountain = "#5d4612";
            colors.mountainSec = "#c79628";
            colors.sky = "#84c5ea";
            colors.text = "white";
            weather.poetic = "warm";
            break;
          default:
            colors.mountain = "#122a39";
            colors.mountainSec = "#304352";
            colors.sky = "#070c10";
            colors.text = "white";
            weather.poetic = "wonderful";
        }
      }
    }
  },
  mounted() {
    axios
      .get("https://api.weather.gov/gridpoints/eax/40,44/forecast?units=us")
      .then(response => {
        this.weatherDescription.shortDesc =
          response.data.properties.periods[0].shortForecast;
        this.weatherDescription.daytime =
          response.data.properties.periods[0].isDaytime;

        this.setWeather(this.weatherDescription, this.colorTheme);
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
#weatherdiv {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(24, 24, 25, 0.8);
}
</style>
