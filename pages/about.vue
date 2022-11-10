<script setup>
definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
useHead({
  title: "About Page",
});
</script>

<template>
  <div>{{ $t("pageTitle.about") }}</div>
</template>
