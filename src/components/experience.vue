<template>
    <div class="container">
    <div class="row">
      <h3 class="section-title">{{ sectionName }}</h3>
      <div class="col-md-12">
        <div class="expItem" v-for="skill in list" :key="skill.id">
            <h3>{{ skill.company }}</h3>
            <span>{{ skill.title }}  /  </span>
            <span style="color:#bd1d1d">{{ skill.dates }} </span>
            <p> {{ skill.desc }} </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "experience",
  props: {
    sectionName: String,
    list: Array,
  }
};
</script>
<style>
.expItem{
    text-align:left;
    color:white;
}
.expItem p{
    font-family: none;
}
</style>
