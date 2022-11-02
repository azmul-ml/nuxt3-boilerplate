<script setup>
definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <NuxtLink to="/"> &lt; Go Home Page</NuxtLink>
    <h1>Azmul Hossain Profile</h1>
  </div>
</template>
