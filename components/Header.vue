<script setup lang="ts">
import { storeToRefs } from "pinia";

const { logout } = useAuthStore();
const { isLoggedIn } = storeToRefs(useAuthStore());

const handleLogout = async () => {
  await logout();
};
</script>

<template>
  <nav class="bg-purple-700 text-white p-2 mb-2">
    <NuxtLink v-if="isLoggedIn" to="/" class="pr-8">Home</NuxtLink>
    <NuxtLink v-if="isLoggedIn" to="/user" class="pr-8">Users</NuxtLink>
    <NuxtLink v-if="isLoggedIn" to="/about" class="pr-8">About</NuxtLink>
    <NuxtLink v-if="isLoggedIn" to="/profile" class="pr-8">Profile</NuxtLink>
    <NuxtLink v-if="isLoggedIn" to="/chart" class="pr-8">Charts</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login" class="pr-8">Login</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/register" class="pr-8">Register</NuxtLink>
    <button v-if="isLoggedIn" class="pr-8" @click="handleLogout">Logout</button>
  </nav>
</template>
