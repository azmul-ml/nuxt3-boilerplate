<script setup lang="ts">
import { storeToRefs } from "pinia";

import * as authType from "~/types/authType";

const authStore = useAuthStore();
const { isLoading, isLoggedIn } = storeToRefs(authStore);
const { userLogin } = authStore;

const isLoginLoading = ref<boolean>(false);
const auth = useAuth();

const loginForm = reactive<authType.LoginParamsType>({
  email: null,
  password: null,
});

async function submit() {
  if (isLoginLoading.value) return;
  try {
    isLoginLoading.value = true;
    const { token } = await userLogin(loginForm);
    if (token) {
      auth.value.token = token;
    }
  } catch (err) {
    console.log(err);
  } finally {
    isLoginLoading.value = false;
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
    <form @submit.prevent="submit">
      <label>
        Email:
        <input
          type="text"
          v-model="loginForm.email"
          placeholder="Enter Email"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="text"
          v-model="loginForm.password"
          placeholder="Enter Password"
        />
      </label>
      <br />
      <button
        :disabled="isLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="submit"
      >
        <span v-if="isLoading">Loading...</span> <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
