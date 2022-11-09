import { Endpoints } from "./../api/apiConstant";
import * as authType from "~/types/authType";

import { defineStore, acceptHMRUpdate } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  /**
   * States
   */
  const isLoading = ref(false);
  const isLoggedIn = ref(false);

  const { baseURL } = useRuntimeConfig();
  const router = useRouter();
  /**
   * initialize state from local storage to enable user to stay logged in
   */
  const token = useCookie<{ name: string }>("token");

  const userLogin = async (
    payload: authType.LoginParamsType
  ): Promise<authType.LoginResponseType> => {
    isLoading.value = true;
    const response = await usePost(
      `${baseURL}/${Endpoints.AUTH_LOGIN}`,
      payload
    );

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
    router.push("/");
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
    router.push("/login");
  };

  /**
   * returning states/actions/computed
   */
  return { isLoading, token, isLoggedIn, userLogin, logout };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
