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
  <div>
    <div class="container-fluid pt-4 px-4">
      <div class="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
        <div class="col-md-6 text-center">
          <h3>{{ $t("pageTitle.about") }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
