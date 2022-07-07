import { reactive, computed, ref } from 'vue'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/init";
import { defineStore } from 'pinia';
import { User, Cart } from './useCart';

export interface CheckoutStore {
    user: User,
    cart: Cart,
}

export interface CheckoutState {
    isSubmitting: boolean,
    data: CheckoutStore,
    error: string
}


export const useCheckout = defineStore('checkout', {
    state: () => ({
        checkout: {
            isSubmitting: false,
            data: {} as CheckoutStore,
            error: "",
        } as CheckoutState,
    }),
    actions: {
        validateEmail(value: string) {
            // if the field is empty
            if (!value) {
                return 'This field is required';
            }
            // if the field is not a valid email
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (!regex.test(value)) {
                return 'This field must be a valid email';
            }
            // All is good
            return true;
        },
        isEmpty(value: string) {
            if (value !== "") {
                return 'This field is required';
            }
        },
        async postData(values: any, handleSubmit: (values: any) => void) {
            handleSubmit(values);
            // handleSubmit((values) => {
            //     console.log(values);
            // })
            // try {
            //     // Add a new document with a generated id.
            //     if (!userData.address) {
            //         errors.value.push("Address can't be empty")
            //     }
            //     const docRef = await addDoc(collection(db, "users"), userData).then(() => {
            //         methods.clearCart(state)
            //     });
            // } catch (error) {
            //     errors.value.forEach((e) => { console.log(e) })
            // } finally {
            //     isLoading.value = true

            // }
        }
    }
})
