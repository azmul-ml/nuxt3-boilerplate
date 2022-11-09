// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["assets/css/tailwind.css"],
  meta: {
    title: "Nuxt3 course",
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  plugins: ["~/plugins/pinia-plugin-persist.client"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
          ["defineStore", "definePiniaStore", "acceptHMRUpdate"],
        ],
      },
    ],
  ],
  imports: {
    dirs: ["stores", "helpers"],
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_BASE_URL || "https://reqres.in",
  },
});
