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
    <p v-if="errorState">{{ errorState.message }}</p>
    <!-- Recent Sales Start -->
    <div class="pt-4 px-4">
      <div class="bg-slate-50 text-center rounded p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="mb-0">{{ $t("pageTitle.users") }}</h3>
          <Button type="button" class="btn-primary" :to="'/user/create'">Create User</Button>
        </div>
        <div>
          <table class="w-100 table-auto border-separate border-spacing-2 border-2 border-slate-300 mb-0">
            <thead>
              <tr>
                <th class="p-2 border-2 border-slate-300"><input class="form-check-input" type="checkbox" /></th>
                <th class="p-2 border-2 border-slate-300">Date</th>
                <th class="p-2 border-2 border-slate-300">Name</th>
                <th class="p-2 border-2 border-slate-300">Email</th>
                <th class="p-2 border-2 border-slate-300">Action</th>
              </tr>
            </thead>
            <Loader :is-loader="loading" />
            <tbody v-if="!loading && userState.users && userState.users.length > 0">
              <tr v-for="user in userState.users" :key="user.id">
                <td class="p-2 border-2 border-slate-300"><input class="form-check-input" type="checkbox" /></td>
                <td class="p-2 border-2 border-slate-300">01 Jan 2045</td>
                <td class="p-2 border-2 border-slate-300">{{ user.first_name }} {{ user.last_name }}</td>
                <td class="p-2 border-2 border-slate-300">{{ user.email }}</td>
                <td class="p-2 border-2 border-slate-300">
                  <Anchor :to="`/user/${user?.id}`" class="btn btn-sm btn-primary">Detail</Anchor>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Recent Sales End -->
  </div>
</template>
