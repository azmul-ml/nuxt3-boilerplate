<script setup lang="ts">
const slides = [
  "https://picsum.photos/id/230/600/300",
  "https://picsum.photos/id/231/600/300",
  "https://picsum.photos/id/232/600/300",
  "https://picsum.photos/id/233/600/300",
  "https://picsum.photos/id/234/600/300",
  "https://picsum.photos/id/235/600/300",
  "https://picsum.photos/id/236/600/300",
];

const direction = ref("left");
const visibleSlide = ref(0);
const next = () => {
  if (visibleSlide.value >= slides.length - 1) {
    visibleSlide.value = 0;
  } else {
    visibleSlide.value++;
  }
  direction.value = "left";
};

const prev = () => {
  if (visibleSlide.value <= 0) {
    visibleSlide.value = slides.length - 1;
  } else {
    visibleSlide.value--;
  }
  direction.value = "right";
};
</script>
<template>
  <div class="app">
    <div class="carousel">
      <div v-for="(slide, index) in slides" :key="slide" class="carousel-slider">
        <transition :name="direction" mode="in-out">
          <div v-show="visibleSlide === index">
            <img :src="slide" :alt="slide" />
          </div>
        </transition>
      </div>
      <button class="btn btn-next" @click="next"><i class="fa fa-angle-right"></i></button>
      <button class="btn btn-prev" @click="prev"><i class="fa fa-angle-left"></i></button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app {
  display: flex;
  justify-content: center;
}
.left-enter-active {
  animation: slide-left-in 0.3s ease-in;
}
.left-leave-active {
  animation: slide-left-out 0.3s ease-in;
}
@keyframes slide-left-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slide-left-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
}

.right-enter-active {
  animation: slide-right-in 0.3s ease-in;
}
.right-leave-active {
  animation: slide-right-out 0.3s ease-in;
}
@keyframes slide-right-out {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes slide-right-in {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 250px;
}
.btn {
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid transparent;
  margin: 5px 10px;
  color: #fff;
  height: 50px;
  width: 50px;
  position: absolute;
  margin-top: -25px;
  z-index: 2;
}
.btn:hover {
  cursor: pointer;
}
.btn:focus {
  outline: none;
}
.btn-next {
  top: 45%;
  right: 0;
  z-index: 0;
}
.btn-prev {
  top: 45%;
  left: 0;
  z-index: 0;
}
.carousel-slider {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-slider img {
  width: 100%;
  height: 100%;
}
</style>
