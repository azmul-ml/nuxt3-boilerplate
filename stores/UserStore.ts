import * as userType from '~/types/userType';
import * as userApi from '~/api/userApi';

export interface UserState {
  users: userType.UserType[] | undefined[];
  loading: boolean;
  error: any;
}

export const useUsersStore = defineStore(
  'UsersStore',
  () => {
    const userState = reactive({ users: [] as userType.UserType[] });
    const loading = ref(false);
    const errorState = ref<any>(null);

    const setUsers = (data: userType.UserType[]) => {
      userState.users = data;
    };
    const fetchUsers = async () => {
      userState.users = [];
      loading.value = true;

      try {
        userState.users = await userApi.fetchUsers();
      } catch (error: any) {
        errorState.value = error;
      } finally {
        loading.value = false;
      }
    };

    return { userState, loading, errorState, fetchUsers, setUsers };
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
