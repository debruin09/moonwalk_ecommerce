 <script setup lang="ts">
import { Product } from '../../stores/useCart';

interface Props {
  shoe: Product
}

const props = defineProps<Props>()


</script>
<template>
  <router-link :to="`/brand/${shoe.data.brand}/${shoe.id}`">
  
    <div
      class="flex flex-col font-roboto overflow-hidden transition duration-500 hover:shadow-lg border-2 border-gray-300  w-full h-56 lg:h-full ">
      <img class="object-fill w-full h-28 lg:h-44" :src="shoe.data.image" alt="Shoe" />
      <div class="px-5 py-3">
        <div class="flex flex-row justify-between space-x-1">
          <p class="truncate font-extralight text-xs lg:text-base mb-2">{{ (shoe.data.name).toUpperCase() }}</p>
          <!-- CHANGE SALE PRICE LATER ON  -->
          <p v-if="shoe.data.salePrice === 0" class="font-bold text-xs text-red-500 lg:text-base mb-2">SALE</p>
        </div>
        <div class="text-gray-800 font-extralight text-sm mb-2">R{{ shoe.data.price.toFixed(2) }}</div>
      </div>
      <div class="bg-black text-white flex justify-center text-sm items-center lg:py-3 border duration-500 font-extralight h-full transition hover:bg-white hover:text-black">
        ADD TO CART
      </div>
    </div> 
  </router-link>
</template>

 