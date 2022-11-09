import { defineStore } from "pinia";
import * as userType from "~/types/userType";
import * as userApi from "~/api/userApi";

export interface UserState {
  users: userType.UserType[] | undefined[];
  loading: boolean;
  error: any;
}

export const useUsersStore = defineStore("UsersStore", {
  state: (): UserState => ({
    users: [],
    loading: false,
    error: null,
  }),
  getters: {
    getUsers: (state: UserState) => state.users,
  },
  actions: {
    setUsers(data: userType.UserType[]) {
      this.users = data;
    },
    async fetchUsers() {
      this.users = [];
      this.loading = true;

      try {
        this.users = await userApi.fetchUsers();
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [],
  },
});
