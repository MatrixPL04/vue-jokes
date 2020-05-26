<template>
  <div class="about">
    <app-header title="About vueJoke" subTitle="Description and information about this page."></app-header>
    <card>
      <div slot="title">Title</div>
      <div></div>
      <div slot="footer"></div>
    </card>
  </div>
</template>

<script>
import card from "@/components/card.vue";
import appHeader from "@/components/header.vue";

export default {
  components: {
    card,
    appHeader
  }
};
</script>