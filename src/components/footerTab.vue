<template>
  <b-container fluid id="footer">
   <b-row align-v="center">
       <b-col>
        <b-img fluid src="https://placehold.it/200x200" />
       </b-col>
      <b-col>
        <p  v-bind:style="{ color: colors.text }">BREIF DESCRIPTION ABOUT MYSELF</p>
      </b-col>
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
