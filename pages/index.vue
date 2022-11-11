<script setup>
useHead({
  title: 'Nuxt Boilerplate',
});

definePageMeta({
  middleware: ['auth'],
});
</script>

<template>
  <div>
    <LazyHomeWelcome />
    <h3>{{ $t('pageTitle.home') }}</h3>
  </div>
</template>
