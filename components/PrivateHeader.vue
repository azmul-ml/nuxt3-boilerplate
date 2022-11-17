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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Anchor v-if="authStore.token" :to="localePath('/user')" class="dogerBlue nav-link">
              {{ $t("links.users") }}
            </Anchor>
          </li>
          <li class="nav-item">
            <Anchor v-if="authStore.token" :to="localePath('/about')" class="dogerBlue nav-link">
              {{ $t("links.about") }}
            </Anchor>
          </li>
          <li class="nav-item">
            <Anchor v-if="authStore.token" :to="localePath('/profile')" class="dogerBlue nav-link">{{
              $t("links.profile")
            }}</Anchor>
          </li>
          <li class="nav-item">
            <Anchor v-if="authStore.token" :to="localePath('/chart')" class="dogerBlue nav-link">{{
              $t("links.charts")
            }}</Anchor>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
          <li class="nav-item">
            <Anchor :to="localePath('/rendering')" class="color-dogerBlue nav-link">Rendering</Anchor>
          </li>
          <li class="nav-item">
            <Anchor :to="localePath('/plugins')" class="color-dogerBlue nav-link">Plugins</Anchor>
          </li>
          <li class="nav-item dropdown">
            <select v-model="selectedValue" class="nav-link dropdown-toggle" @change="onChange(selectedValue)">
              <option v-for="item in locales" :key="item.code" :value="item.code">
                {{ item.name }}
              </option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
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
