<script setup>defineProps({ eyebrow: String, title: String, description: String })</script>
<template>
    <section class="page-intro">
        <div class="container">
            <div class="eyebrow"><span class="eyebrow-dot"></span>{{ eyebrow }}</div>
            <h1 style="margin-top:15px">{{ title }}</h1>
            <p class="lead" style="margin-bottom:0">{{ description }}</p>
            <slot />
        </div>
    </section>
</template>
