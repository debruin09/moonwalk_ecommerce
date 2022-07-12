import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Brand from "../views/Brand.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Checkout from "../views/Checkout.vue";
import Cart from "../views/Cart.vue";
import QueryShoes from "../views/QueryShoes.vue";
// import FilterShoes from '../views/FilterShoes.vue'
// import { computed } from 'vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/brand/:brandName/:productId/",
    name: "Product",
    component: ProductDetails,
  },
  {
    path: "/brand/:brandName/",
    name: "Brand",
    component: Brand,
  },
  {
    path: "/q/:queryStr/",
    name: "QueryShoes",
    component: QueryShoes,
  },
  {
    path: "/cart/checkout",
    name: "Checkout",
    component: Checkout,
    // meta: {
    //   requiresAuth: truFilterCollapsee,
    // }
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },

  // {
  //   path: '/account',
  //   name: 'Account',
  //   component: Account,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// const user = computed(() =>
//   store.state.user
// )

// router.beforeEach((to, from, next) => {
//   if (to.name === 'Checkout' && !user.value) {
//     next({ name: 'Login', query: { to: to.path } })
//   }
//   else {
//     next()
//   }
// })

export default router;
