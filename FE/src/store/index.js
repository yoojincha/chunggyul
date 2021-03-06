import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import customerStore from "@/store/modules/customerStore.js";
import productStore from "@/store/modules/productStore.js";

const store = new Vuex.Store({
  modules: {
    customerStore,
    productStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});

export default store;
