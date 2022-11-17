<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

import * as authType from "~/types/authType";

const authStore = useAuthStore();
const { isLoading } = storeToRefs(authStore);
const { userLogin } = authStore;
const localePath = useLocalePath();

useHead({
  title: "Login Page",
});

definePageMeta({
  layout: "public",
  middleware: () => {
    const { token } = useAuthStore();
    if (token) navigateTo("/user");
  },
});

const loginForm = reactive<authType.LoginParamsType>({
  email: null,
  password: null,
});

/**
 * validation starts here
 */
const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, loginForm);

async function submit() {
  const result = await v$.value.$validate();

  if (!result) return;

  if (isLoading.value) return;
  try {
    isLoading.value = true;
    await userLogin(loginForm);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div>
    <form>
      <div class="container-xxl position-relative bg-white d-flex p-0">
        <!-- Sign In Start -->
        <div class="container-fluid">
          <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh">
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div class="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <a href="index.html" class="">
                    <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>MLBD</h3>
                  </a>
                  <h3>{{ $t("links.login") }}</h3>
                </div>
                <pre>
     email: eve.holt@reqres.in
     password: cityslicka
  </pre
                >
                <div class="form-floating mb-3">
                  <input
                    id="exampleInputEmail1"
                    v-model="loginForm.email"
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
                    id="exampleInputPassword1"
                    v-model="loginForm.password"
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
                <Button type="submit" class="btn-primary py-3 w-100 mb-4" :disabled="isLoading" @click.prevent="submit">
                  <span v-if="isLoading">Signing...</span> <span v-else>Sign In</span>
                </Button>
                <p class="text-center mb-0">
                  Don't have an Account?
                  <Anchor :to="localePath('/register')" class="color-dogerBlue nav-link">{{
                    $t("links.register")
                  }}</Anchor>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Sign In End -->
      </div>
    </form>
  </div>
</template>
