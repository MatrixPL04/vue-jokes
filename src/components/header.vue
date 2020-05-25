<template>
  <div class="header">
    <h1>{{ title }}</h1>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: relative;
  user-select: none;
  margin-bottom: 1rem;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  &:before {
    content: '';
    position: relative;
    font-size: 5rem;
    top: -3px;
    border-left: .45rem solid #e47b58;
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    color: transparent;
    position: absolute;
    top: 0rem;
    left: calc(.45rem + 25px);
    font-weight: 700;
    -webkit-text-stroke: 2px black;
  }

  p {
    color: #000;
    font-size: 1rem;
    margin: 0;
    position: absolute;
    bottom: 1.5rem;
    left: calc(.45rem + 25px);
    white-space: nowrap;
    font-weight: 500;
  }
}
</style>