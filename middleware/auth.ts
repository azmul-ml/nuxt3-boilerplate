export default () => {
  const { token } = useAuthStore();
  if (token) {
    return true;
  }

  if (!token) {
    navigateTo("/login");
  }

  return true;
};
