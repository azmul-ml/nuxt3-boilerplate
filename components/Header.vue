<script setup lang="ts">
const auth = useAuth();

function logout() {
  auth.value.token = null;
  navigateTo("/login")
}
</script>

<template>
  <nav class="bg-purple-700 text-white p-2 mb-2">
    <NuxtLink v-if="auth.token" to="/" class="pr-8">Home</NuxtLink>
    <NuxtLink v-if="auth.token" to="/user" class="pr-8">Users</NuxtLink>
    <NuxtLink v-if="auth.token" to="/about" class="pr-8">About</NuxtLink>
    <NuxtLink v-if="auth.token" to="/profile" class="pr-8">Profile</NuxtLink>
    <NuxtLink v-if="!auth.token" to="/login" class="pr-8">Login</NuxtLink>
    <NuxtLink v-if="!auth.token" to="/register" class="pr-8">Register</NuxtLink>
    <button v-if="auth.token" @click="logout" class="pr-8">Logout</button>
  </nav>
</template>
