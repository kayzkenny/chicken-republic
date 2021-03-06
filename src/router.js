import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";
import Checkout from "./views/Checkout.vue";
import Admin from "./views/Admin.vue";
import Account from "./views/Account.vue";
import Orders from "./views/Orders.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin
    },
    {
      path: "/account",
      name: "account",
      component: Account
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
    }
  ]
});
