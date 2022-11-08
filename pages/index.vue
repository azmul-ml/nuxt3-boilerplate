<script setup>
useHead({
  title: "Nuxt Boilerplate",
});

definePageMeta({
  middleware: ["auth"],
});

const store = useCounterStore();

function incrementCount() {
  store.increment();
}
</script>

<template>
  <div>
    <LazyHomeWelcome />
    <h3>Home Page</h3>
    <Counter />
    <br />
    <div>
      {{ store.name }}
      {{ store.count }}
      <a-button
        @click="incrementCount"
        class="bg-blue-500 text-white font-bold py-1 px-2"
        type="primary"
      >
        Increment Store Count
      </a-button>
    </div>
  </div>
</template>
