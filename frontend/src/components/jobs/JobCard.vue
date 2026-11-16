<script setup>
defineProps({ job: { type: Object, required: true } })
</script>
<template>
  <article class="card card-pad job-card">
    <div style="display:flex;align-items:start;justify-content:space-between;gap:14px"><div style="display:flex;align-items:center;gap:13px"><div class="icon-box" :style="{ color: job.color, background: job.tint, borderColor: job.tint }">{{ job.mark }}</div><div><h3 style="margin:0 0 4px">{{ job.company }}</h3><span class="muted" style="font-size:12px">{{ job.location }}</span></div></div><button class="btn btn-quiet btn-sm" aria-label="Save job">♡</button></div>
    <div style="margin:22px 0 15px"><RouterLink :to="`/jobs/${job.id}`"><h3 style="font-size:16px;margin-bottom:8px">{{ job.title }}</h3></RouterLink><p class="muted" style="margin:0;font-size:14px;line-height:1.7">{{ job.description }}</p></div>
    <div style="display:flex;gap:7px;flex-wrap:wrap"><span v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</span></div>
    <div class="divider" style="margin:18px 0 14px"></div><div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div><strong style="font-size:14px">{{ job.salary }}</strong><span class="muted" style="font-size:12px"> / year</span></div><span class="muted" style="font-size:12px">{{ job.posted }}</span></div>
  </article>
</template>
