<template>
  <div>
    <v-tabs
      class="mb-2"
      centered
      v-model="activeTab"
      background-color="transparent"
      slider-color="primary"
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.route"
        exact
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ParentTab',
  props: {
    tabs: { type: Array, required: true }
  },
  data: () => ({
    activeTab: ''
  })
}
</script>
