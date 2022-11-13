<script setup lang="ts">
import * as userApi from "~/api/userApi";

const route = useRoute();
const id = computed(() => route.params.id);
const isUserUpdateLoading = ref<boolean>(false);

useHead({
  title: `User ${route.params.id} Details`,
});

definePageMeta({
  middleware: ["auth"],
});

const { data: user } = await useLazyAsyncData(`/users/${route.params.id}`, () => userApi.getUserById(route.params.id));

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
