<script setup>
const localePath = useLocalePath();
definePageMeta({
  layout: false,
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <NuxtLink :to="localePath('/user')"> &lt; Go Home Page</NuxtLink>
    <h1>{{ $t("pageTitle.profile") }}</h1>
  </div>
</template>
