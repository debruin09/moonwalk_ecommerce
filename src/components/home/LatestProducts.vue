<script setup lang="ts">
import ProductCardSkeleton from '../core/ProductCardSkeleton.vue';
import { useLatestShoes } from '../../stores/useFirestore';
import { onMounted } from "@vue/runtime-core";
import NewArrivalsCard from './NewArrivalsCard.vue';

const latestStore = useLatestShoes();

onMounted(() => {
  document.title = "Home | Moonwalk Store";

  latestStore.getLatestShoes()

});
</script>

<template>
  <div class="flex py-5 px-3 flex-col w-full bg-gray-100">
    <div class="pt-5 font-roboto  text-2xl font-bold">NEW ARRIVALS</div>
    <div v-if="!latestStore.latest.isLoading" class="pt-10  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
      <ProductCardSkeleton />
    </div>
    <div v-else class="pt-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <div v-for="shoe in latestStore.latest.shoes" :key="shoe.id">
        <NewArrivalsCard :shoe="shoe" />
      </div>
    </div>
  </div>
</template>
