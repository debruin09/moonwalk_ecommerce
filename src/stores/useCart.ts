import { defineStore } from "pinia";
import { computed } from "@vue/reactivity";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
}

export interface User {
  name: string;
  isSignedIn: boolean;
  data: UserData;
}

export interface ProductData {
  name: string;
  price: number;
  salePrice: number;
  size: string;
  brand: string;
  image: string;
}
export interface Product {
  data: ProductData;
  id: string;
  quantity: number;
}
export interface Promocode {
  val: number;
  discount: number;
}
export interface Cart {
  items: Product[];
  promocode: Promocode;
  user: User;
}


export const useCart = defineStore("cart", {
  state: () => ({
    cart: {
      items: [] as Product[],
      promocode: {
        val: 0,
        discount: 0,
      } as Promocode,
      user: { name: "St.Klue" } as User,
    } as Cart,
  }),
  getters: {
    cartTotalLength: (state) => {
      return state.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
    cartSubtotalPrice: (state) => {
      return state.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.data.price * curVal.quantity);
      }, 0);
    },
    cartTotalPrice: (state) => {
      const cartSubtotal = state.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.data.price * curVal.quantity);
      }, 0);
      if (typeof state.cart.promocode == "undefined") {
        return cartSubtotal;
      }
      const dis = cartSubtotal * state.cart.promocode.discount;
      return cartSubtotal - dis + 100;
    },
  },
  actions: {
    initializeStore() {
      if (localStorage.getItem("cart")) {
        this.cart = JSON.parse(localStorage.getItem("cart") || "");
      } else {
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },
    addToCart(item: Product) {
      if (this.cart.items.length === 0) {
        this.cart.items.push(item);
        this.increment(item);
      }
      // cart contains at least one item
      else {
        const hasKey = this.cart.items.some((i: Product) => {
          const key1: string = item.id.concat(item.data.size);
          const key2: string = i.id.concat(i.data.size);
          return key1 === key2;
        });
        // cart contains does not contain the size
        if (hasKey === false) {
          // This is a new item to add to the cart
          this.cart.items.push(item);
          this.increment(item);
        } else {
          this.cart.items = this.cart.items.map((i: Product) => {
            if (i.id + i.data.size === item.id + item.data.size)
              this.increment(i);
            return i;
          });
        }
      }
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    removeFromCart(item: Product) {
      this.cart.items = this.cart.items.filter((i: Product) => {
        const key1: string = item.id.concat(item.data.size);
        const key2: string = i.id.concat(i.data.size);
        return key1 !== key2;
      });
      this.updateCart();
      return this.cart.items;
    },
    increment(item: Product) {
      item.quantity += 1;
      this.updateCart();
    },
    decrementOrRemove(item: Product) {
      item.quantity -= 1;
      if (item.quantity === 0) this.removeFromCart(item);

      this.updateCart();
    },
    clearCart() {
      this.cart = { items: [], promocode: {} as Promocode, user: {} as User };
      this.updateCart()
    },
  },
});
