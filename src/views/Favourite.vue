<template>
  <div class="about">
    <app-header title="Your Favoutite" subTitle="All the jokes you like will appear here."></app-header>
    <div class="jokes">
      <div class="joke" v-for="joke in jokes" :key="joke.id">
        <card>
          <div slot="title">ID: {{joke.id}}</div>
          <div class="body">
            <div class="content">
              <div v-if="joke.type == 'twopart'">
                {{joke.setup}}
                <div class="result">{{joke.delivery}}</div>
              </div>
              <div v-else>{{joke.joke}}</div>
            </div>
          </div>
          <div slot="footer"></div>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import appHeader from "@/components/header.vue";

let API_URL = require("../config.json")["API_URL"];

export default {
  data() {
    return {
      jokes: []
    };
  },
  created() {
    if (!this.$cookies.isKey("favourite")) {
      this.$cookies.set("favourite", "");
    } else {
      let jokesId = this.$cookies.get("favourite").split(",");
      for (let i of jokesId) {
        this.$http
          .get(`${API_URL}&idRange=${parseInt(i)}`)
          .then(res => this.jokes.push(res.body));
      }
    }
  },
  components: {
    card,
    appHeader
  }
};
</script>

<style lang="scss" scoped>
.jokes {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .joke {
    flex-grow: 1;
    width: 33%;
    max-width: 33%;
    padding: 10px;

    .content {
      padding: 15px;
      width: 100%;
      height: 120px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .result {
        margin-top: 1rem;
      }
    }
  }
}
</style>