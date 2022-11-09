import { defineStore } from "pinia";
import * as userType from "~/types/userType";

export interface UserState {
  users: userType.UserType[] | undefined[];
}

export const useUsersStore = defineStore("UsersStore", {
  state: (): UserState => ({
    users: [],
  }),
  getters: {
    getUsers: (state: UserState) => state.users,
  },
  actions: {
    setUsers(data: userType.UserType[]) {
      this.users = data;
    },
  },
  persist: {
    enabled: true,
    strategies: [],
  },
});
