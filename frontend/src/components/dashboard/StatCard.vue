<script setup>
defineProps({ label: String, value: String, note: String, icon: String })
</script>
<template>
    <div class="card stat-card">
        <div style="display:flex;align-items:center;justify-content:space-between"><span class="stat-label">{{ label
                }}</span><span class="icon-box" style="width:36px;height:36px;font-size:14px">{{ icon }}</span></div>
        <div class="stat-number">{{ value }}</div>
        <div class="stat-note"><strong>{{ note }}</strong> from last month</div>
    </div>
</template>
