<template>
  <b-container fluid id="footer" v-bind:style="{ backgroundColor: colors.mountainSec}">
   <b-row align-v="center" :style="{marginBottom:0}">
       <b-col>
        <img src="../assets/images/bio.jpg" />
       </b-col>
      <!--b-col style="padding:20px">
        <p v-bind:style="{ color: colors.text, textAlign: 'left' , fontFamily:'Montserrat' }">I started in printmaking and sculpture background but eventually found those limiting based to my love of technology. With the possibilities that digital development offered, I pursued a digital 3D Design program through Gnomon School of Entertainment Design. From there I combined this background into programming and markup to set on a path of web development.</p>
      </b-col-->
      <b-col id="contactTab">
        <h3>Find Me:</h3>
        <a href="mailto:frostmoth@gmail.com"  v-bind:style="{ color: colors.text }">Email me</a>
        <a href="https://www.linkedin.com/in/matthewcbarker"  v-bind:style="{ color: colors.text }">LinkedIn</a>
        <a href="http://github.com/mattcbarker"  v-bind:style="{ color: colors.text }">Github</a>
      </b-col>
   </b-row>
  </b-container>
</template>
<script>
export default {
  name: "footerTab",
  props: {
    colors: Object
  }
};
</script>
<style>
#footer {
  background-color: black;
}
#contactTab a {
  display: block;
}
#footer .col-md-4 {
  padding: 20px;
}
</style>
