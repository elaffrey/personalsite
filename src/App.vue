<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppFooter,
  },
  data: () => ({}),
};
</script>
