export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore();
  if (!!authStore.token) return true;
  return navigateTo("/login");
});
