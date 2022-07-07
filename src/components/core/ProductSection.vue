<script setup lang="ts">
import ProductCard from "./ProductCard.vue"; 
import ProductCardSkeleton from "./ProductCardSkeleton.vue"; 
import { Product } from "../../stores/useCart";
import { useAllShoes } from "../../stores/useFirestore";

interface Props { sectionName: String, shoes: Product[] }
const props = defineProps<Props>()

const allStore = useAllShoes();
</script>
<template>
 <div v-if="allStore.all.isLoading">
    <div class="flex flex-col w-full mt-6 font-roboto text-2xl font-semibold">
      <div class="pt-5">{{(sectionName).toUpperCase()}}</div>
      <div class="pt-10  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div v-for="shoe in shoes" :key="shoe.id">
          <ProductCard :shoe="shoe" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex flex-col w-full mt-16">
      <div class="pt-5 ">{{sectionName}}</div>
      <div class="pt-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  </div>
</template>