<template>
  <v-app>
    <the-navbar></the-navbar>

    <v-main>
      <Nuxt />
    </v-main>

    <the-footer></the-footer>
  </v-app>
</template>

<script>
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'

export default {
  components: { TheFooter, TheNavbar },
}
</script>
,
    TheNavbar
