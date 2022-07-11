<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import useFilter from "../composables/useFilter";
import { ref } from "vue";

const filteredData = ref([]);
const queryStr = ref(null);

onMounted(() => {
  filteredData.value = useFilter.state.data;
});

// Constants
const filterRangeOptionsData = [
  { l: 0, u: 501 },
  { l: 500, u: 1001 },
  { l: 1000, u: 1501 },
  { l: 1500, u: "" },
];

const filterBySizeData = ["UK3", "UK4", "UK5", "UK6", "UK7", "UK8", "UK9"];

// reactive data
const filteredRangeList = ref([]);

const filteredSizesList = ref([]);

const router = useRouter();

const filterByBrand = (e: any) => {
  router.push({
    name: "FilterShoes",
    params: { queryString: queryStr.value },
  });
};
</script>

<template>
  <div class="w-full pr-16 pt-5">
    <h1 class="text-lg pb-5">Filters</h1>
    <div class="shadow-md">
      <!-- <div class="tab w-full overflow-hidden border-t">
        <input
          class="trail absolute opacity-0"
          id="tab-multi-one"
          type="checkbox"
          name="tabs"
        />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-multi-one"
          >Brand</label
        >
       
         <div
          class="
            flex flex-col
            tab-content
            overflow-hidden
            border-l-2
            bg-gray-100
            border-black
            leading-normal
          "
        >
         <div v-for="brand in filterByBrandsData" :key="brand">
            <label class="inline-flex items-center pl-3">
              <input
                @change.prevent="filterByBrand"
                type="checkbox"
                v-model="filteredBrandsList"
                :value="brand"
              />
              <span class="ml-2">{{ brand }}</span>
            </label>
          </div>
        </div>
      </div>-->
      <!-- Filter by price -->
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="trail absolute opacity-0"
          id="tab-multi-two"
          type="checkbox"
          name="tabs"
        />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-multi-two"
          >Price</label
        >
        <div
          class="
            flex flex-col
            tab-content
            overflow-hidden
            border-l-2
            bg-gray-100
            border-black
            leading-normal
          "
        >
          <div v-for="option in filterRangeOptionsData" :key="option.l">
            <label class="inline-flex items-center pl-3">
              <!-- <input
                @change.prevent="filterByPrice"
                type="checkbox"
                v-model="filteredRangeList"
                :value="option.l"
              /> -->
              <span v-if="option.u !== ''" class="ml-2"
                >R{{ option.l }} - R{{ option.u }}</span
              >
              <span v-else class="ml-2">over R{{ option.l }}</span>
            </label>
          </div>
        </div>
      </div>
      <!-- Filter by size -->
      <div class="tab w-full overflow-hidden border-t">
        <input
          class="trail absolute opacity-0"
          id="tab-multi-three"
          type="checkbox"
          name="tabs"
        />
        <label
          class="block p-5 leading-normal cursor-pointer"
          for="tab-multi-three"
          >Size</label
        >
        <div
          class="
            flex flex-col
            tab-content
            overflow-hidden
            border-l-2
            bg-gray-100
            border-black
            leading-normal
          "
        >
          <!-- <div v-for="size in filterBySizeData" :key="size">
            <label class="inline-flex items-center pl-3">
              <input
                 @change.prevent="filterBySize" 
                type="checkbox"
                v-model="filteredSizesList"
                :value="size"
              />
              <span class="ml-2">{{ size }}</span>
            </label>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>



 <style scoped>
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  padding: 1.25rem; /*.p-5*/
  border-left-width: 2px; /*.border-l-2*/
  background-color: #f8fafc; /*.bg-gray-100 */
  color: black; /*.text-indigo*/
}
/* Icon */
.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
/* Icon formatting - closed */
.tab .trail + label::after {
  content: "+";
  font-weight: bold; /*.font-bold*/
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
.tab input[type="radio"] + label::after {
  content: "\25BE";
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
  content: "-";
  transform: rotate(360deg);
  color: black; /*.text-grey-lightest*/
}
.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  background-color: black; /*.bg-indigo*/
  color: #f8fafc; /*.text-grey-lightest*/
}
</style> 