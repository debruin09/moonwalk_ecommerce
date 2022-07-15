<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const emit = defineEmits(['close'])

const searcVal = ref('')

const router = useRouter()
const searchSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Searching....");
    router.push({ name: "QueryShoes", query: { search: searcVal.value } })
}

</script>

<template>
    <div class="hidden md:flex w-52 border-2 hover:border-gray-700  ease-in-out duration-500 transition">
        <input v-model="searcVal" type="text"
            class="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-200 bg-clip-padding  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
        <span
            class="flex items-center px-3 py-1.5 text-base font-normal bg-gray-200 text-gray-700 text-center whitespace-nowrap "
            id="basic-addon2">
            <svg :submit="searchSubmit" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search"
                class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                </path>
            </svg>
        </span>
    </div>
</template>
