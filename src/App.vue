<template>
  <div class="app">
    <Menu></Menu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>

<style lang="scss" scoped>
.container {
  min-width: 1000px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
</style>