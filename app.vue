<script setup>
  function logSomeError(err) {
    console.log(err);
  }
</script>


<template>
    <NuxtErrorBoundary @error="logSomeError">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    </NuxtErrorBoundary>
  </template>
