<template>
  <div class="container-fluid" id="footer">
    <div class="row">
      <div class="col-md-4">
        <img src="https://placehold.it/200x200">
      </div>
      <div class="col-md-4">
        <p  v-bind:style="{ color: colors.text }">BREIF DESCRIPTION ABOUT MYSELF</p>
      </div>
      <div class="col-md-4" id="contactTab">
        <h3>Find Me:</h3>
        <a href="mailto:frostmoth@gmail.com"  v-bind:style="{ color: colors.text }">Email me</a>
        <a href="https://www.linkedin.com/in/matthewcbarker"  v-bind:style="{ color: colors.text }">LinkedIn</a>
        <a href="http://github.com/mattcbarker"  v-bind:style="{ color: colors.text }">Github</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
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
