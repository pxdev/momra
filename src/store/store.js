import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        counter: 0,
        activeSectorIndex:0,
    }
});

export default store;