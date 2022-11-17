<script setup>
const props = defineProps({
  showDefaultError: { type: Boolean, required: true },
});
</script>

<template>
  <div>
    <slot></slot>
    <div v-if="props.showDefaultError" class="text-danger">Default error message: Something went wrong</div>
  </div>
</template>
