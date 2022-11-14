<script setup lang="ts">
import * as userApi from "~/api/userApi";
import * as userType from "~/types/userType";
import Error from "~/components/error";
import { reactive } from "vue";

const route = useRoute();
const id = computed(() => route.params.id);
const isUserUpdateLoading = ref<boolean>(false);
const user = ref<userType.UserType | null>(null);
const apiError = reactive<{ hasError: boolean; message: string } | null>({ hasError: false, message: "" });

useHead({
  title: `User ${route.params.id} Details`,
});

definePageMeta({
  middleware: ["auth"],
});

onMounted(async () => {
  try {
    const { data } = await userApi.getUserById(route.params.id);
    user.value = data.value.data;
  } catch (error) {
    apiError.hasError = true;
    apiError.message = "user fetching error";
  }
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
</script>

<template>
  <div>
    <h2>User {{ id }}</h2>
    <Error v-if="apiError.hasError" :show-default-error="true" />
    <form v-if="user" @submit.prevent="submit">
      <div class="form-group">
        <label for="exampleInputEmail1">Enter your email:</label>
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName"> Enter your First Name: :</label>
        <input v-model="user.first_name" type="text" class="form-control" placeholder="Enter first_name" />
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName"> Enter your Last Name: :</label>
        <input v-model="user.last_name" type="text" class="form-control" placeholder="Enter last_name" />
      </div>
      <div class="form-group">
        <label for="exampleInputFirstName"> Enter your avatar :</label>
        <input v-model="user.avatar" type="text" class="form-control" placeholder="Enter avatar" />
      </div>
      <button :disabled="isUserUpdateLoading" type="submit" class="btn btn-primary">
        <span v-if="isUserUpdateLoading">Submitting...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
