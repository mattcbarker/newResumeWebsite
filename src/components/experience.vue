<template>
    <div class="container">
    <div class="row">
      <h3 class="section-title" v-bind:style="{ color: colors.text }">{{ sectionName }}</h3>
      <div class="col-md-12">
        <div class="expItem" v-for="skill in list" :key="skill.id" v-bind:style="{ color: colors.text }">
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
    colors: Object,
  }
};
</script>
<style>
.expItem{
    text-align:left;
}
.expItem p{
    font-family: Montserrat;
}
</style>
