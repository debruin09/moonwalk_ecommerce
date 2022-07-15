import { defineStore, _StoreWithActions } from "pinia";
import { db } from "../firebase/init";
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  OrderByDirection,
} from "firebase/firestore";
import { Product } from "../stores/useCart";
import { fromFirestore } from "../utils/firebaseUtils";
import { ShoesState } from "./useFirestore";

interface FilterError {
  state: "error";
  message: "";
}

interface NewestShoes {
  type?: string;
  sortBy: string;
  slug?: string;
  order: OrderByDirection;
}
interface PriceFiler {
  type?: string;
  sortBy: string;
  slug?: string;
  order: OrderByDirection;
}

export type SortQuery = NewestShoes | PriceFiler;

export const useFilter = defineStore("filterShoes", {
  state: () => ({
    filterState: {
      isLoading: false,
      shoes: [] as Product[],
      error: "",
    } as ShoesState,
  }),
  actions: {
    // Searching a query in the search bar
    async searchQuery(queryStr: string) {
      this.filterState.shoes = [];
      await getDocs(query(collection(db, "all"), where("name", "==", queryStr)))
        .then((snapshot) =>
          snapshot.docs.map((doc) => {
            this.filterState.shoes.push({
              data: fromFirestore(doc.data()),
              id: doc.id,
              quantity: 0,
            });
            this.filterState.isLoading = true;
          })
        )
        .catch((err) => {
          this.filterState.error = err;
          this.filterState.isLoading = true;
        });
    },
    // async getFilterData(queryStr: string | string[]) {
    //   this.filterState.shoes = [];
    //   const filterArray
    //   await getDocs(
    //     query(collection(db, "all"), where("brand", "==", brandName), limit(5))
    //   )
    //     .then((snapshot) =>
    //       snapshot.docs.map((doc) => {
    //         this.filterState.shoes.push({
    //           data: fromFirestore(doc.data()),
    //           id: doc.id,
    //           quantity: 0,
    //         });
    //         this.filterState.isLoading = true;
    //       })
    //     )
    //     .catch((err) => {
    //       this.filterState.error = err;
    //       this.filterState.isLoading = true;
    //     });
    // },
    // Implement sort
    async getSortData(queryStr: SortQuery) {
      this.filterState.shoes = [];
      try {
      const qSnap = await getDocs(
        query(
          collection(db, "all"),
          orderBy(queryStr.sortBy, queryStr.order),
          limit(10)
        )
      );
      qSnap.docs.map((doc) => {
        this.filterState.shoes.push({
          data: fromFirestore(doc.data()),
          id: doc.id,
          quantity: 0,
        });
        this.filterState.isLoading = true;
      });} catch(e) {
        console.log("This was the error ", e);
        
      }
    },
  },
});
