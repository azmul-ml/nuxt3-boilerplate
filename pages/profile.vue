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
    <div class="bg-light rounded h-100 p-4">
      <div class="owl-carousel testimonial-carousel">
        <div class="testimonial-item text-center">
          <img
            class="img-fluid rounded-circle mx-auto mb-4"
            src="@/assets/images/user.png"
            style="width: 100px; height: 100px"
          />
          <h5 class="mb-1">Azmul Hossain</h5>
          <p>Software Engineer</p>
          <p class="mb-0">
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
