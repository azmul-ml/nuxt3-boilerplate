<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";

const isUserCreateLoading = ref<boolean>(false);

useHead({
  title: "Create User",
});

definePageMeta({
  middleware: ["auth"],
});

const userForm = reactive<userType.CreateUserType>({
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
});

async function submit() {
  if (isUserCreateLoading.value) return;
  try {
    isUserCreateLoading.value = true;
    await userApi.createUser(userForm);
  } catch (err) {
    console.log(err);
  } finally {
    isUserCreateLoading.value = false;
  }
}
</script>

<template>
  <div>
    <h1>Create User</h1>
    <a-form class="form" @finish="submit">
      <label>
        Enter your email:
        <a-input
          v-model:value="userForm.email"
          type="text"
          placeholder="Enter Email"
        />
      </label>
      <br />
      <label>
        Enter your First Name:
        <a-input
          v-model:value="userForm.first_name"
          type="text"
          placeholder="Enter first_name"
        />
      </label>
      <br />
      <label>
        Enter your Last Name:
        <a-input
          v-model:value="userForm.last_name"
          type="text"
          placeholder="Enter last_name"
        />
      </label>
      <br />
      <label>
        Enter your avatar:
        <a-input
          v-model:value="userForm.avatar"
          type="text"
          placeholder="Enter avatar"
        />
      </label>
      <br />
      <a-button
        :disabled="isUserCreateLoading"
        class="bg-blue-500 text-white font-bold py-2 px-4"
        type="primary"
        html-type="submit"
        @click.prevent="submit"
      >
        <span v-if="isUserCreateLoading">Loading...</span>
        <span v-else>Submit</span>
      </a-button>
    </a-form>
  </div>
</template>

<style>
.form input {
  margin-bottom: 12px;
}
</style>
