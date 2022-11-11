import * as authType from '~/types/authType';

import { loginUser } from '~~/api/authApi';

export const useAuthStore = defineStore(
  'auth',
  () => {
    /**
     * States
     */
    const isLoading = ref(false);
    const isLoggedIn = ref(false);

    const router = useRouter();
    /**
     * initialize state from local storage to enable user to stay logged in
     */
    const token = useCookie<string | null>('token');

    const userLogin = async (payload: authType.LoginParamsType): Promise<authType.LoginResponseType> => {
      isLoading.value = true;
      const response = await loginUser(payload);

      /**
       * store auth details and jwt in local storage to keep user logged in
       * between page refreshes
       */
      token.value = response.token;
      isLoggedIn.value = true;
      isLoading.value = false;

      /**
       * redirect to home page
       */
      router.push('/user');
      return response;
    };

    const logout = () => {
      /**
       * reinitialize the states
       */
      token.value = null;
      isLoggedIn.value = false;

      /**
       * redirect to login
       */
      router.push('/login');
    };

    /**
     * returning states/actions/computed
     */
    return { isLoading, token, isLoggedIn, userLogin, logout };
  },
  {
    persist: {
      enabled: true,
      strategies: [],
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
