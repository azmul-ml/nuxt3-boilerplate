<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({
  title: "SSR - User List",
});

const { userState, loading, errorState } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();
fetchUsers();
</script>

<template>
  <div>
    <h2>SSR Page</h2>
    <h3>{{ new Date() }}</h3>
    <h3>{{ $t("pageTitle.users") }}</h3>
    <p v-if="loading">Loading posts...</p>
    <p v-if="errorState">{{ errorState.message }}</p>
    <ul class="list-group">
      <li v-for="user in userState.users" :key="user.id" class="list-group-item">
        {{ user?.first_name }} {{ user?.last_name }}
      </li>
    </ul>
  </div>
</template>
