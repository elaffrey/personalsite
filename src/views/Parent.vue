<template>
  <v-tabs
    class="mb-2"
    centered
    background-color="transparent"
    slider-color="black"
    color="black"
  >
    <v-tab
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.route"
      exact
    > {{ tab.title }} </v-tab>
  </v-tabs>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Parent',
  data: () => ({
    activeTab: '',
    tabs: [
      { id: 1, title: 'About', route: '/about' },
      { id: 2, title: 'Projects', route: '/projects' },
      { id: 3, title: 'Resume', route: '/resume' }
    ]
  })
};
</script>

<style>
.customTab {
  text-transform: none;
  font-size: 5px;
}
</style>