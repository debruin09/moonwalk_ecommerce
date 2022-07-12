<script setup lang="ts">
import { querystring, querystringDecode } from '@firebase/util';
import { ref } from 'vue';
import { useRoute, useRouter } from "vue-router"
import { fromURLToQueryStr } from '../../utils/firebaseUtils';

const props = defineProps({
    visible: Boolean,
});


const router = useRouter()
const route = useRoute()

// const getUrl = route.params.queryStr as string

const picked = ref("");


// const { type, sortBy, order } = fromURLToQueryStr(getUrl)

const changePick = () => {
    router.push({ name: "QueryShoes", params: { queryStr: picked.value } })
}

</script>

<template>
    <Transition name="myModal">
        <div v-if="visible" class="modal-background flex flex-col transition-all bg-white px-3 py-2">
            <div class="flex justify-between py-5">
                <h2 class="font-bold text-2xl">Filter</h2>
                <vue-feather @click="$emit('close')" stroke="black" type="x"></vue-feather>
            </div>
            <div class="flex flex-col divide-y">
                <!--  Sort By  Price and Newest -->
                <div class="sort-by-wrapper py-5">
                    <h3 class="py-3">Sort By</h3>
                    <div class="flex items-center mb-2">
                        <input @change="changePick" id="sort" type="radio" name="newest" value="timeStamp" class="radio"
                            v-model="picked" />
                        <label for="sort" class="ml-2  text-black text-lg dark:text-gray-300">Newest</label>
                    </div>
                    <div class="flex items-center mb-2">
                        <input @change="changePick" id="hl" type="radio" name="hl" value="price-high-low" class="radio"
                            v-model="picked" />
                        <label for="hl" class="ml-2  text-black text-lg dark:text-gray-300">Price:
                            Hight-Low</label>
                    </div>
                    <div class="flex items-center mb-2">
                        <input @change="changePick" id="lh" type="radio" name="lh" value="price-low-high" class="radio"
                            v-model="picked" />
                        <label for="lh" class="ml-2 text-black text-lg dark:text-gray-300">Price:
                            Low-High</label>
                    </div>
                </div>
                <!-- Filter On Sale  -->
                <div class="on-sale-wrapper flex flex-col">
                    <h3 class="py-3">On Sale</h3>
                    <div class="flex items-center mb-2">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox" />
                                <span class="pl-2 text-lg label-text">Sale</span>
                            </label>
                        </div>
                    </div>
                </div>
                <!-- Filter By Brand  -->
                <div class="on-sale-wrapper flex flex-col">
                    <h3 class="py-3">Brands</h3>
                    <div class="flex items-center mb-2">
                        <div class="form-control">
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox" />
                                <span class="text-lg ">Nike</span>
                            </label>
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox" />
                                <span class="text-lg">Adida</span>
                            </label>
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox" />
                                <span class="text-lg">Puma</span>
                            </label>
                            <label class="label cursor-pointer">
                                <input type="checkbox" class="checkbox" />
                                <span class="text-lg">Converse</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>


<style>
.modal-background {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.3s ease;
}

.myModal-enter-from,
.myModal-leave-to {
    opacity: 0;
}

.myModal-enter-from .modal-container,
.myModal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

input[type="radio"]:checked+label span {
    background-color: black;
    box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked+label {
    color: black;
}
</style>