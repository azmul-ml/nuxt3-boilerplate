<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import * as authApi from "~/api/authApi";
import * as authType from "~/types/authType";

definePageMeta({
  layout: "public",
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
    <h4>For Register use below credentials</h4>
    <pre>
    {
     email: eve.holt@reqres.in,
     password: pistol
    }
  </pre
    >

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          id="exampleInputEmail2"
          v-model="registerForm.email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter Email"
          @blur="v$.email.$touch"
        />
      </div>
      <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword2"
          v-model="registerForm.password"
          type="password"
          class="form-control"
          placeholder="Enter Password"
          @blur="v$.password.$touch"
        />
      </div>
      <div v-for="error of v$.password.$errors" :key="error.$uid" class="input-errors">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
      <button html-type="submit" class="btn btn-primary" :disabled="isRegisterLoading" @click.prevent="submit">
        <span v-if="isRegisterLoading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
