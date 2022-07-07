<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

</script>


<template>
  <div class="max-w-screen-sm mx-auto px-4">
    <!-- Error Handling-->
    <!-- <div v-if="errorMsg" class="mb-10 p-4 rounded-md shadow-lg">
      <p class="text-red-500">{{ errorMsg }}</p>
    </div> -->

    <!--Login -->
    <!-- <form @submit.prevent="login" class="p-10 mt-14 flex flex-col"> -->
    <form class="p-10 flex flex-col">
      <h1 class="text-3xl text-at-light-green mb-4">Login</h1>
      <div class="mt-8">
        <div class="flex justify-between items-center">
          <div class="text-sm font-bold text-gray-700 tracking-wide">Email</div>
        </div>
        <input class="
            w-full
            text-lg
            py-2
            border-b border-gray-300
            focus:outline-none focus:border-indigo-500
          " type="text" required placeholder="Enter your email" id="email" />
      </div>

      <div class="mt-8">
        <div class="flex justify-between items-center">
          <div class="text-sm font-bold text-gray-700 tracking-wide">
            Password
          </div>
          <div>
            <a class="
                text-xs
                font-display font-semibold
                text-indigo-600
                hover:text-indigo-800
                cursor-pointer
              ">
              Forgot Password?
            </a>
          </div>
        </div>
        <input class="
            w-full
            text-lg
            py-2
            border-b border-gray-300
            focus:outline-none focus:border-indigo-500
          " type="password" required placeholder="Enter your password" id="password" />
      </div>

      <button type="submit" class="
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
        ">
        Login
      </button>

      <router-link class="text-sm mt-6 text-center" :to="{ name: 'Register' }">
        Don't have an account?
        <span class="font-bold">Register</span>
      </router-link>
    </form>
  </div>
</template>

