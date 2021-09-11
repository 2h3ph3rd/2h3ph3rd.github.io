<template>
  <v-switch
    inset
    hide-details
    :prepend-icon="switchIcon"
    :value="dark"
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
      dark: false,
    }
  },
  mounted() {
    this.$vuetify.theme.dark = this.$store.state.settings.theme.dark
    this.dark = this.$store.state.settings.theme.dark
  },
  methods: {
    switchTheme() {
      this.$store.commit('settings/switchTheme')
      this.dark = this.$store.state.settings.theme.dark
      this.$vuetify.theme.dark = this.dark

      if (this.dark) {
        this.switchIcon = darkThemeIcon
      } else {
        this.switchIcon = lightThemeIcon
      }
    },
  },
}
</script>

<style>
</style>
