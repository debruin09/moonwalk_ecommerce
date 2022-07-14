<script setup lang="ts">
import { useRoute } from "vue-router";
import ProductCard from "../components/core/ProductCard.vue";
import ProductCardSkeleton from "../components/core/ProductCardSkeleton.vue";
import { onMounted, ref, watch } from "@vue/runtime-core";
import { useFilter } from "../stores/useFilter";
import { fromURLToQueryStr } from "../utils/firebaseUtils";
import FilterModal from "../components/product_detail/FilterModal.vue";

const animatedModalVisible = ref(false);

//! Makes getBrand call but does not remove old query
const store = useFilter();

const route = useRoute();


const qOrderBy = route.query.orderBy as string;
const qOrder = route.query.order as string;
const q = qOrderBy.concat("-").concat(qOrder)

onMounted(() => {
    store.getSortData(fromURLToQueryStr(q));
    watch(
        () => route.query,
        (_, __) => (route.name === "QueryShoes" ? store.getSortData(fromURLToQueryStr(q)) : {})
    );
});

</script>

<template>
    <div v-if="store.filterState.isLoading" class="min-h-screen">
        <div class="flex flex-col w-full">
            <div class="flex justify-between border">
                <div class="flex items-center pl-4">
                    <span>{{ store.filterState.shoes.length }} Results</span>
                </div>

                <div
                    class="flex items-center justify-center border rounded-full px-3 py-1 m-3 bg-gray-200 active:bg-gray-300">
                    <vue-feather @click="animatedModalVisible = true" stroke="black" type="filter"></vue-feather>
                </div>
                <Teleport to="body">
                    <FilterModal :visible="animatedModalVisible" @close="animatedModalVisible = false" />
                </Teleport>
            </div>

            <div class="px-10 py-5 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                <div v-for="shoe in store.filterState.shoes" :key="shoe.id">
                    <ProductCard :shoe="shoe" />
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="min-h-screen flex flex-col w-full">
            <div class="pt-10 lg:p-10 grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5">
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
                <ProductCardSkeleton />
            </div>
        </div>
    </div>
</template>
