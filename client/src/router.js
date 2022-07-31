import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView";
//import ContactView from "@/views/ContactView";
import ConstructionView from "@/views/ConstructionView";
import CartView from "@/views/CartView";
import CheckoutView from "@/views/CheckoutView";
import ConfirmationView from "@/views/ConfirmationView";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home-view", component: HomeView },
    { path: "/category", component: CategoryView, props: true },
    { path: "/category/:name", component: CategoryView, props: true },
    {
      path: "/category/:name/:seg2",
      component: ConstructionView,
      props: true,
    },
    { path: "/book/", component: ConstructionView },
    { path: "/book/:name", component: ConstructionView, props: true },
    { path: "/book/:name/read", component: ConstructionView, props: true },
    { path: "/contact", component: ConstructionView },
    { path: "/latest", component: ConstructionView },
    { path: "/account", component: ConstructionView },
    { path: "/cart", component: CartView },
    { path: "/checkout", component: CheckoutView },
    { path: "/confirmation", component: ConfirmationView },
  ],
});
