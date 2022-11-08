// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

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
});
