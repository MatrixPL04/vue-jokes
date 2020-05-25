<template>
  <div class="menu">
    <transition name="fade">
      <div v-if="!stateMenu" @click="stateMenu = true" class="button">
        <i class="fas fa-bars"></i>
      </div>
    </transition>
    <transition name="bounce">
      <div v-if="stateMenu" @mouseleave="stateMenu = false" class="content">
        <router-link to="/" tag="div" class="home" exact>
          <i class="fas fa-home"></i>
        </router-link>
        <router-link to="/favourite" tag="div" class="favourite">
          <i class="fas fa-star"></i>
        </router-link>
        <router-link to="/about" tag="div" class="about">
          <i class="fas fa-paragraph"></i>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stateMenu: false
    };
  },
  methods: {
    toggleMenu() {}
  }
};
</script>

<style lang="scss" scoped>
$circleSize: 450px;
$shadow: 0 0 5px 0
  rgba(
    $color: #000000,
    $alpha: 0.8
  );

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0.7s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.menu {
  position: fixed;
  bottom: 0;
  left: 0;

  i {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: #{$circleSize/14};
    color: rgba($color: #000, $alpha: 0.7);
  }

  .button {
    border-radius: 100%;
    width: 75px;
    height: 75px;
    background: #fff;
    position: absolute;
    bottom: 25px;
    left: 25px;
    box-shadow: $shadow;
    cursor: pointer;
  }
  .content {
    width: $circleSize;
    height: $circleSize;
    background: #fff;
    border-radius: 100%;
    position: absolute;
    bottom: #{$circleSize / -2};
    left: #{$circleSize / -2};
    box-shadow: $shadow;
    padding-left: #{$circleSize / 2};
    padding-bottom: #{$circleSize / 2};

    div {
      width: #{$circleSize / 8};
      height: #{$circleSize / 8};
      background: #ffd;
      box-shadow: $shadow;
      border-radius: 100%;
      cursor: pointer;

      &:hover {
        background: #ff6;
      }
    }

    .router-link-active {
      background: #ff9;
    }

    .home {
      position: absolute;
      top: #{$circleSize / 18};
      right: #{$circleSize / 3};
    }
    .about {
      position: absolute;
      top: #{$circleSize / 3};
      right: #{$circleSize / 18};
    }
    .favourite {
      position: absolute;
      top: #{$circleSize / 6};
      right: #{$circleSize / 6};
    }
  }
}
</style>