<template>
  <div class="d-flex min-vh-100 align-items-center justify-content-center">
    <DisplayError :code="parseInt(error.statusCode)" />
  </div>
</template>

<script setup>
// default props available on error.vue
defineProps({
  error: Object,
});
const error = useError();
</script>
