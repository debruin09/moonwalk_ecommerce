import { reactive, computed, ref } from 'vue'
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/init";

export default function useCheckout() {
    const errors = ref([]);

    const isLoading = ref(false);

    const userData = reactive({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        zipcode: '',
        city: '',
        items: [],
    })

    //! Add: Create an anonomous user account with firebase
    const postData = async (state) => {
        try {
            // Add a new document with a generated id.
            
            if (!userData.address) {
                errors.value.push("Address can't be empty")
            }
            
            const docRef = await addDoc(collection(db, "users"), userData).then(() => {
                methods.clearCart(state)
            });

        } catch (error) {
            errors.value.forEach((e) => { console.log(e) })
        } finally {
            isLoading.value = true

        }
    };


    return {
        userData,
        postData,
    }


}