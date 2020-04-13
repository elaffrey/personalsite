<template>
  <v-app-bar
    app
    absolute
    color="white"
    elevate-on-scroll
  >
  <v-row class="mt-8" justify="center">
    <router-link :to="{ name: 'Parent' }">
      <v-img src="@/assets/logo.png" alt="Personal Site"/>
    </router-link>
  </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>
