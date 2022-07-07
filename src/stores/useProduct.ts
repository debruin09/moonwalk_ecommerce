import { defineStore } from "pinia";
import { db } from "../firebase/init";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  DocumentData,
} from "firebase/firestore";
import { Product } from "../stores/useCart";
import { fromFirestore } from "../utils/firebaseUtils";

export interface ShoeState {
  isLoading: boolean;
  shoe: Product;
  error: string;
}



export const useProduct = defineStore("product", {
  state: () => ({
    product: {
      isLoading: false,
      shoe: {} as Product,
      error: "",
    },
  }),
  actions: {
    async getProduct(id: string) {
      await getDoc(doc(db, "all", id))
        .then((doc) => {
          this.product.shoe = {
            data: fromFirestore(doc.data() as DocumentData),
            quantity: 0,
            id: doc.id,
          };
          document.title = this.product.shoe.data.name + "| Moonwalk Store";
          this.product.isLoading = true;
        })
        .catch((err) => {
          this.product.error = err;
          this.product.isLoading = true;
        });
    },
  },
});
