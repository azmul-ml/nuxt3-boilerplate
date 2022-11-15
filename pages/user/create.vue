<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";

const isUserCreateLoading = ref<boolean>(false);

useHead({
  title: "Create User",
});

definePageMeta({
  middleware: ["auth"],
});

const localePath = useLocalePath();

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
    console.log(userForm);
    await userApi.createUser(userForm);
    navigateTo(localePath("/user"));
  } catch (err) {
    console.log(err);
  } finally {
    isUserCreateLoading.value = false;
  }
}

/**
 * validation starts here
 */
const rules = {
  email: { required, email },
  first_name: { required },
};

const v$ = useVuelidate(rules, userForm);
</script>

<template>
  <div>
    <h1>Create User</h1>
    <form class="form" @finish="submit">
      <div class="form-group">
        <label for="exampleInputEmail1">Email:</label>
        <input
          v-model="userForm.email"
          type="email"
          class="form-control"
          placeholder="Enter email"
          @blur="v$.email.$touch"
        />
      </div>
      <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors" @blur="v$.first_name.$touch">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName">First Name:</label>
        <input v-model="userForm.first_name" type="text" class="form-control" placeholder="Enter First Name" />
      </div>
      <div v-for="error of v$.first_name.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputSecondName">Last Name:</label>
        <input v-model="userForm.last_name" type="text" class="form-control" placeholder="Enter Last Name" />
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName">Avatar:</label>
        <input v-model="userForm.avatar" type="text" class="form-control" placeholder="Enter Avatar" />
      </div>
      <button :disabled="isUserCreateLoading" class="btn btn-primary" type="button" @click.prevent="submit">
        <span v-if="isUserCreateLoading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
