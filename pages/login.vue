<script setup lang="ts">
import { storeToRefs } from "pinia";

import * as authType from "~/types/authType";

const authStore = useAuthStore();
const { isLoading, isLoggedIn } = storeToRefs(authStore);
const { userLogin } = authStore;
useHead({
  title: "Login Page",
});

definePageMeta({
  layout: "public",
});

const loginForm = reactive<authType.LoginParamsType>({
  email: null,
  password: null,
});

const localePath = useLocalePath();

async function submit() {
  if (isLoading.value) return;
  try {
    isLoading.value = true;
    await userLogin(loginForm);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div>
    <h1>For Login use below credentials</h1>
    <pre>
    {
     email: eve.holt@reqres.in
     password: cityslicka
    }
  </pre
    >
    <a-form class="form" :model="loginForm" @finish="submit">
      <a-form-item
        label="Email"
        name="email"
        :rules="[{ required: true, message: 'Please input your email!' }]"
      >
        <a-input
          v-model:value="loginForm.email"
          type="email"
          placeholder="Enter Email"
        />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input
          v-model:value="loginForm.password"
          type="text"
          placeholder="Enter Password"
        />
      </a-form-item>

      <a-button
        :disabled="isLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="primary"
        html-type="submit"
        @click.prevent="submit"
      >
        <span v-if="isLoading">Loading...</span> <span v-else>Submit</span>
      </a-button>
    </a-form>
  </div>
</template>
