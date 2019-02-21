<template>
  <div id='app' v-bind:style='{ backgroundColor: colorTheme.mountain }'>
    <resumeHeader v-bind:colors='colorTheme'/>
    <projects sectionName='Projects' v-bind:list='projectsList' v-bind:colors='colorTheme'/>
    <experience sectionName='Experience' v-bind:list='workExperience' v-bind:colors='colorTheme'/>
    <skillstab sectionName='Skills' v-bind:list='skills' v-bind:colors='colorTheme'/>
    {{ weatherDesc }}
    <footertab v-bind:colors='colorTheme'/>
  </div>
</template>

<script>
import resumeHeader from './components/resume-header.vue';
import projects from './components/projects.vue';
import experience from './components/experience.vue';
import skillstab from './components/skills.vue';
import footertab from './components/footerTab.vue';
import axios from 'axios';

const workExperience = [
  {
    company: 'StreetsideAuto.com',
    title: 'Front End Web Developer',
    dates: 'September 2016 - November 2018',
    desc:
      'Created markup and CSS for the new Warn.com that launched July 2018 after 6 months of development. Creation of the markup to make the StreetsideAuto.com website reactive and mobile ready using HTML5, CSS3, jQuery and Bootstrap, managing and updating nopCommerce powered eCommerce websites, created an Angular-powered form to aid in updating product detail pages.'
  },
  {
    company: 'Starbucks',
    title: 'Shift Manager+Barista',
    dates: 'March 2013 - August 2014',
    desc:
      'Everything and anything asked of me from making a sweet cup o joe (or more than likely more sugar than coffee) to making sure that the store is pristine when we closed, making sure everyone on my shifts ate and breaked when appropriate. Even more fun like inventory tracking, order recieveing and managing when food is going out.'
  },
  {
    company: 'Freelance',
    title: 'Independent Production Artist',
    dates: 'June 2010 - September 2016',
    desc:
      'Independent logo design (From sketches to Vector images), Independent development in the Unreal engine for the PC and Mac, created designs for 3D printing.'
  }
];
const projectsList = [
  {
    img: 'https://warn.blob.core.windows.net/warn/0000112.gif',
    title: 'Warn Industries 2018',
    desc:
      'Website for the popular aftermarket winching company, made while employed at KeystoneAuto',
    urldest: 'https://www.warn.com/'
  },
  {
    img: 'https://placehold.it/200x200',
    title: 'test',
    desc: 'description',
    urldest: '#'
  },
  {
    img: 'https://placehold.it/200x200',
    title: 'test',
    desc: 'description',
    urldest: '#'
  }
];
const skills = [
  {
    name: 'The Basics',
    skills: [
      { skill: 'HTML 5', image: '@assets/skills-img/html5.png' },
      { skill: 'CSS 3', image: '@assets/skills-img/css3.png' },
      { skill: 'Javascript', image: '@assets/skills-img/javascript.png' }
    ]
  },
  {
    name: 'Frameworks + Libraries',
    skills: [
      { skill: 'Vue.JS', image: '@assets/skills-img/vue-logo.png' },
      { skill: 'NodeJS', image: '@assets/skills-img/node.png'},
      { skill: 'Bootstrap 4', image: '@assets/skills-img/bootstrap.png'},
      { skill: 'Express', image: '@assets/skills-img/express.jpg' },
      { skill: 'jQuery', image: '@assets/skills-img/jquery.gif' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { skill: 'MongoDB Atlas', image: '@assets/skills-img/mongodb.jpg' }
    ]
  },
  {
    name: 'Tools',
    skills: [
      { skill: 'Visual Studio Code ', image: '@assets/skills-img/visual-studio-code.png' },
      { skill: 'npm', image: '@assets/skills-img/npm.png'},
      { skill: 'Adobe Photoshop', image: '@assets/skills-img/photoshop.png' },
      { skill: 'GitHub', image: '@assets/skills-img/github.png'},
      { skill: 'Atom', image: '@assets/skills-img/atom.png' },
      { skill: 'Sublime 2', image: '@assets/skills-img/sublime.jpg' },
      { skill: 'Google Search Console', image:'googlesearchconsole.jpg'},
      { skill: 'Google Maps API', image:'googlemapsapi.png'},
      { skill: 'National Weather Service API', image: '@assets/skills-img/node.png'}
    ]
  }
];

export default {
  name: 'app',
  components: {
    resumeHeader,
    skillstab,
    experience,
    projects,
    footertab
  },
  data() {
    return {
      skills: skills,
      workExperience: workExperience,
      projectsList: projectsList,
      weatherDesc: String,
      colorTheme: {
        mountain: '#122a39',
        sky: '#070c10',
        text: 'white'
      }
    };
  },
  mounted() {
    axios
      .get('https://api.weather.gov/gridpoints/eax/40,44/forecast?units=us')
      .then(response => {
        this.weatherDesc = response.data.properties.periods[0].shortForecast;

        if (this.weatherDesc === 'Freezing Drizzle') {
          this.colorTheme.mountain = '#ebecf3';
          this.colorTheme.sky = '#afafaf';
          this.colorTheme.text = '#335aca';
        }
        if (this.weatherDesc === 'Partly Sunny' || 'Mostly Sunny') {
          this.colorTheme.mountain = '#4a4f52';
          this.colorTheme.sky = '#9fc2de';
          this.colorTheme.text = 'white';
        }
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #122a39;
  font-family: 'Geo', sans-serif;
}
.section-title {
  font-family: 'Geo', sans-serif;
  font-size: 2em;
  width: 100%;
  padding: 10px 20px;
  text-align: left;
}
</style>
