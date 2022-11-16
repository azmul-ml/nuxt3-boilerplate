<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
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
  const result = await v$.value.$validate();

  if (!result) return;

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
  email: { helpers: helpers.withMessage("Enter a valid email", required), email },
  first_name: { helpers: helpers.withMessage("Enter your name", required) },
};

const v$ = useVuelidate(rules, userForm);
</script>

<template>
  <div>
    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
          <div class="bg-light rounded h-100 p-4">
            <h3 class="mb-4">Create User</h3>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input
                  v-model="userForm.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                  @blur="v$.email.$touch"
                />
                <div
                  v-for="error of v$.email.$errors"
                  :key="error.$uid"
                  class="input-errors"
                  @blur="v$.first_name.$touch"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputFirstName">First Name:</label>
                <input v-model="userForm.first_name" type="text" class="form-control" placeholder="Enter First Name" />
                <div v-for="error of v$.first_name.$errors" :key="error.$uid" class="input-errors">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputSecondName">Last Name:</label>
                <input v-model="userForm.last_name" type="text" class="form-control" placeholder="Enter Last Name" />
              </div>

              <div class="mb-3">
                <label for="exampleInputFirstName">Avatar:</label>
                <input v-model="userForm.avatar" type="text" class="form-control" placeholder="Enter Avatar" />
              </div>

              <button :disabled="isUserCreateLoading" class="btn btn-primary" type="button" @click.prevent="submit">
                <span v-if="isUserCreateLoading">Submiting...</span>
                <span v-else>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
