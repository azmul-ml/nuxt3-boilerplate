<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";

useHead({
    title: "User List"
})

definePageMeta({
  middleware: ["auth"],
});

const store = useUsersStore();

const {
  data,
  pending,
  error,
  refresh,
} = await useAsyncData("users", () => userApi.fetchUsers());

store.setUsers(data);

</script>

<template>
  <div>
    <h1>All Users</h1>
    <UserDetails class="mb-2" v-for="user in store.users" :user="user" :key="user.id" />
    <button class="bg-blue-500 text-white py-1 px-2 mt-4" @click="navigateTo('/user/create')">Create user</button>
  </div>
</template>
