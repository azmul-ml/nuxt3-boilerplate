<style>
form {
  width: 300px;
}

.form input {
  margin-bottom: 12px;
}

.form button {
  margin-bottom: 12px;
}
</style>

<script setup lang="ts">
import * as authApi from "~/api/authApi";
import * as authType from "~/types/authType";

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
    <form @submit.prevent="submit" class="form">
      <label>
        Email:
        <a-input
          type="text"
          v-model:value="loginForm.email"
          placeholder="Enter Email"
        />
      </label>
      <br />
      <label>
        Password:
        <a-input
          type="text"
          v-model:value="loginForm.password"
          placeholder="Enter Password"
        />
      </label>
      <br />
      <a-button
        :disabled="isLoginLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="primary"
        @click.prevent="submit"
      >
        <span v-if="isLoginLoading">Loading...</span> <span v-else>Submit</span>
      </a-button>
    </form>
  </div>
</template>
