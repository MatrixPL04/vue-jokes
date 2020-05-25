<template>
  <div class="about">
    <app-header title="Your Favoutite" subTitle="All the jokes you like will appear here."></app-header>
  </div>
</template>

<script>
import Vue from "vue";

import card from "@/components/card.vue";
import appHeader from "@/components/header.vue";

export default {
  components: {
    card,
    appHeader
  }
};
</script>