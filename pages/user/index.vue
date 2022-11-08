<script setup lang="ts">
import * as userApi from "~/api/userApi";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const store = useUsersStore();

const { data } = await useAsyncData("users", () => userApi.fetchUsers());

store.setUsers(data);
</script>

<template>
  <div style="margin: 20px">
    <h1>All Users</h1>
    <UserDetails class="mb-2" :users="store.users" />
    <a-button type="primary" @click="navigateTo('/user/create')"
      >Create User</a-button
    >
  </div>
</template>
