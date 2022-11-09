import { defineStore } from "pinia";

export interface AuthState {
  token: string | null;
}

const state = (): AuthState => ({ token: null });

const getters = {
  getToken: (state: AuthState) => state.token,
};

const actions = {
  setToken(token: string | null): void {
    this.token = token;
  },
};

export const useAuthStore = defineStore("AuthStore", {
  state,
  getters,
  actions,
  persist: {
    enabled: true,
    strategies: [],
  },
});
