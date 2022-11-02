export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth();
  if(auth.value.token) return true;
  return navigateTo("/login");
});
