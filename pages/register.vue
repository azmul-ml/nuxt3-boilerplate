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
    <form @submit.prevent="submit">
      <label>
        Enter your email:
        <input
          type="text"
          v-model="registerForm.email"
          placeholder="Enter Email"
        />
      </label>
      <br />
      <label>
        Enter your password:
        <input
          type="text"
          v-model="registerForm.password"
          placeholder="Enter Password"
        />
      </label>
      <br />
      <button
        :disabled="isRegisterLoading"
        class="bg-blue-500 text-white py-1 px-2 mt-4"
        type="submit"
      >
        <span v-if="isRegisterLoading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
