import { defineStore } from "pinia"
import { db } from "../firebase/init";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { Product } from '../stores/useCart';
import { fromFirestore, fromFirestoreCodes } from "../utils/firebaseUtils";
import { Promocode } from './useCart';

export interface ShoesState {
    isLoading: boolean,
    shoes: Product[],
    error: string
}

export const useLatestShoes = defineStore('latestShoes', {
    state: () => ({
        latest: {
            isLoading: false,
            shoes: [] as Product[],
            error: "",
        } as ShoesState,
    }),
    actions: {
        async getLatestShoes() {
            this.latest.shoes = []
            await getDocs(query(collection(db, "all"), limit(4))).then((snapshot) => snapshot.docs.map((doc) => {
                this.latest.shoes.push({ data: fromFirestore(doc.data()), id: doc.id, quantity: 0 })
                this.latest.isLoading = true
            })
            ).catch((err) => {
                this.latest.error = err
                this.latest.isLoading = true
            })
           
        }

    }
})
export const useAllShoes = defineStore('allShoes', {
    state: () => ({
        all: {
            isLoading: false,
            shoes: [] as Product[],
            error: "",
        } as ShoesState,
    }),
    getters: {
        nikes: (state) => filterShoesComp(state.all.shoes, "Nike"),
        adidas: (state) => filterShoesComp(state.all.shoes, "Adida"),
        jordans: (state) => filterShoesComp(state.all.shoes, "Jordan"),
        puma: (state) => filterShoesComp(state.all.shoes, "Puma")
    },
    actions: {
        async getAllShoes() {
            this.all.shoes = []
            await getDocs(collection(db, "all"))
                .then((s) => {
                    s.docs.map((doc) =>
                        this.all.shoes.push({ data: fromFirestore(doc.data()), id: doc.id, quantity: 0 })
                    );
                    this.all.isLoading = true
                })
                .catch((err) => {
                    this.all.error = err
                    this.all.isLoading = true
                })
        }
    }
})


const filterShoesComp = (shoes: Product[], name: String) => {
    return shoes
        .filter((shoe) => {
            return shoe.data.brand === (name).toUpperCase();
        })
        .slice(0, 4);
};


export const usePromocodes = defineStore('promocodes', {
    state: () => ({
        promocodes: {
            isLoading: false,
            codes: [] as Promocode[],
            error: "",
        },
    }),
    actions: {
        async getDiscountCodes() {
            await getDocs(collection(db, "codes")).then((snapshot) =>
                snapshot.docs.map((doc) => {
                    this.promocodes.codes.push(fromFirestoreCodes(doc.data()))
                    this.promocodes.isLoading = true
                })).catch((err) => {
                    this.promocodes.error = err
                    this.promocodes.isLoading = true
                })
        }
    }
})

