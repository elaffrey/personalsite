<template>
  <v-tabs
    class="mb-2"
    centered
    background-color="transparent"
    slider-color="black"
    color="black"
  >
    <v-tab class="customTab"> About </v-tab>
    <v-tab> Projects </v-tab>
    <v-tab> Resume </v-tab>
  </v-tabs>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
};
</script>

<style>
.customTab {
  text-transform: none;
  font-size: 5px;
}
</style>