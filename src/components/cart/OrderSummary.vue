<script setup lang="ts">
import { computed, reactive, ref, toRefs } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { usePromocodes } from '../../stores/useFirestore';
import { useCart, Promocode } from '../../stores/useCart';

const promocodeStore = usePromocodes()
const cartStore = useCart()

const promocode = reactive({ val: 0, discount: 0 })
const promoCodeMessage = ref("");

const allCodes = promocodeStore.promocodes.codes;

const checkAndGetPromoCode = computed(() => {
  // Check if it is in the database
  for (let index = 0; index < allCodes.length; index++) {
    if (allCodes[index].val === promocode.val) {
      const validPromocode = {
        val: allCodes[index].val,
        // Always 10% discount
        discount: 0.1,
      } as Promocode;
      return validPromocode;
    }
  }
  return {
    val: 0,
    discount: 0,
  } as Promocode;
});


onMounted(() => {
  promocodeStore.getDiscountCodes();
});

const applyPromoCode = () => {
  // Add to total
  cartStore.cart.promocode = checkAndGetPromoCode.value;
  if (checkAndGetPromoCode.value.discount == 0) {
    promoCodeMessage.value = "Invalid promo code!";
  } else {
    promoCodeMessage.value = "Promo code applied. Enjoy the discount!";
  }
  promocodeStore.promocodes.isLoading = true;
};
</script>

<template>
  <div id="summary" class="lg:w-1/3 p-10 border border-gray-300 bg-gray-200">
    <h1 class="font-bold text-2xl border-b pb-8">Order Summary</h1>
    <div class="flex justify-between mt-10 mb-5 lg:space-x-4">
      <span class="font-semibold text-sm uppercase">Subtotal</span>
      <span class="font-semibold text-sm">
        <slot name="subtotal" />
      </span>
    </div>
    <div>
      <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
      <select class="block p-2 text-gray-600 w-full text-sm">
        <option>Standard shipping - R100.00</option>
      </select>
    </div>
    <div class="flex flex-col py-10">
      <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
      <input v-model="cartStore.cart.promocode.val" type="text" id="promo" placeholder="Enter your code"
        class="p-2 text-sm w-full" />

      <button v-if="cartStore.cart.promocode.val !== 0" @click="applyPromoCode" class="
          bg-red-500
          hover:bg-red-600
          px-5
          py-2
          my-5
          text-sm text-white
          uppercase
        ">
        Apply
      </button>
      <button v-else disabled @click="applyPromoCode" class="
      rounded-lg
          bg-red-300
          cursor-not-allowed
          px-5
          py-2
          my-5
          text-sm text-white
          uppercase
        ">
        Apply
      </button>
      <span v-if="promocodeStore.promocodes.isLoading" class="px-5 font-semibold py-2 text-sm text-black uppercase">{{
        promoCodeMessage
      }}</span>
    </div>

    <div class="border-t">
      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
        <span>Total cost</span>
        <span>
          <slot name="total" />
        </span>
      </div>
      <router-link :to="{ name: 'Checkout' }">
        <button class="
            rounded-lg
            bg-black
            font-semibold
            hover:bg-white hover:text-black
            border
            hover:border-black
            py-3
            text-sm text-white
            uppercase
            w-full
          ">
          Checkout
        </button>
      </router-link>
    </div>
  </div>
</template>


