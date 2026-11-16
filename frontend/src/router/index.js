import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/public/HomePage.vue'), meta: { layout: 'public' } },
  { path: '/jobs', component: () => import('@/pages/public/JobsPage.vue'), meta: { layout: 'public' } },
  { path: '/jobs/:id', component: () => import('@/pages/public/JobDetailPage.vue'), meta: { layout: 'public' } },
  { path: '/companies', component: () => import('@/pages/public/CompaniesPage.vue'), meta: { layout: 'public' } },
  { path: '/companies/:id', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'public' } },
  { path: '/candidate', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'candidate' } },
  { path: '/candidate/profile', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'candidate' } },
  { path: '/candidate/applications', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'candidate' } },
  { path: '/candidate/saved', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'candidate' } },
  { path: '/employer', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'employer' } },
  { path: '/employer/jobs', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'employer' } },
  { path: '/employer/jobs/new', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'employer' } },
  { path: '/employer/applicants', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'employer' } },
  { path: '/login', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'public' } },
  { path: '/register', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'public' } },
  { path: '/:pathMatch(.*)*', component: () => import('@/pages/PreviewPage.vue'), meta: { layout: 'public' } },
]

export default createRouter({ history: createWebHistory(), routes })
