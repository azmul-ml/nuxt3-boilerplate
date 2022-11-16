<script setup lang="ts">
const props = defineProps({
  isLoader: { type: Boolean, default: false, required: true },
});
</script>

<template>
  <div v-if="props.isLoader">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
