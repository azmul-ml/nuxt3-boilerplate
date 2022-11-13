<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({
  title: "STATIC - User List",
});

const { userState, loading, errorState } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();
fetchUsers();
</script>

<template>
  <div>
    <h1>{{ $t("pageTitle.users") }}</h1>
    <h2>{{ new Date() }}</h2>
    <p v-if="loading">Loading posts...</p>
    <p v-if="errorState">{{ errorState.message }}</p>
    <ul class="list-group">
      <li v-for="user in userState.users" :key="user.id" class="list-group-item">
        {{ user?.first_name }} {{ user?.last_name }}
      </li>
    </ul>
  </div>
</template>
