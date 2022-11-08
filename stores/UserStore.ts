import { defineStore } from "pinia";
import * as userType from "~/types/userType";

export interface UserState {
  users: userType.UserType[] | undefined[];
}

const state = (): UserState => ({ users: [] });

const getters = {
  getUsers: (state): userType.UserType[] => state.users,
};

const actions = {
  setUsers(data) {
    this.users = data;
  },
};

export const useUsersStore = defineStore("UsersStore", {
  state,
  getters,
  actions,
  persist: {
    enabled: true,
    strategies: [],
  },
});
