import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        defaultSectorCounter: 0,
        indicatorCounter: [0,0],
        sectorCounter: null,
        activeRegion:null,
        activeRegionBg:""
    }
});

export default store;