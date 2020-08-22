require("./bootstrap");

window.Vue = require("vue");

import Vuex from "vuex";
Vue.use(Vuex);

import StoreVueX from "./store/index";

const store = new Vuex.Store(StoreVueX);

Vue.component("main-app", require("./components/MainApp.vue").default);

import filter from "./filter";

const app = new Vue({
    el: "#app",
    store
});
