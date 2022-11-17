<script setup lang="ts">
import { storeToRefs } from "pinia";

const { logout } = useAuthStore();
const { isLoggedIn } = storeToRefs(useAuthStore());

const handleLogout = async () => {
  logout();
};
</script>

<template>
  <nav class="bg-purple-700 text-white p-2 mb-2">
    <Anchor v-if="isLoggedIn" to="/" class="pr-8">Home</Anchor>
    <Anchor v-if="isLoggedIn" to="/user" class="pr-8">Users</Anchor>
    <Anchor v-if="isLoggedIn" to="/about" class="pr-8">About</Anchor>
    <Anchor v-if="isLoggedIn" to="/profile" class="pr-8">Profile</Anchor>
    <Anchor v-if="isLoggedIn" to="/chart" class="pr-8">Charts</Anchor>
    <Anchor v-if="!isLoggedIn" to="/login" class="pr-8">Login</Anchor>
    <Anchor v-if="!isLoggedIn" to="/register" class="pr-8">Register</Anchor>
    <Button v-if="isLoggedIn" class="pr-8" @click="handleLogout">Logout</Button>
  </nav>
</template>
