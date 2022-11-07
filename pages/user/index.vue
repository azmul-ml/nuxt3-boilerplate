<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const store = useUsersStore();

const { data, pending, error, refresh } = await useAsyncData("users", () =>
  userApi.fetchUsers()
);

store.setUsers(data);
</script>

<template>
  <div style="margin: 20px">
    <h1>All Users</h1>
    <UserDetails class="mb-2" :users="store.users" />
    <a-button @click="navigateTo('/user/create')" type="primary"
      >Create User</a-button
    >
  </div>
</template>
