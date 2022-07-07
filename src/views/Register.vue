<script setup lang="ts">
// import { Ref, ref } from "@vue/reactivity";
// import { useRouter } from "vue-router";

// Create data / vars
// const router = useRouter();
// const phoneNum = ref(null);
// const password = ref(null);
// const confirmPassword = ref(null);
// const errorMsg : Ref<string | null> = ref("");

// Register function
// const register = async () => {
//   if (password.value === confirmPassword.value) {
//     try {
//       // const { error } = await supabase.auth.signUp({
//       //   phoneNum: phoneNum.value,
//       //   password: password.value,
//       // });
//       // if (error) throw error;
//       router.push({ name: "Login" });
//     } catch (error) {
//       errorMsg.value = `Error: ${error}`;
//       setTimeout(() => {
//         errorMsg.value = null;
//       }, 5000);
//     }

//     return;
//   }

//   errorMsg.value = "Error: Passwords do not match.";
//   setTimeout(() => {
//     errorMsg.value = null;
//   }, 5000);
// };
</script>


<template>
  <div class="max-w-screen-sm mx-auto px-4 py-10">
    <!-- Error Handling-->
    <!-- <div v-if="errorMsg" class="mb-10 p-4">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div> -->

    <!--Register -->
    <!-- <form @submit.prevent="register" class="p-8 flex flex-col mt-14">
      <h1 class="text-3xl text-at-light-green mb-4">Register</h1>

      <div class="flex flex-col mb-2">
        <label for="phoneNum" class="mb-1 text-sm">Phone Number</label>
        <input
          type="text"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="phoneNum"
          v-model="phoneNum"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="password" class="mb-1 text-sm">Password</label>
        <input
          type="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="password"
          v-model="password"
        />
      </div>

      <div class="flex flex-col mb-2">
        <label for="confirmPassword" class="mb-1 text-sm"
          >ConfirmPassword</label
        >
        <input
          type="password"
          required
          class="p-2 text-gray-500 focus:outline-none"
          id="confirmPassword"
          v-model="confirmPassword"
        />
      </div>

      <button
        type="submit"
        class="
          w-full
          mt-6
          py-2
          px-6
          rounded-full
          self-start
          text-sm text-white
          bg-black
          duration-200
          border-solid border-2 border-transparent
          hover:border-black hover:bg-white hover:text-black
        "
      >
        Register
      </button>

      <router-link class="text-sm mt-6 text-center" :to="{ name: 'Login' }"
        >Already have an account?
        <span class="font-bold">Login</span></router-link
      >
    </form> -->
  </div>
</template>

