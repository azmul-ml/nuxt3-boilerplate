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
    <h3>{{ $t("pageTitle.about") }}</h3>

    <div class="bg-light rounded h-100 p-4">
      <div class="owl-carousel testimonial-carousel">
        <div class="testimonial-item text-center">
          <p class="mb-0">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
