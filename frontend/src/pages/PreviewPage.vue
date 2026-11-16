<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<template><section class="container" style="padding:90px 0"><div class="eyebrow"><span class="eyebrow-dot"></span>Hirely preview</div><h1 style="margin-top:18px">A better way to find what’s next.</h1><p class="lead">This page is part of the Hirely marketplace experience.</p><RouterLink class="btn btn-primary" to="/">Back to home</RouterLink><span style="display:none">{{ route.path }}</span></section></template>
