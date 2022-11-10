<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const { userState, loading, errorState } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();
fetchUsers();
</script>

<template>
  <div style="margin: 20px">
    <h1>{{ $t("pageTitle.users") }}</h1>
    <p v-if="loading">Loading posts...</p>
    <p v-if="errorState">{{ errorState.message }}</p>
    <UserDetails class="mb-2" :users="userState.users" />
    <a-button type="primary" @click="navigateTo('/user/create')"
      >Create User</a-button
    >
  </div>
</template>
