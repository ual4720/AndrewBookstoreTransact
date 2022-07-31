import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";

Vue.use(Vuex);
export const CART_STORAGE_KEY = "cart";
export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategoryName: "",
    selectedCategoryBooks: [],
    favoriteBooks: [],
    cart: new ShoppingCart(),
  },
  mutations: {
    SET_CATEGORIES(state, newCategories) {
      state.categories = newCategories;
    },
    SELECT_CATEGORY(state, categoryName) {
      state.selectedCategoryName = categoryName;
    },
    SET_SELECTED_CATEGORY_BOOKS(state, categoryBooks) {
      state.selectedCategoryBooks = categoryBooks;
    },
    SET_FAVORITE_BOOKS(state, favoriteBooks) {
      state.favoriteBooks = favoriteBooks;
    },
    ADD_TO_CART(state, book) {
      state.cart.addItem(book, 1);
    },
    UPDATE_CART_QUANTITY(state, cartItem) {
      //console.log(cartItem.book + " quant:" + cartItem.quantity);
      state.cart.update(cartItem.book, cartItem.quantity);
    },
    EMPTY_CART(state) {
      state.cart.clear();
    },
    SET_CART(state, shoppingCart) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCart));
      let newCart = new ShoppingCart();
      shoppingCart.items.forEach((item) => {
        newCart.addItem(item.book, item.quantity);
      });
      state.cart = newCart;
    },
  },
  actions: {
    fetchCategories(context) {
      //const vm = this;
      ApiService.fetchCategories()
        .then((categories) => {
          console.log("Data: " + categories);
          //vm.categories = categories;
          context.commit("SET_CATEGORIES", categories);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    selectCategory(context, categoryName) {
      context.commit("SELECT_CATEGORY", categoryName);
    },
    fetchSelectedCategoryBooks(context, category) {
      //const vm = this;
      ApiService.fetchSelectedCategoryBooks(category)
        .then((categoryBooks) => {
          console.log("selected Books: " + categoryBooks);
          //vm.selectedBooks = categoryBooks;
          context.commit("SET_SELECTED_CATEGORY_BOOKS", categoryBooks);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    fetchFavoriteBooks(context, min = 1001, max = 1005) {
      let topCategories = ApiService.getRandomCategories(min, max);
      let books = [];
      topCategories.forEach((category) => {
        ApiService.fetchSelectedCategorySuggestedBooksById(category, 1)
          .then((data) => {
            books.push(data[0]);
          })
          .then(function () {
            context.commit("SET_FAVORITE_BOOKS", books);
          })
          .catch((reason) => {
            console.log("Error: " + reason);
          });
      });
    },
    addToCart(context, book) {
      context.commit("ADD_TO_CART", book);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    updateCartQuantity(context, cartItem) {
      context.commit("UPDATE_CART_QUANTITY", cartItem);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    emptyCart(context) {
      context.commit("EMPTY_CART");
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    placeOrder({ commit, state }, customerForm) {
      return ApiService.placeOrder({
        cart: state.cart,
        customerForm: customerForm,
      }).then(() => {
        commit("EMPTY_CART");
      });
    },
  },
});
