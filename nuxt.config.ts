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
  plugins: [
    '~/plugins/pinia-plugin-persist.client'
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          ['defineStore', 'definePiniaStore']
        ],
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.API_BASE_URL,
    }
  },
});
