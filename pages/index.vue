<template>
  <div>
    <the-header></the-header>
    <section-projects></section-projects>
    <section-articles></section-articles>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import SectionProjects from '~/components/SectionProjects.vue'

export default {
  components: { TheHeader, SectionProjects },
}
</script>

<style>
.title {
  font-size: 20em;
}
</style>
