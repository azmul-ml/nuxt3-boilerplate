import { defineStore } from "pinia";

export interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore("AuthStore", {
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    getToken: (state: AuthState) => state.token,
  },
  actions: {
    setToken(token: string | null): void {
      this.token = token;
    },
  },
  persist: {
    enabled: true,
    strategies: [],
  },
});
