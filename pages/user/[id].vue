<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const route = useRoute();
const isUserUpdateLoading = ref<boolean>(false);
const user = ref<userType.UserType | null>(null);
const loading = ref<boolean>(false);

useHead({
  title: `User ${route.params.id} Details`,
});

definePageMeta({
  middleware: ["auth"],
});

onMounted(async () => {
  loading.value = true;
  const { data } = await userApi.getUserById(route.params.id);
  user.value = data.value?.data;
  loading.value = false;
});

async function submit() {
  if (isUserUpdateLoading.value) return;
  try {
    isUserUpdateLoading.value = true;
    await userApi.updateUser(route.params.id, user.value);
    navigateTo("/user");
  } catch (err) {
    console.log(err);
  } finally {
    isUserUpdateLoading.value = false;
  }
}

/**
 * validation starts here
 */
const rules = {
  email: { helpers: helpers.withMessage("Enter a valid email", required), email },
  first_name: { helpers: helpers.withMessage("Enter your name", required) },
};

const v$ = useVuelidate(rules, user);
</script>

<template>
  <div>
    <div class="container-fluid pt-4 px-4">
      <div class="row g-4">
        <div class="col-sm-12 col-xl-6">
          <div class="bg-light rounded h-100 p-4">
            <h3 class="mb-4">Edit User</h3>
            <Loader :is-loader="loading" />
            <form v-if="user" @submit.prevent="submit">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input
                  v-model="user.email"
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
                <input v-model="user.first_name" type="text" class="form-control" placeholder="Enter First Name" />
                <div v-for="error of v$.first_name.$errors" :key="error.$uid" class="input-errors">
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputSecondName">Last Name:</label>
                <input v-model="user.last_name" type="text" class="form-control" placeholder="Enter Last Name" />
              </div>

              <div class="mb-3">
                <label for="exampleInputFirstName">Avatar:</label>
                <input v-model="user.avatar" type="text" class="form-control" placeholder="Enter Avatar" />
              </div>

              <Button :disabled="isUserUpdateLoading" type="submit" class="btn-primary">
                <span v-if="isUserUpdateLoading">Submitting...</span>
                <span v-else>Submit</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
