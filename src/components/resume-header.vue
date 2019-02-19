<template>
  <div class="container-fluid" id="header">
    <h1 id="name">Matt Barker</h1>
    <h2 id="title">Web Developer</h2>
    <div>
      <svg viewBox="0 0 1008 423">
        <path
          id="mountains"
          data-name="mountains"
          v-bind:fill="mountainStyle"
          d="M0,537l65-43,66-19h9l48-24,32-34,88-55,29-7,72-45,51,35s-45-23-48-22-17,50-17,50-27,14.333-29,27,13.737,49.553,14,48S526,299,526,299l21-10,64-65,63-31,54-41,13-17,41-21s-1.75,99-5,110-85,191-85,191L831,292l64-38V222l-78-52-29-49,33,44,81,49,4,11,18,7,47-30,37,44v30s-4.8-16.4-12-28-27-32-27-32l-28,52s-8.035,24.97-6,33c9.934,39.2,47,81,47,81l-12,20,37,45v90H0Z"
          transform="translate(0 -114)"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "resumeHeader",
  props: {
    bgcolor: String,
    weather: Object
  },
  data: {
    mountainStyle: {
      activeColor: "red"
    }
  }
};
</script>
<style>
#header {
  background-color: #070c10;
  padding: 0;
}
#name,
#title {
  font-family: "Geo", sans-serif;
  color: white;
  width: 100%;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 0;
}

.snow {
  fill: white;
}

.mountain-background {
  fill-rule: evenodd;
}
</style>
