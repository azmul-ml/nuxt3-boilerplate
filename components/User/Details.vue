<script setup>
const props = defineProps({
  users: { type: Object, required: true },
});
</script>

<template>
  <div v-for="user in props.users" :key="user.id" class="list-group">
    <a class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">
          <NuxtLink :to="`/user/${user?.id}`" class="dmsans-regular">
            {{ user?.first_name }} {{ user?.last_name }}
          </NuxtLink>
        </h5>
        <small>{{ user.id }} days ago</small>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
