import { reactive } from 'vue';
import { getDocs, query, collection, where } from 'firebase/firestore'
import { useRoute } from "vue-router";
import { db } from "../firebase/init";
import { Ref } from '@vue/reactivity';

const state = reactive({
    data: [],
    loaded: false,
    errorMsg: "",
})


const methods = {
    async filterByBrand(state: any, brand: string, price: number, size: number) {
        try {
            const shoesRef = collection(db, "all");
            const q = query(shoesRef, where("brand", "==", brand), where("size", "==", size), where("price", "==", price));
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) =>
                state.data.push({ data: doc.data(), id: doc.id })
            );
            state.loaded = true;
        } catch (error) {
            state.errorMsg = error;
            console.log(`Error: ${state.errorMsg}`);
        }
    },
    async filterByPrice(state: any, price: number) {
        try {
            const shoesRef = collection(db, "all");
            const q = query(shoesRef, where("price", "==", price));
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) =>
                state.data.push({ data: doc.data(), id: doc.id })
            );
            state.loaded = true;
        } catch (error) {
            state.errorMsg = error;
            console.log(`Error: ${state.errorMsg}`);

        }
    },
    async filterBySize(state: any, size: number) {
        try {
            const shoesRef = collection(db, "all");
            const q = query(shoesRef, where("size", "==", size));
            const querySnapshot = await getDocs(q);
            querySnapshot.docs.map((doc) =>
                state.data.push({ data: doc.data(), id: doc.id })
            );
            state.loaded = true;
        } catch (error) {
            state.errorMsg = error;
            console.log(`Error: ${state.errorMsg}`);

        }
    },
}

export default {
    state,
    methods,
}

