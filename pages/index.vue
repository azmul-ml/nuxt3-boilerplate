<script setup>
useHead({
  title: "Nuxt Boilerplate",
});
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <LazyHomeWelcome />
    <h3>Home Page</h3>
    <Counter />
  </div>
</template>
