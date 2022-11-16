<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import * as authApi from "~/api/authApi";
import * as authType from "~/types/authType";

definePageMeta({
  layout: "public",
  middleware: () => {
    const { token } = useAuthStore();
    if (token) navigateTo("/user");
  },
});

const isRegisterLoading = ref<boolean>(false);
const localePath = useLocalePath();

const registerForm = reactive<authType.RegisterParamsType>({
  email: null,
  password: null,
});

async function submit() {
  const result = await v$.value.$validate();

  if (!result) return;

  if (isRegisterLoading.value) return;
  try {
    isRegisterLoading.value = true;
    await authApi.registerUser(registerForm);
    navigateTo(localePath("/login"));
  } catch (err) {
    console.log(err);
  } finally {
    isRegisterLoading.value = false;
  }
}

/**
 * validation starts here
 */
const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, registerForm);
</script>

<template>
  <div>
    <form>
      <!-- Sign Up Start -->
      <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh">
          <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <NuxtLink to="/">
                  <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>MLBD</h3>
                </NuxtLink>
                <h3>Sign Up</h3>
              </div>
              <pre>
     email: eve.holt@reqres.in,
     password: pistol
  </pre
              >
              <div class="form-floating mb-3">
                <input
                  id="exampleInputEmail2"
                  v-model="registerForm.email"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  @blur="v$.email.$touch"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
              <div class="form-floating mb-4">
                <input
                  id="exampleInputPassword2"
                  v-model="registerForm.password"
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                  @blur="v$.password.$touch"
                />
                <label for="floatingPassword">Password</label>
              </div>
              <div v-for="error of v$.password.$errors" :key="error.$uid" class="input-errors">
                <div class="error-msg">{{ error.$message }}</div>
              </div>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <div class="form-check">
                  <input id="exampleCheck1" type="checkbox" class="form-check-input" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <a href="">Forgot Password</a>
              </div>
              <button
                html-type="submit"
                class="btn btn-primary py-3 w-100 mb-4"
                :disabled="isRegisterLoading"
                @click.prevent="submit"
              >
                <span v-if="isRegisterLoading">Loading...</span>
                <span v-else>{{ $t("links.register") }}</span>
              </button>
              <p class="text-center mb-0">
                Already have an Account?
                <NuxtLink :to="localePath('/login')" class="color-dogerBlue nav-link">{{ $t("links.login") }}</NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Sign Up End -->
    </form>
  </div>
</template>
