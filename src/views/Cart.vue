<script setup lang="ts">
import CartItem from "../components/cart/CartItem.vue";
import OrderSummary from "../components/cart/OrderSummary.vue";
import { useCart } from "../stores/useCart";

const store = useCart();

</script>


<template>
  <div class=" lg:pt-10  min-h-screen bg-light-grey">
    <div v-if="store.cartTotalLength !== 0" class="flex flex-col w-full shadow-md lg:flex-row  lg:px-20">
      <div class="lg:w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-5">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">
            {{ store.cartTotalLength }} Item(s)
          </h2>
        </div>

        <CartItem v-for="item in store.cart.items" :key="(item.id + item.data.size)" :initialItem="item"
          v-on:removeFromCart="store.removeFromCart" />

        <!-- Continue shopping routing -->
        <router-link :to="{ name: 'Home' }" class="flex font-semibold text-red-600 text-sm mt-10">
          <svg class="fill-current mr-2 text-red-600 w-4" viewBox="0 0 448 512">
            <path
              d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </router-link>
      </div>

      <OrderSummary>
        <template v-slot:subtotal>R{{ store.cartSubtotalPrice.toFixed(2) }}</template>
        <template v-slot:total>R{{ store.cartTotalPrice.toFixed(2) }}</template>
      </OrderSummary>
    </div>
    <div class="w-auto text-lg font-roboto font-light p-5" v-else>
      <p>IT LOOKS LIKE YOUR CART IS EMPTY.</p>
      <br />
      <router-link :to="{ name: 'Home' }">
        <p class=" text-red-500 border hover:bg-red-500 hover:text-white">Back to shopping</p>
      </router-link>
    </div>
  </div>
</template>

