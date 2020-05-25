<template>
  <div class="home">
    <h1>Home</h1>
    <card>
      <div slot="title">Title</div>
      <div>
        Joke
      </div>
      <div slot="footer">Footer</div>
    </card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import card from '../components/card.vue'

export default {
  components: {
    card
  }
}
</script>