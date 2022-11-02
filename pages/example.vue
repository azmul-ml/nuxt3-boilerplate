<script setup>
const DynamicIncrement = resolveComponent("DynamicIncrement");
</script>

<template>
  <div>
    <LazyHomeWelcome />
    <component :is="DynamicIncrement"></component>
    <Counter />
  </div>
</template>
