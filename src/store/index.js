import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

let API_URL = require("../config.json")["API_URL"]

export default new Vuex.Store({
  state: {
    joke: null
  },
  mutations: {
    Joke(state, data) {
      state.joke = data
    }
  },
  actions: {
    Joke(id) {
      if (isNaN(id)) {
        Vue.http.get(`${API_URL}`)
          .then(res => this.commit("Joke", res.body))
      } else {
        Vue.http.get(`${API_URL}&idRange=${id}`)
          .then(res => this.commit("Joke", res.body))
      }
    }
  }
})
