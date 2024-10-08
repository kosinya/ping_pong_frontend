import Vuex from "vuex";
import {tournamentList} from "./modules/tournament.js";
import {league} from "./modules/laegues.js";


export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        tournamentList: tournamentList,
        league: league,
    }
})
