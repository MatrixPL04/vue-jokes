import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

let API_URL = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,sexist"

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    Jokes() {
      Vue.http.get(`${API_URL}`)
        .then(res => this.state.jokes = res.body)
    }
  },
  modules: {
  }
})
