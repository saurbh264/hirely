<script setup>
const links = [{ label: 'Find jobs', to: '/jobs' }, { label: 'Companies', to: '/companies' }, { label: 'For employers', to: '/employer' }]
</script>
<template>
  <div class="public-shell">
    <header class="public-header"><div class="container public-header-inner">
      <RouterLink to="/"><img class="brand-logo" src="/brand/hirely-wordmark.svg" alt="Hirely" /></RouterLink>
      <nav class="public-nav" aria-label="Main navigation"><RouterLink v-for="item in links" :key="item.to" :to="item.to">{{ item.label }}</RouterLink></nav>
      <div class="nav-actions"><RouterLink class="btn btn-quiet btn-sm" to="/login">Log in</RouterLink><RouterLink class="btn btn-primary btn-sm" to="/register">Get started <span aria-hidden="true">↗</span></RouterLink></div>
    </div></header>
    <main class="page-main"><slot /></main>
    <footer class="public-footer"><div class="container public-footer-inner"><div><img class="brand-logo" src="/brand/hirely-wordmark.svg" alt="Hirely" /><p style="margin:12px 0 0">Find your next beginning.</p></div><div>© 2025 Hirely, Inc. &nbsp; · &nbsp; Made for what’s next</div></div></footer>
  </div>
</template>
