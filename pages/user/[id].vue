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

const { data: user } = await useLazyAsyncData(`/users/${route.params.id}`, () =>
  userApi.getUserById(route.params.id)
);

async function submit() {
  if (isUserUpdateLoading.value) return;
  try {
    isUserUpdateLoading.value = true;
    await userApi.updateUser(route.params.id, user.value);
  } catch (err) {
    console.log(err);
  } finally {
    isUserUpdateLoading.value = false;
  }
}
</script>

<template>
  <div>
    User {{ id }}
    <form v-if="user" @submit.prevent="submit">
      <label>
        Enter your email:
        <input v-model="user.email" type="text" placeholder="Enter Email" />
      </label>
      <br />
      <label>
        Enter your First Name:
        <input
          v-model="user.first_name"
          type="text"
          placeholder="Enter first_name"
        />
      </label>
      <br />
      <label>
        Enter your Last Name:
        <input
          v-model="user.last_name"
          type="text"
          placeholder="Enter last_name"
        />
      </label>
      <br />
      <label>
        Enter your avatar:
        <input v-model="user.avatar" type="text" placeholder="Enter avatar" />
      </label>
      <br />
      <button
        :disabled="isUserUpdateLoading"
        class="bg-blue-500 text-white font-bold py-2 px-2"
        type="submit"
      >
        <span v-if="isUserUpdateLoading">Submitting...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
