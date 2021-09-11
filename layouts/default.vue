<template>
  <v-app>
    <the-navbar></the-navbar>

    <v-main>
      <Nuxt />
    </v-main>
    <button-go-to-top></button-go-to-top>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
import ButtonGoToTop from '~/components/ButtonScroll.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheNavbar from '~/components/TheNavbar.vue'

export default {
  components: { TheFooter, TheNavbar, ButtonGoToTop },
}
</script>
,
    TheNavbar
