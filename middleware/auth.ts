export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn } = useAuthStore();
  if (isLoggedIn) return true;
  return navigateTo("/login");
});
