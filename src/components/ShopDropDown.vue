<script setup lang="ts">

const brands = ["nike", "jordan", "adida", "balenciaga"]

</script>


<template>
  <div class="dropdown inline-block relative">
    Brand
    <ul class="dropdown-menu absolute hidden z-10 text-gray-700 pt-1">
      <router-link
        class="bg-white hover:bg-gray-200 block whitespace-no-wrap"
        v-for="brand in brands"
        :key="brand"
        :to="{ name: 'Brand', params: { brand_slug: brand } }"
      >{{ brand }}</router-link>
    </ul>
  </div>
</template>


<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>