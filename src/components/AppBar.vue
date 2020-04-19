<template>
  <v-app-bar
    app
    dense
    color="white"
    short
    flat
  >
  <v-row class="mt-8 mb-4" justify="center">
    <router-link :to="{ path: '/about' }">
      <v-img height="50px" src="@/assets/logo.png" alt="Personal Site"/>
    </router-link>
  </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>
