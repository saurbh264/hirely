<script setup>
defineProps({ company: { type: Object, required: true }, teamSize: { type: Number, default: 128 } })
</script>
<template>
  <RouterLink :to="`/companies/${company.id}`" class="company-card card"><div class="company-card-top"><div class="icon-box" :style="{color:company.color,background:company.tint,border:0}">{{ company.mark }}</div><span class="verified">✓ Verified</span></div><h3>{{ company.name }}</h3><div class="industry">{{ company.category }} <span>·</span> {{ company.location }}</div><p>{{ company.description }}</p><div class="company-card-bottom"><span>{{ teamSize }} team members</span><strong>{{ company.open }} open roles <b>↗</b></strong></div></RouterLink>
</template>
<style scoped>
.company-card{display:block;padding:20px;transition:.2s}.company-card:hover{transform:translateY(-3px);border-color:#d6d6fb;box-shadow:0 14px 32px #21215b0d}.company-card-top{display:flex;align-items:center;justify-content:space-between}.verified{color:#16834c;font-size:12px;font-weight:700}.company-card h3{margin:18px 0 5px;font-size:16px}.industry{color:#64748b;font-size:12px}.industry span{margin:0 4px;color:#b2bac6}.company-card p{min-height:52px;margin:16px 0;color:#64748b;font-size:12px;line-height:1.75}.company-card-bottom{display:flex;align-items:center;justify-content:space-between;gap:8px;padding-top:14px;border-top:1px solid #f0f2f6;color:#64748b;font-size:12px}.company-card-bottom strong{color:var(--brand);font-size:12px}.company-card-bottom b{margin-left:5px}
</style>
