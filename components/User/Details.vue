<script setup>
const props = defineProps(["user"]);
const { user } = props;
</script>

<template>
  <div>
    <NuxtLink
      :to="`/user/${user.id}`"
      class="block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{user.first_name}} {{user.last_name}}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{user.email}}</p>
    </NuxtLink>
  </div>
</template>
