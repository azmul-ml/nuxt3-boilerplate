<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const selectedValue = ref(locale);
const { logout } = useAuthStore();

function onChange(value: string) {
  navigateTo(switchLocalePath(value));
}
</script>

<template>
  <div>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
      <NuxtLink to="/" class="navbar-brand d-flex d-lg-none me-4">
        <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
      </NuxtLink>
      <a href="#" class="sidebar-toggler flex-shrink-0">
        <i class="fa fa-bars"></i>
      </a>
      <form class="d-none d-md-flex ms-4">
        <input class="form-control border-0" type="search" placeholder="Search" />
      </form>
      <div class="navbar-nav align-items-center ms-auto">
        <div class="nav-item">
          <a href="#" class="nav-link" @click="logout">
            <img
              class="rounded-circle me-lg-2"
              src="@/assets/images/user.png"
              alt=""
              style="width: 40px; height: 40px"
            />
            <span class="d-none d-lg-inline-flex">{{ $t("links.logout") }}</span>
          </a>
        </div>
        <div class="nav-item dropdown">
          <select v-model="selectedValue" class="nav-link dropdown-toggle" @change="onChange(selectedValue)">
            <option v-for="item in locales" :key="item.code" :value="item.code">
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="nav-item dropdown">
          <select v-model="$colorMode.preference" class="nav-link dropdown-toggle">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>
