<template>
  <v-switch
    inset
    dark
    hide-details
    :prepend-icon="switchIcon"
    :value="$vuetify.theme.dark"
    @change="switchTheme"
  >
  </v-switch>
</template>

<script>
const lightThemeIcon = 'mdi-brightness-6'
const darkThemeIcon = 'mdi-brightness-4'

export default {
  data() {
    return {
      switchIcon: darkThemeIcon,
    }
  },
  methods: {
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.dark = false
        this.switchIcon = darkThemeIcon
      } else {
        this.$vuetify.theme.dark = true
        this.switchIcon = lightThemeIcon
      }
    },
  },
}
</script>

<style>
</style>
