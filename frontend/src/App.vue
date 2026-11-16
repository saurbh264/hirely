<script setup>
import PublicLayout from './layouts/PublicLayout.vue'
import CandidateLayout from './layouts/CandidateLayout.vue'
import EmployerLayout from './layouts/EmployerLayout.vue'
const layouts = { public: PublicLayout, candidate: CandidateLayout, employer: EmployerLayout }
</script>
<template>
  <RouterView v-slot="{ Component, route }">
    <component :is="layouts[route.meta.layout] || PublicLayout">
      <component :is="Component" />
    </component>
  </RouterView>
</template>
