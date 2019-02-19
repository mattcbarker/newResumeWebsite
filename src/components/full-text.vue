<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <p>{{ caption }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'full-text',
  props: {
    caption: String
  }
}
</script>

<style>

</style>
