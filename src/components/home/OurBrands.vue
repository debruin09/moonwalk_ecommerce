<script setup lang="ts">
import SelectBrandContainer from "./SelectBrandContainer.vue";
</script>
<template>
  <div class="z-0 mx-auto py-5 px-3">
    <div class="font-roboto text-2xl font-bold">OUR BRANDS</div>
    <div class="grid grid-cols-2 lg:grid-cols-5 grid-rows-3 lg:grid-rows-1 pt-7">
      <SelectBrandContainer :brandName="'Nike'">
        <img class="w-2/3" src="../../assets/brands/Nike.png" />
      </SelectBrandContainer>
      <SelectBrandContainer :brandName="'Adida'">
        <img class="w-2/3" src="../../assets/brands/Adida.png" />
      </SelectBrandContainer>
      <SelectBrandContainer :brandName="'Jordan'">
        <img class="w-2/3" src="../../assets/brands/Jordan.png" />
      </SelectBrandContainer>
      <SelectBrandContainer :brandName="'Puma'">
        <img class="w-2/3" src="../../assets/brands/Puma.png" />
      </SelectBrandContainer>
      <SelectBrandContainer :brandName="'Converse'">
        <img class="w-2/3" src="../../assets/brands/converse.png" />
      </SelectBrandContainer>
    </div>
  </div>
</template>
