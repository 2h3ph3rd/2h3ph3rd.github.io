<template>
  <div>
    <the-header></the-header>
    <section-project></section-project>
    <section-articles></section-articles>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import SectionProject from '~/components/SectionProject.vue'

export default {
  components: { TheHeader, SectionProject },
}
</script>

<style>
.title {
  font-size: 20em;
}
</style>
