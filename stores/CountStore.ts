import { defineStore } from "pinia";

const state = () => ({ count: 0, name: "Azmul Hossain" })

const getters = {
  doubleCount: (state) => state.count * 2,
}

const actions = {
  increment() {
    this.count++;
  },
}

export const useCounterStore = defineStore("CountStore", {
  state,
  getters,
  actions,
  persist: {
    enabled: true,
    strategies: [],
  },
});
