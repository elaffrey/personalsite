<template>
  <div>
    <v-tabs
      class="tabs"
      centered
      grow
      height="60px"
      v-model="activeTab"
    >
      <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <router-view></router-view>
</div>
</template>


<script>
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