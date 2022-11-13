<script setup lang="ts">
import { storeToRefs } from "pinia";

import * as authType from "~/types/authType";

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);
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
    <h4>For Login use below credentials</h4>
    <pre>
    {
     email: eve.holt@reqres.in
     password: cityslicka
    }
  </pre
    >
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail1"
          v-model="loginForm.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword1"
          v-model="loginForm.password"
          type="password"
          class="form-control"
          placeholder="Enter Password"
        />
      </div>
      <button type="submit" class="btn btn-primary" :disabled="isLoading" html-type="submit" @click.prevent="submit">
        <span v-if="isLoading">Loading...</span> <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
