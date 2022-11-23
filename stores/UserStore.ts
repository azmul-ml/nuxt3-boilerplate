import * as userType from "~/types/userType";
import * as userApi from "~/api/userApi";

export interface UserState {
  users: userType.UserType[] | undefined[];
  loading: boolean;
  error: any;
}

export const useUsersStore = defineStore(
  "UsersStore",
  () => {
    const userState = ref({ users: [] as userType.UserType[] });
    const loading = ref(false);
    const errorState = ref<any>(null);

    const fetchUsers = async () => {
      userState.value.users = [];
      loading.value = true;

      const res = await userApi.fetchUsers();
      const { data, error, pending } = res;
      userState.value.users = data?.value?.data;
      errorState.value = error.value;
      loading.value = pending.value;
    };

    return { userState, loading, errorState, fetchUsers };
  },
  {
    persist: {
      enabled: true,
      strategies: [],
    },
  },
);

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot));
}
