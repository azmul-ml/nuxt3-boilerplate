<script setup lang="ts">
import * as authApi from '~/api/authApi';
import * as authType from '~/types/authType';

definePageMeta({
  layout: 'public',
});

const isRegisterLoading = ref<boolean>(false);
const localePath = useLocalePath();

const registerForm = reactive<authType.RegisterParamsType>({
  email: null,
  password: null,
});

async function submit() {
  if (isRegisterLoading.value) return;
  try {
    isRegisterLoading.value = true;
    await authApi.registerUser(registerForm);
    navigateTo(localePath('/login'));
  } catch (err) {
    console.log(err);
  } finally {
    isRegisterLoading.value = false;
  }
}
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
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          id="exampleInputPassword2"
          v-model="registerForm.password"
          type="password"
          class="form-control"
          placeholder="Enter Password"
        />
      </div>
      <button html-type="submit" class="btn btn-primary" :disabled="isRegisterLoading" @click.prevent="submit">
        <span v-if="isRegisterLoading">Loading...</span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>
