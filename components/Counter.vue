<template>
  <div>
    <button class="bg-blue-500 text-white font-bold py-1 px-2" @click="increment">Increment</button>
    <div>{{ count }}</div>
    <button class="bg-blue-500 text-white font-bold py-1 px-2" @click="deccrement">Decrement</button>
  </div>
</template>

<script setup>
const count = ref(0);

const increment = () => {
  count.value++;
};

const deccrement = () => {
  count.value--;
};
</script>
