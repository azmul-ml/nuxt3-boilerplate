// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import en from "./locales/en-US.json";
import ar from "./locales/ar.json";
import bn from "./locales/bn-BD.json";

export default defineNuxtConfig({
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
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,
    },
  },
  vite: {
    plugins: [
      /* ... */
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
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
});
