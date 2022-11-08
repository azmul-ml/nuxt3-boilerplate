<script setup lang="ts">
import * as authApi from "~/api/authApi";
import * as authType from "~/types/authType";

useHead({
  title: "Login Page",
});

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
    const res = await authApi.loginUser(loginForm);
    if (res?.token) {
      auth.value.token = res.token;
      navigateTo("/");
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
        :disabled="isLoginLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="primary"
        html-type="submit"
        @click.prevent="submit"
      >
        <span v-if="isLoginLoading">Loading...</span> <span v-else>Submit</span>
      </a-button>
    </a-form>
  </div>
</template>
