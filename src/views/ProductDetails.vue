 <script setup lang="ts">
 import { onMounted, reactive, ref, watch } from "vue";
 import { useRoute, useRouter } from "vue-router";
 import RelatedProducts from "../components/product_detail/RelatedProducts.vue";
 import { useCart, Product } from "../stores/useCart";
 import { useBrandShoes } from '../stores/useBrand';
 import { useProduct } from "../stores/useProduct";
 import NotificationMsg from "../components/product_detail/NotificationMsg.vue";
 import { shoeSizes } from "../utils/constants";
 
 export interface NotificationMessage {
   msg: string | null;
   type: string | null;
 }
 
 const store = useCart();
 
 // Fetching the clicked product from firestore and 
 // the related products 
 const brandStore = useBrandShoes()
 const productStore = useProduct()
 
 const notificationMsg: NotificationMessage = reactive({ msg: null, type: null });
 
 const selectedSize = ref("")
 
 const route = useRoute();
 const router = useRouter();
 
 // Route values
 const productId: string = route.params.productId.toString();
 const brandName = route.params.brandName;
 
 // Current chosen product
 const quantity = ref(1);
 
 
 // Get data
 onMounted(() => {
   productStore.getProduct(productId);
   brandStore.getBrandfromPage(brandName, quantity.value);
 });
 
 // Change when the size changes
 const updateShoeSize = (product: Product, size: string) => {
   selectedSize.value = size
   product.data.size = size;
 };
 
 watch(
   () => route.params.productId,
   (_, __) => {
     if (route.name === "Product") {
       productStore.getProduct(route.params.productId as string);
       brandStore.getBrandfromPage(brandName, quantity.value);
     } else {
       return {};
     }
   }
 );
 
 // add product to cart and direct to Cart page
 const buyProduct = () => {
   if (selectedSize.value === "") {
     notificationMsg.msg = "Please select a size!";
     notificationMsg.type = "error";
     setTimeout(() => {
       notificationMsg.msg = null;
     }, 3000);
   } else {
     const item: Product = {
       data: { ...productStore.product.shoe.data, size: selectedSize.value },
       id: productStore.product.shoe.id,
       quantity: productStore.product.shoe.quantity
     }
     store.addToCart(item);
     notificationMsg.msg = "The product was added to the cart!";
     notificationMsg.type = "success";
     setTimeout(() => {
       notificationMsg.msg = null;
     }, 3000);
     router.push({ name: "Cart" });
   }
 };
 
 // Add product to  the cart
 const addProduct = () => {
   if (selectedSize.value === "") {
     notificationMsg.msg = "Please select a size!";
     notificationMsg.type = "error";
     setTimeout(() => {
       notificationMsg.msg = null;
     }, 3000);
   } else {
     const item: Product = {
       data: { ...productStore.product.shoe.data, size: selectedSize.value },
       id: productStore.product.shoe.id,
       quantity: productStore.product.shoe.quantity
     }
     store.addToCart(item);
     notificationMsg.msg = "The product was added to the cart!";
     notificationMsg.type = "success";
     setTimeout(() => {
       notificationMsg.msg = null;
     }, 3000);
   }
 };
 </script>



<template>
  <div class="flex flex-row md:flex-col font-roboto " v-if="productStore.product.isLoading">
    <!-- Notify user too choose a size -->
    <NotificationMsg :notificationMsg="notificationMsg" />

    <!-- Product details Content -->
    <div class="min-h-screen flex flex-col p-10 ">
      <div class="flex flex-col md:flex-row">
        <div class="lg:flex-2 relative bg-gray-200">
          <img :src="productStore.product.shoe.data.image" class="inset-0 lg:py-16 w-full h-full object-cover" />
        </div>
        <form class="lg:flex-1 flex-col p-6">
          <div class="flex flex-col gap-y-2">
            <h1 class="flex-auto text-2xl font-semibold">{{ productStore.product.shoe.data.name }}</h1>
            <div class="text-xl font-semibold text-gray-500">R{{ productStore.product.shoe.data.price }}</div>
            <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">In stock</div>
          </div>
          <!--  Select Sizes  -->
          <div class="flex flex-col w-full mt-4 mb-6 ">
            <div class="grid grid-cols-3 gap-0">
              <div v-for="size in shoeSizes" :key="size">
                <div v-if="selectedSize === size" @click="updateShoeSize(productStore.product.shoe, size)"
                  class="flex bg-black text-white border p-5 font-roboto text-sm font-light justify-center  hover:bg-black hover:text-white border-black cursor-pointer">
                  {{ size }}
                </div>
                <div v-else @click="updateShoeSize(productStore.product.shoe, size)"
                  class="flex border p-5 font-roboto text-sm font-light justify-center border-gray-300 hover:bg-black hover:text-white hover:border-black cursor-pointer">
                  {{ size }}
                </div>
              </div>
            </div>
            <!-- <select v-model="size" @change="updateShoeSize(productStore.product.shoe)"
              class="text-xs w-full pl-3 pr-10 py-2 transition duration-100 ease-in-out border shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
              <option disabled selected>-Select size-</option>
              <option v-for="s in sizes" :key="s">{{ s }}</option>
            </select> -->

            <div class="py-2 text-sm text-gray-500 underline">Size Guide</div>
          </div>

          <div class="flex flex-col space-y-4 text-sm font-medium">
            <div class="space-x-3 flex">
              <button @click="buyProduct" class="w-full h-11 flex items-center justify-center bg-black text-white"
                type="button">Buy it now</button>
            </div>
            <div class="space-x-3 flex">
              <button @click="addProduct" class="w-full h-11 flex items-center justify-center border border-gray-300"
                type="button">Add to cart</button>
              <button class="flex items-center justify-center w-14 h-11 text-gray-400 border border-gray-300"
                type="button" aria-label="like">
                <svg width="20" height="20" fill="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
              <input class="w-12 h-14" type="number" min="1" v-model="quantity" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <RelatedProducts :relatedProducts="brandStore.brand.shoes" />
      </div>
    </div>
  </div>
  <div v-else class="min-h-screen">
    Loading...
  </div>
</template>