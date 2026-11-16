<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({ kind: { type: String, default: 'candidate' } })
const route = useRoute()
const candidateLinks = [
  { label: 'Overview', to: '/candidate', icon: '⌂' }, { label: 'My profile', to: '/candidate/profile', icon: '◉' },
  { label: 'Applications', to: '/candidate/applications', icon: '▤' }, { label: 'Saved jobs', to: '/candidate/saved', icon: '♡' },
]
const employerLinks = [
  { label: 'Overview', to: '/employer', icon: '⌂' }, { label: 'Manage jobs', to: '/employer/jobs', icon: '▤' },
  { label: 'Applicants', to: '/employer/applicants', icon: '♙' },
]
const links = computed(() => props.kind === 'employer' ? employerLinks : candidateLinks)
const brandName = computed(() => props.kind === 'employer' ? 'Northstar Studio' : 'Alex Morgan')
const userTitle = computed(() => props.kind === 'employer' ? 'Hiring team' : 'Product Designer')
</script>
<template>
  <div class="sidebar-layout">
    <aside class="sidebar">
      <RouterLink to="/"><img class="sidebar-logo" src="/brand/hirely-wordmark.svg" alt="Hirely" /></RouterLink>
      <div class="sidebar-label">Workspace</div>
      <RouterLink v-for="link in links" :key="link.to" class="side-link" :class="{ 'router-link-active': route.path === link.to || (link.to !== '/candidate' && link.to !== '/employer' && route.path.startsWith(link.to)) }" :to="link.to"><span class="side-icon">{{ link.icon }}</span>{{ link.label }}</RouterLink>
      <div class="sidebar-bottom"><div class="sidebar-label">Explore</div><RouterLink class="side-link" to="/jobs"><span class="side-icon">⌕</span>Browse jobs</RouterLink><RouterLink class="side-link" to="/companies"><span class="side-icon">▦</span>Companies</RouterLink>
        <div class="sidebar-user"><div class="avatar">{{ props.kind === 'employer' ? 'NS' : 'AM' }}</div><div><strong>{{ brandName }}</strong><span>{{ userTitle }}</span></div></div>
      </div>
    </aside>
    <div class="workspace"><header class="workspace-topbar"><div class="crumb">{{ props.kind === 'employer' ? 'Employer workspace' : 'Candidate workspace' }} &nbsp; / &nbsp; Hirely</div><div class="top-actions"><span class="muted" style="font-size:14px">⌕</span><span class="muted" style="font-size:14px">♧</span><div class="avatar">{{ props.kind === 'employer' ? 'NS' : 'AM' }}</div></div></header><main class="workspace-content"><slot /></main></div>
  </div>
</template>
