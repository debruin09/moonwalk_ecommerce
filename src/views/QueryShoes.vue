<script setup lang="ts">
// import ShoesList from "../components/core/ShoesList.vue";
// import FilterCollapse from "../components/FilterCollapse.vue";
import { useRoute } from "vue-router";
import ProductCard from "../components/core/ProductCard.vue";
import { onMounted, watch } from "@vue/runtime-core";
import { useBrandShoes } from '../stores/useBrand';
import { useFilter } from '../stores/useFilter';
import { fromURLToQueryStr } from '../utils/firebaseUtils'

//! Makes getBrand call but does not remove old query
// const store = useFilter()

// const route = useRoute();

// const q = route.params.queryStr as string;

// onMounted(() => {
//     store.getSortData(fromURLToQueryStr(q));
// });

// watch(
//     () => route.params.queryStr,
//     (_, __) => (route.name === "QueryShoes" ? store.getSortData(fromURLToQueryStr(q)) : {})
// );
</script>

<template>
    Query Shoes Page
    <!-- <div v-if="store.filterState.isLoading" class="min-h-screen  px-10">
        <div class="flex flex-col w-full ">
            <div class="pt-5  grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                <div v-for="shoe in store.filterState.shoes" :key="shoe.id">
                    <ProductCard :shoe="shoe" />
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="min-h-screen flex flex-col w-full ">
            <div class="pt-10 lg:p-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    </div> -->
</template>