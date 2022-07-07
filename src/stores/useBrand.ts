import { defineStore } from "pinia";
import { db } from "../firebase/init";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { Product } from "../stores/useCart";
import { fromFirestore } from "../utils/firebaseUtils";
import { ShoesState } from "./useFirestore";

type BrandInitial = {
  state: "init";
};

type BrandIsLoading = {
  state: "loading";
};
type BrandLoadedSuccess = {
  state: "success";
  reposnse: {};
};
type BrandError = {
  state: "error";
  response: {};
};

type BrandState =
  | BrandInitial
  | BrandIsLoading
  | BrandLoadedSuccess
  | BrandError;

export const useBrandShoes = defineStore("brandShoes", {
  state: () => ({
    brand: {
      isLoading: false,
      shoes: [] as Product[],
      error: "",
    } as ShoesState,
  }),

  actions: {
    async getBrandfromPage(brandName: string | string[], quantity: number) {
      this.brand.shoes = [];
      await getDocs(
        query(collection(db, "all"), where("brand", "==", brandName), limit(5))
      )
        .then((snapshot) =>
          snapshot.docs.map((doc) => {
            this.brand.shoes.push({
              data: fromFirestore(doc.data()),
              id: doc.id,
              quantity: quantity,
            });
            this.brand.isLoading = true;
          })
        )
        .catch((err) => {
          this.brand.error = err;
          this.brand.isLoading = true;
        });
    },
    async getBrand(brandName: string) {
      this.brand.shoes = [];
      await getDocs(
        query(collection(db, "all"), where("brand", "==", brandName as string))
      )
        .then((snapshot) =>
          snapshot.docs.map((doc) => {
            this.brand.shoes.push({
              data: fromFirestore(doc.data()),
              id: doc.id,
              quantity: 0,
            });
            this.brand.isLoading = true;
          })
        )
        .catch((err) => {
          this.brand.error = err;
          this.brand.isLoading = true;
        });
    },
  },
});
