<script setup lang="ts">
interface Props {
  brandName: string
}
const props = defineProps<Props>()

</script>
<template>
  <router-link :to="{ name: 'Brand', params: { brandName: props.brandName } }">
    <!-- <router-link :to="{ name: 'FilterShoes', params: { queryString: 'brand=' + queryStr + '%7c' } }">-->
    <div
      class="flex items-center justify-center transform object-cover w-full h-full transition duration-500 hover:scale-125 hover:shadow-2xl p-2 hover:bg-gray-100 cursor-pointer"
    >
      <slot />
    </div>
  </router-link>
</template>
