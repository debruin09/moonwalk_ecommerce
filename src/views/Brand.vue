<script setup lang="ts">
// import ShoesList from "../components/core/ShoesList.vue";
// import FilterCollapse from "../components/FilterCollapse.vue";
import { useRoute } from "vue-router";
import ProductCard from "../components/core/ProductCard.vue";
import { onMounted, watch } from "@vue/runtime-core";
import { useBrandShoes } from '../stores/useBrand';

//! Makes getBrand call but does not remove old query 
const store = useBrandShoes()

const route = useRoute();

const brandName = route.params.brandName as string;

onMounted(() => {
  store.getBrand(brandName);
});

watch(
  () => route.params.brandName,
  (_, __) => (route.name === "Brand" ? store.getBrand(brandName) : {})
);
</script>

<template>
  <div v-if="store.brand.isLoading" class="min-h-screen  px-10">
    <div class="flex flex-col w-full ">
      <div class="font-roboto text-2xl font-bold">{{( brandName).toUpperCase() }}</div>
      <div class="pt-5  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div v-for="shoe in store.brand.shoes" :key="shoe.id">
          <ProductCard :shoe="shoe" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="min-h-screen flex flex-col w-full ">
      <div class="pt-5 font-sans text-2xl font-bold">{{ brandName }}</div>
      <div class="pt-10 lg:p-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  </div>
</template>