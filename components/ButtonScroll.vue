<template>
  <v-btn
    v-show="show"
    color="primary"
    fixed
    bottom
    right
    fab
    @click="scrollToTop"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
    scrollListener() {
      this.show = window.pageYOffset > 20
    },
  },
}
</script>

<style>
</style>
