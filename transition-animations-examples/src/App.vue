<template>
  <div id="app" class="container">
    <div class="row mt-3">
      <div class="col-md-12">

        <button class="btn btn-primary mb-3" @click="isShow = !isShow">
          Göster / Gizle
        </button>

        <transition name="fade" appear>
            <div class="alert alert-info" v-if="isShow">
              Bu bir mesajdır
            </div>
        </transition>

        <hr />

        <transition name="slide" appear type="animation">
          <div class="alert alert-success" v-show="isShow">
            Bu bir mesajdır
          </div>
        </transition>

        <hr>

        <transition
          :css="false"
          enter-class=""
          enter-active-class="animate__animated animate__fadeIn"
          leave-class=""
          leave-active-class="animate__animated animate__fadeOut"
        >
          <div class="alert alert-warning" v-show="isShow">
            Bu bir mesajdır
          </div>
        </transition>

        <hr>
        <button class="btn btn-primary mb-3" @click="addNumber">
          Add new number
        </button>
        <br>
        <ul>
          <transition-group name="slide">
          <li v-for="(number, index) in numberList" :key="index"
              class="list-group-item"
            @click="removeItem(index)"
          >
            {{ number }}
          </li>
          </transition-group>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      isShow: true,
      numberList: [],
    }
  },
  methods: {
    addNumber() {
      const pos = Math.floor(Math.random() * this.numberList.length);
      this.numberList.splice(pos, 0, this.numberList.length + 1);
    },
    removeItem(index) {
      this.numberList.splice(index, 1);
    }
  },
}
</script>

<style>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
      opacity: 1;
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }


  .slide-enter {
  }
  .slide-enter-active {
    animation: slide-in 1s ease-in;
  }
  .slide-leave {
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0px);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-20px);
    }
  }
</style>
