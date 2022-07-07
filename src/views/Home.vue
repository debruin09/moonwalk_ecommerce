<script setup lang="ts">
import ShoesList from "../components/core/ShoesList.vue";
import LatestProducts from "../components/home/LatestProducts.vue";
import OurBrands from "../components/home/OurBrands.vue";
import { onMounted } from "@vue/runtime-core";
import { useAllShoes } from '../stores/useFirestore';

const allStore = useAllShoes();

onMounted(() => {
  document.title = "Home | Moonwalk Store";
  allStore.getAllShoes()

});
</script>

<template>
  <div class="min-h-screen font-mont">
    <div class="flex px-10 flex-col md:flex-col">
      <LatestProducts />
      <OurBrands />
      <ShoesList :shoes="allStore.all.shoes" />
    </div>
  </div>
</template> 
