<script setup lang="ts">
import { storeToRefs } from "pinia";

useHead({
  title: "User List",
});

definePageMeta({
  middleware: ["auth"],
});

const { userState, loading, errorState } = storeToRefs(useUsersStore());
const { fetchUsers } = useUsersStore();
fetchUsers();
</script>

<template>
  <div>
    <p v-if="loading">Loading posts...</p>
    <p v-if="errorState">{{ errorState.message }}</p>
    <!-- Recent Sales Start -->
    <div class="container-fluid pt-4 px-4">
      <div class="bg-light text-center rounded p-4">
        <div class="d-flex align-items-center justify-content-between mb-4">
          <h6 class="mb-0">{{ $t("pageTitle.users") }}</h6>
          <button type="button" class="btn btn-primary" @click="navigateTo('/user/create')">Create User</button>
        </div>
        <div class="table-responsive">
          <table class="table text-start align-middle table-bordered table-hover mb-0">
            <thead>
              <tr class="text-dark">
                <th scope="col"><input class="form-check-input" type="checkbox" /></th>
                <th scope="col">Date</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in userState.users" :key="user.id">
                <td><input class="form-check-input" type="checkbox" /></td>
                <td>01 Jan 2045</td>
                <td>{{ user.first_name }} {{ user.last_name }}</td>
                <td>{{ user.email }}</td>
                <td><NuxtLink :to="`/user/${user?.id}`" class="btn btn-sm btn-primary" href="">Detail</NuxtLink></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Recent Sales End -->
  </div>
</template>
