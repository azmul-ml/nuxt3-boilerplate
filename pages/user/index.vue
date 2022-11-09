<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const userStore = useUsersStore();

const { data } = await useAsyncData<userType.UserType[] | null>("users", () =>
  userApi.fetchUsers()
);
userStore.setUsers(data);
</script>

<template>
  <div style="margin: 20px">
    <h1>{{ $t("pageTitle.users") }}</h1>
    <UserDetails class="mb-2" :users="userStore.users" />
    <a-button type="primary" @click="navigateTo('/user/create')"
      >Create User</a-button
    >
  </div>
</template>
