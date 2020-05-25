<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="body">
      <slot></slot>
    </div>
    <div class="footer" v-if="hasFooterSlot">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  background: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  $borderColor: #ddd;

  .title {
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
    border-bottom: 1px solid $borderColor;
    user-select: none;
  }
  .body {
    font-weight: 400;
    padding: 0.5rem;
    overflow-y: auto;
  }
  .footer {
    font-weight: 200;
    border-top: 1px solid $borderColor;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    user-select: none;
    padding-top: 0.5rem;
  }
}
</style>