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
      { code: "en", name: "English", iso: "en-US", file: "en-US.js" },
      { code: "ar", name: "Arabic", iso: "ar", file: "ar.js" },
      { code: "bn", name: "Bangla", iso: "bn-BD", file: "bn-BD.js" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    vueI18n: {
      legacy: false,
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en: {
          links: {
            about: "About",
            home: "Home",
            users: "Users",
            profile: "Profile",
            logout: "Logout",
            register: "Register",
            login: "Login",
          },
          pageTitle: {
            home: "Home Page",
            about: "About Page",
            users: "All Users",
            profile: "Profile Page",
          },
        },
        ar: {
          links: {
            about: "من نحن",
            home: "الرئيسية",
            users: "المستخدمين",
            profile: "ملف التعريف",
            login: "تسجيل الدخول",
            logout: "تسجيل الخروج",
            register: "تسجيل الاشتراك",
          },
          pageTitle: {
            home: "الصفحة الرئيسية",
            about: "صفحة من نحن",
            users: "قائمة المستخدمين",
            profile: "صفحة ملف التعريف",
          },
        },
        bn: {
          links: {
            about: "আমাদের সম্পর্কে",
            home: "হোম পেজ",
            users: "ব্যবহারকারীদের",
            profile: "প্রোফাইল",
            login: "প্রবেশ করুন",
            logout: "প্রস্থান",
            register: "নিবন্ধন",
          },
          pageTitle: {
            home: "হোম পেজ",
            about: "আমাদের সম্পর্কে পাতা",
            users: "সকল ব্যবহারকারী",
            profile: "প্রোফাইল পাতা",
          },
        },
      },
    },
  },
});
