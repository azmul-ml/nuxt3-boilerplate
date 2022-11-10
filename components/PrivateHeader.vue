<script setup lang="ts">
const authStore = useAuthStore();
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const selectedValue = ref(locale);
const { logout } = useAuthStore();

function onChange(value: string) {
  navigateTo(switchLocalePath(value));
}
</script>

<template>
  <div class="header">
    <nav>
      <NuxtLink v-if="authStore.token" :to="localePath('/')" class="dogerBlue">
        {{ $t("links.home") }}
      </NuxtLink>
      <NuxtLink
        v-if="authStore.token"
        :to="localePath('/user')"
        class="dogerBlue"
      >
        {{ $t("links.users") }}
      </NuxtLink>
      <NuxtLink
        v-if="authStore.token"
        :to="localePath('/about')"
        class="dogerBlue"
      >
        {{ $t("links.about") }}
      </NuxtLink>
      <NuxtLink
        v-if="authStore.token"
        :to="localePath('/profile')"
        class="dogerBlue"
        >{{ $t("links.profile") }}</NuxtLink
      >
    </nav>
    <a-space>
      <a-button v-if="authStore.token" class="pr-8" @click="logout">{{
        $t("links.logout")
      }}</a-button>
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

<style lang="scss" scoped>
@import "assets/sass/variables";
.dogerBlue {
  color: $dogerBlue;
}
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
