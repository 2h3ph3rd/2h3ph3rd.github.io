<template>
  <v-btn color="primary" text @click="openLink">
    <v-icon left>{{ icon }}</v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  methods: {
    openLink() {
      window.open(this.link)
    },
  },
}
</script>

<style>
</style>
