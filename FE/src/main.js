/*!

=========================================================
 * Vue Paper Dashboard - v2.0.0
=========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

=========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store";

//import VueSweetalert2 from "vue-sweetalert2";
import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

//Vue.use(VueSweetalert2);
Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
