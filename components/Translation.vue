<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const selectedValue = ref(locale);

function onChange(value: string) {
  navigateTo(switchLocalePath(value));
}
</script>

<template>
  <div>
    <select v-model="selectedValue" class="nav-link dropdown-toggle" @change="onChange(selectedValue)">
      <option v-for="item in locales" :key="item.code" :value="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
