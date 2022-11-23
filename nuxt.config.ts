// https://v3.nuxtjs.org/api/configuration/nuxt.config
import en from "./locales/en-US.json";
import ar from "./locales/ar.json";
import bn from "./locales/bn-BD.json";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "My App",
      meta: [{ name: "description", content: "MLBD Nuxt3 Boilerplate" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css",
        },
      ],
    },
  },
  build: {},
  css: ["~/assets/sass/main.scss", "~/assets/css/bootstrap.min.css", "~/assets/css/style.css"],
  plugins: ["~/plugins/pinia-plugin-persist.client"],
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "definePiniaStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores", "helpers"],
  },
  publicRuntimeConfig: {
    baseURL: process.env.API_BASE_URL || "https://reqres.in",
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,
    },
  },
  vite: {
    plugins: [],
  },
  i18n: {
    locales: [
      { code: "en", name: "English", iso: "en-US", file: "en-US.json" },
      { code: "ar", name: "Arabic", iso: "ar", file: "ar.json" },
      { code: "bn", name: "Bangla", iso: "bn-BD", file: "bn-BD.json" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: { en, ar, bn },
    },
  },
  routeRules: {
    "/spa": { ssr: false },
    "/user/*": { ssr: false },
    "/swr": { swr: true },
    "/static": { static: true },
  },
  colorMode: {
    preference: "light",
    fallback: "light",
  },
});
