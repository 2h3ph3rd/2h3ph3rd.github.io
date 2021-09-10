<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <the-footer />
  </v-app>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: { TheFooter },
}
</script>
