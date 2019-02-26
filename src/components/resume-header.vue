<template>
  <div class="container-fluid" id="header" v-bind:style="{ backgroundColor: colors.sky }">
    <h1 id="name" v-bind:style="{ color: colors.text }">Matt Barker</h1>
    <h2 id="title" v-bind:style="{ color: colors.text }">Web Developer</h2>
    <div>
      <svg viewBox="0 0 1008 423">
        <path
          fill-rule="evenodd"
          v-bind:fill="colors.mountainSec"
          transform="translate(310 0)"
          d="M-0.000,338.000 L98.000,197.000 L148.000,215.000 C148.000,215.000 168.432,239.911 168.000,240.000 L472.000,-0.000 L510.000,50.000 L542.000,88.000 L586.000,99.000 L613.000,124.000 L660.000,96.000 L697.000,132.000 L696.000,335.000 L-0.000,338.000 Z"
        ></path>
        <path
          id="mountains"
          data-name="mountains"
          v-bind:fill="colors.mountain"
          d="M0.000,423.000 L65.000,380.000 L131.000,361.000 L140.000,361.000 L188.000,337.000 L220.000,303.000 L308.000,248.000 L337.000,241.000 L408.000,198.000 L395.000,259.000 C395.000,259.000 366.000,299.667 366.000,305.000 C366.000,310.333 379.737,335.553 380.000,334.000 C380.263,332.447 526.000,185.000 526.000,185.000 L547.000,175.000 L611.000,110.000 L674.000,79.000 L728.000,38.000 L741.000,21.000 L782.000,-0.000 C782.000,-0.000 780.250,99.000 777.000,110.000 C773.750,121.000 692.000,301.000 692.000,301.000 L831.000,178.000 L895.000,140.000 L924.000,118.000 L970.000,97.000 L941.000,154.000 C941.000,154.000 921.333,200.333 924.000,205.000 C926.667,209.667 961.000,240.333 963.000,243.000 C965.000,245.667 970.000,288.000 970.000,288.000 L1007.000,333.000 L1007.000,423.000 L0.000,423.000 Z"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "resumeHeader",
  props: {
    colors: Object,
    weather: Object
  }
};
</script>
<style>
#header {
  padding: 0;
}
#name,
#title {
  font-family: "Geo", sans-serif;
  width: 100%;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 0;
}

.mountain-background {
  fill-rule: evenodd;
}
</style>
