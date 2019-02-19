<template>
  <Scene v-model="myScene">
    <Camera v-model="myCamera" type="touch"></Camera>
    <HemisphericLight diffuse="#F00"></HemisphericLight>
    <Entity v-model="myEntity">
      <Animation property="rotation.y" :duration="10" :end="-Math.PI * 2"></Animation>
      <Box v-model="myBox"></Box>
    </Entity>
    <!--Asset
      src="./src/skel.obj"
      :scaling="[7.5, 7.5, 7.5]"
      :position="[-4, -0.25, -0.5]"
      :rotation="[0, Math.PI/2, 0]"
    ></Asset-->
  </Scene>
</template>
<script>
module.exports = {
  //import other components for use in this scene too

  data() {
    return {
      myScene: null,
      myEntity: null,
      myBox: null,
      myCamera: null
    };
  },

  watch: {
    myScene() {
      // myScene is now available from the component
      // do something with it here or call a method to use it from here
    },
    myCamera() {},
    myEntity() {},
    myBox() {}
  }
};
</script>
<style>
</style>
