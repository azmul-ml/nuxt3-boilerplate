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
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NuxtLink :to="localePath('/login')" class="color-dogerBlue nav-link">{{ $t('links.login') }}</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="localePath('/register')" class="color-dogerBlue nav-link">{{
              $t('links.register')
            }}</NuxtLink>
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
