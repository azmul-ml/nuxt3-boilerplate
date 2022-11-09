<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const selectedValue = ref(locale);

function onChange(value: string) {
  navigateTo(switchLocalePath(value));
}
</script>

<template>
  <div class="header">
    <nav>
      <NuxtLink :to="localePath('/login')" class="pr-8">{{
        $t("links.login")
      }}</NuxtLink>
      <NuxtLink :to="localePath('/register')" class="pr-8">{{
        $t("links.register")
      }}</NuxtLink>
    </nav>
    <a-space>
      <a-select v-model:value="selectedValue" @change="onChange(selectedValue)">
        <a-select-option
          v-for="item in locales"
          :key="item.code"
          :value="item.code"
        >
          {{ item.name }}
        </a-select-option>
      </a-select>
    </a-space>
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
