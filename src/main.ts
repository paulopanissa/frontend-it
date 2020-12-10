import Vue from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";
import api from "./services/api";
import VueCookies from "vue-cookies-ts";

Vue.use(VueCookies);

Vue.config.productionTip = false;
// add axios in $api
Vue.prototype.$api = api;

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
