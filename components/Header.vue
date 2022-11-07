<script setup lang="ts">
const auth = useAuth();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const selectedValue = ref(locale);

function logout() {
  auth.value.token = null;
  navigateTo(localePath("/login"));
}

function onChange(value: string) {
  navigateTo(switchLocalePath(value));
}
</script>

<template>
  <div class="header">
    <nav>
      <NuxtLink v-if="auth.token" :to="localePath('/')" class="pr-8">{{
        $t("links.home")
      }}</NuxtLink>
      <NuxtLink v-if="auth.token" :to="localePath('/user')" class="pr-8">{{
        $t("links.users")
      }}</NuxtLink>
      <NuxtLink v-if="auth.token" :to="localePath('/about')" class="pr-8">{{
        $t("links.about")
      }}</NuxtLink>
      <NuxtLink v-if="auth.token" :to="localePath('/profile')" class="pr-8">{{
        $t("links.profile")
      }}</NuxtLink>
      <NuxtLink v-if="!auth.token" :to="localePath('/login')" class="pr-8">{{
        $t("links.login")
      }}</NuxtLink>
      <NuxtLink v-if="!auth.token" :to="localePath('/register')" class="pr-8">{{
        $t("links.register")
      }}</NuxtLink>
    </nav>
    <a-button v-if="auth.token" class="pr-8" @click="logout">{{ $t("links.logout") }}</a-button>
    <select
      v-model="selectedValue"
      @change="onChange(selectedValue)"
      class="bg-blue-500"
    >
      <option v-for="item in locales" :key="item.code" :value="item.code">
        {{ item.name }}
      </option>
    </select>
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
