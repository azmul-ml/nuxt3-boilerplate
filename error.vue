<template>
  <div class="d-flex flex-column align-items-center">
    <h1>Custom error page</h1>
    <h3 v-if="error.statusCode === 404">Page not found</h3>
    <h3 v-else>An error occurred - {{ error.statusCode }}</h3>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
