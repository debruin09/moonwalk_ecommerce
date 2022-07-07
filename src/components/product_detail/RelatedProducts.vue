<script setup lang="ts">
import { Product } from "../../stores/useCart";
interface Props {
  relatedProducts: Product[];
}
const props = defineProps<Props>();
</script>
<template>
  <div class="flex w-full flex-col bg-white">
    <h1 class="flex py-5 mx-5 font-bold text-2xl text-gray-800">RELATED PRODUCTS</h1>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
      <div class="flex flex-nowrap">
        <div v-for="prod in relatedProducts" :key="prod.id" class="inline-block px-3">
          <router-link :to="`/brand/${prod.data.brand}/${prod.id}`">
            <div
              class="w-56 h-56 max-w-xs overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-110"
            >
              <img class="w-full h-full object-cover" :src="prod.data.image" alt="" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}
</style>
