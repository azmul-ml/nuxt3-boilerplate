<script setup lang="ts">
const auth = useAuth();

function logout() {
  auth.value.token = null;
  navigateTo("/login");
}
</script>

<template>
  <div class="header">
    <nav>
      <NuxtLink v-if="auth.token" to="/" class="pr-8">Home</NuxtLink>
      <NuxtLink v-if="auth.token" to="/user" class="pr-8">Users</NuxtLink>
      <NuxtLink v-if="auth.token" to="/about" class="pr-8">About</NuxtLink>
      <NuxtLink v-if="auth.token" to="/profile" class="pr-8">Profile</NuxtLink>
      <NuxtLink v-if="!auth.token" to="/login" class="pr-8">Login</NuxtLink>
      <NuxtLink v-if="!auth.token" to="/register" class="pr-8"
        >Register</NuxtLink
      >
    </nav>
    <a-button v-if="auth.token" class="pr-8" @click="logout">Logout</a-button>
  </div>
</template>

<style>
nav {
  padding: 10px 0;
}
nav a {
  margin-right: 10px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
