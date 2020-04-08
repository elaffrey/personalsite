<template>
  <v-card flat>
    <v-footer 
      bottom
      app
      padless
    >
      <v-card
        class="flex"
        color="teal"
      >
        <v-card-title>
          {{ 'Emilys\' Page' }}
          <v-spacer />
        </v-card-title>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
