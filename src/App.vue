<template>
  <div class="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/menu.vue';

export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>