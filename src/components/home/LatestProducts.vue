<script setup lang="ts">
import ProductCardSkeleton from '../core/ProductCardSkeleton.vue';
import { useLatestShoes } from '../../stores/useFirestore';
import { onMounted } from "@vue/runtime-core";
import NewArrivalsCard from './NewArrivalsCard.vue';
import LatestProductSkeleton from './LatestProductSkeleton.vue';

const latestStore = useLatestShoes();

onMounted(() => {
  document.title = "Home | Moonwalk Store";

  latestStore.getLatestShoes()

});
</script>

<template>
  <div class="flex py-5 flex-col w-full bg-gray-100">
    <div class="pt-5 font-roboto  px-3 text-2xl font-bold">NEW ARRIVALS</div>
    <div v-if="!latestStore.latest.isLoading" class="pt-10  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
      <LatestProductSkeleton />
    </div>
    <div v-else class="pt-10  lg:grid-cols-4 ">
      <div class="flex w-full flex-col bg-white">
        <h1 class="flex py-5 mx-5 font-bold text-2xl text-gray-800">RELATED PRODUCTS</h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap">
            <div v-for="shoe in latestStore.latest.shoes" :key="shoe.id" class="inline-block px-3">
               <NewArrivalsCard :shoe="shoe" />
              <!-- <router-link :to="`/brand/${shoe.data.brand}/${shoe.id}`">
                <div
                  class="w-56 h-56 max-w-xs overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-110">
                  <img class="w-full h-full object-cover" :src="shoe.data.image" alt="" />
                </div>
              </router-link> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div v-for="shoe in latestStore.latest.shoes" :key="shoe.id">
        <NewArrivalsCard :shoe="shoe" />
      </div> -->
    </div>
  </div>
</template>
