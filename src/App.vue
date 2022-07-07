<script setup lang="ts">
import Footer from "./components/Footer.vue";
import { useCart } from "./stores/useCart"
import { onMounted } from '@vue/runtime-core';
import Navbar from "./components/Navbar.vue";

const cartState = useCart();

onMounted(() => {
 cartState.initializeStore();
})

</script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>
