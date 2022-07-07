<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useCheckout } from "../stores/useCheckout";
import { useCart } from "../stores/useCart";
//! Add required to fields / Fields

const cartStore = useCart()
// const checkoutStore = useCheckout()

// checkoutStore.checkout.isSubmitting = isSubmitting.value

// onMounted(() => {
//   document.title = "Checkout | Moonwalk Store";
// });

</script>

<template>
  <div class="p-12 mx-auto">
    <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
      <div class="flex flex-col md:w-full">
        <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address</h2>

        <form class="justify-center w-full mx-auto">
          <div class="space-x-0 lg:flex lg:space-x-4">

            <div class="w-full lg:w-1/2">
              <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">
                First Name
              </label>
              <input name="firstName" type="text" placeholder="First Name" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />

            </div>

            <div class="w-full lg:w-1/2">
              <label for="lastName" class="block mb-3 text-sm font-semibold text-gray-500">
                Last Name
              </label>
              <input name="lastName" type="text" placeholder="Last Name" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />

            </div>


            <div class="w-full lg:w-1/2">
              <label for="phone" class="block mb-3 text-sm font-semibold text-gray-500">
                Phone Number
              </label>
              <input name="phone" type="text" placeholder="Last Name" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />

            </div>
          </div>


          <div class="mt-4">
            <div class="w-full">
              <label for="Email" class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
              <input name="email" type="email" placeholder="Email" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />
            </div>
          </div>


          <div class="mt-4">
            <div class="w-full">
              <label for="address" class="block mb-3 text-sm font-semibold text-gray-500">Home Address</label>
              <textarea required class="
                  w-full
                  px-4
                  py-3
                  text-xs
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " name="address" cols="20" rows="4" placeholder="Address"></textarea>
            </div>

          </div>

          <div class="space-x-0 lg:flex lg:space-x-4">

            <div class="w-full lg:w-1/2">
              <label for="city" class="block mb-3 text-sm font-semibold text-gray-500">City/Town</label>
              <input name="city" type="text" placeholder="City" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />

            </div>


            <div class="w-full lg:w-1/2">
              <label for="postcode" class="block mb-3 text-sm font-semibold text-gray-500">Postcode</label>
              <input name="postcode" type="text" placeholder="Post Code" class="
                  w-full
                  px-4
                  py-3
                  text-sm
                  border border-gray-300
                  rounded
                  lg:text-sm
                  focus:outline-none focus:ring-1 focus:ring-blue-600
                " />

            </div>
          </div>


          <div class="relative pt-3 xl:pt-6">
            <label for="note" class="block mb-3 text-sm font-semibold text-gray-500">
              Notes (Optional)
            </label>
            <textarea name="note" class="
                flex
                items-center
                w-full
                px-4
                py-3
                text-sm
                border border-gray-300
                rounded
                focus:outline-none focus:ring-1 focus:ring-blue-600
              " rows="4" placeholder="Notes for delivery"></textarea>
          </div>
        </form>
        <!-- <Field type="hidden" name="merchant_id" value="10000100" />
          <Field type="hidden" name="merchant_key" value="46f0cd694581a" />
          <Field type="hidden" name="return_url" value="http://localhost:3000/return" />
          <Field type="hidden" name="cancel_url" value="http://localhost:3000/cancel" />
          <Field type="hidden" name="notify_url" value="http://localhost:3000/notify" />
          <Field type="hidden" name="amount" value="250.00" />
          <Field type="hidden" name="item_name" value="Test Product" /> -->
        <input type="submit" class="w-full px-6 py-2 my-2 text-white bg-black hover:bg-gray-900" value="Process" />

        <!-- </div>

      <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
        <div class="pt-12 md:pt-0 2xl:ps-4">
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>R{{ cartStore.cartTotalPrice.toFixed(2) }}</span>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
