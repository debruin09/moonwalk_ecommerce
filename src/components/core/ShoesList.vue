<script setup lang="ts">
import ProductSection from "../core/ProductSection.vue";

import { useAllShoes } from "../../stores/useFirestore";
import { Product } from "../../stores/useCart";

interface Props { shoes: Product[] }
const props = defineProps<Props>()

const allStore = useAllShoes();


</script>

<template>
  <div class="flex px-3 flex-col w-full lg:2/3">
    <ProductSection :sectionName="'Nikes'" :shoes="allStore.nikes" />
    <ProductSection :sectionName="'Adidas'" :shoes="allStore.adidas" />
    <ProductSection :sectionName="'Jordans'" :shoes="allStore.jordans" />
    <ProductSection :sectionName="'Puma'" :shoes="allStore.puma" />
    <!-- <ProductSection :sectionName="'Converse'" :shoes="differentShoes.converse" /> -->
  </div>
</template>
