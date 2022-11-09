<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const { users, loading, error } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();
fetchUsers();
</script>

<template>
  <div style="margin: 20px">
    <h1>{{ $t("pageTitle.users") }}</h1>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <UserDetails class="mb-2" :users="users" />
    <a-button type="primary" @click="navigateTo('/user/create')"
      >Create User</a-button
    >
  </div>
</template>
