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

const isRegisterLoading = ref<boolean>(false);

const registerForm = reactive<authType.RegisterParamsType>({
  email: null,
  password: null,
});

async function submit() {
  if (isRegisterLoading.value) return;
  try {
    isRegisterLoading.value = true;
    await authApi.registerUser(registerForm);
    navigateTo("/login");
  } catch (err) {
    console.log(err);
  } finally {
    isRegisterLoading.value = false;
  }
}
</script>

<template>
  <div>
    <h1>For Register use below credentials</h1>
    <pre>
    {
     email: eve.holt@reqres.in,
     password: pistol
    }
  </pre
    >
    <a-form @finish="submit" class="form">
      <label>
        Enter your email:
        <a-input
          type="text"
          v-model:value="registerForm.email"
          placeholder="Enter Email"
        />
      </label>
      <br />
      <label>
        Enter your password:
        <a-input
          type="text"
          v-model:value="registerForm.password"
          placeholder="Enter Password"
        />
      </label>
      <br />
      <a-button
        :disabled="isRegisterLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="primary"
        html-type="submit"
        @click.prevent="submit"
      >
        <span v-if="isRegisterLoading">Loading...</span>
        <span v-else>Submit</span>
      </a-button>
    </a-form>
  </div>
</template>
