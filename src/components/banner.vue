<template>
  <div class="container-fluid">
    <img src="../assets/lake.jpg" class="img-fluid" />
    <p> {{ caption }} </p>
  </div>
</template>
<script>
export default {
  name: 'banner',
  props: {
    caption: String
  }
}
</script>
<style>
</style>