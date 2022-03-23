import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        activeRegionId:null,
        defaultSectorCounter: 0,
        indicatorCounter: [0,0],
        sectorCounter: null,
        activeRegion:null,
        activeRegionObj:null,

    }
});

export default store;
