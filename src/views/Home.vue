<template>
  <div class="home">
    <app-header title="Welcome to vueJokes!" subTitle="Draw a joke if you want!"></app-header>
    <card>
      <div slot="title">Random Joke</div>
      <div class="joke">
        <div v-if="Joke != null && Joke.error != true">
          <div class="info">
            <ul>
              <li>ID: {{Joke.id}}</li>
              <li>
                Type:
                <span v-if="Joke.type == 'twopart'">Compound</span>
                <span v-else>Single</span>
              </li>
              <li>Category: {{Joke.category}}</li>
              <li>
                <a @click="getJoke()" href="#">Next Joke</a>
              </li>
            </ul>
          </div>
          <div class="content">
            <div v-if="Joke.type == 'twopart'">
              {{Joke.setup}}
              {{Joke.delivery}}
            </div>
            <div v-else>{{Joke.joke}}</div>
          </div>
          <div class="rating">
            <button @click="getJoke()">
              <i class="fas fa-thumbs-down"></i>
              Dislike
            </button>
            <button @click="likeIt()">
              <i class="fas fa-thumbs-up"></i>
              Like
            </button>
          </div>
        </div>
        <div v-else-if="Joke != null && Joke.error == true">
          <p>Something went wrong!</p>
        </div>
        <div v-else>Loading...</div>
      </div>
      <div slot="footer">
        All jokes come from this
        <a href="https://sv443.net/jokeapi/v2/joke/Any" target="blank">API</a>
      </div>
    </card>
  </div>
</template>

<script>
import Vue from "vue";

import card from "@/components/card.vue";
import appHeader from "@/components/header.vue";

export default {
  created() {
    this.getJoke();
  },
  methods: {
    getJoke() {
      this.$store.dispatch("Joke");
    },
    likeIt() {
      alert("You like it!");
    }
  },
  computed: {
    Joke() {
      return this.$store.state.joke;
    }
  },
  components: {
    card,
    appHeader
  }
};
</script>

<style lang="scss" scoped>
.joke {
  width: 100%;
  text-align: center;

  .info {
    display: inline;
    position: relative;

    &::after {
      content: "";
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      width: 400px;
      border-top: 1px solid #ccc;
    }

    ul {
      list-style-type: none;
      display: inline-block;
      padding: 0;

      li {
        float: left;

        a {
          color: #000;
          text-decoration: none;

          &:hover {
            color: #555;
            text-decoration: underline;
          }
        }

        &:nth-child(1) {
          &::before {
            content: "";
            margin-right: 0;
          }
        }

        &::before {
          content: "•";
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
  }
  .content {
    padding: 25px;
    width: 100%;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      width: 400px;
      border-top: 1px solid #ccc;
    }
  }
  .rating {
    width: 100%;
    margin-top: 5px;
    position: relative;

    button {
      font-size: 1.3rem;
      margin: 10px;
      margin-bottom: 5px;
      cursor: pointer;
      user-select: none;
      transition: all 0.25s ease-in-out;

      &:nth-child(1) {
        color: rgba(255, 82, 82, 1);
        background: rgba(255, 138, 128, 0.3);
        border-color: rgba(255, 82, 82, 1);
        border: 1px solid rgba(255, 82, 82, 1);

        &:hover {
          background: rgba(255, 138, 128, 0.5);
        }
      }

      &:nth-child(2) {
        color: rgba(0, 150, 136, 1);
        background: rgba(38, 166, 154, 0.3);
        border-color: rgba(0, 150, 136, 1);
        border: 1px solid rgba(0, 150, 136, 1);

        &:hover {
          background: rgba(38, 166, 154, 0.5);
        }
      }
    }
  }
}
</style>