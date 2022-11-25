<script setup lang="ts"></script>
<template>
  <figure class="book-list">
    <img src="~/assets/images/elon.jpeg" />
    <div class="des">
      <h3>Elon Mask</h3>
      <p>Ashlee Vance</p>
      <div v-for="i in 3" :key="i" class="icons">
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="progress mt-2">
        <div
          class="progress-bar w-75"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </figure>
  <figure class="book-list">
    <img src="~/assets/images/tools.jpeg" />
    <div class="des">
      <h3>Tools of Titans</h3>
      <p>Team Feriss</p>
      <div v-for="i in 4" :key="i" class="icons">
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="progress mt-2">
        <div
          class="progress-bar w-75"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </figure>
  <figure class="book-list">
    <img src="~/assets/images/jen.jpeg" />
    <div class="des">
      <h3>You are a badass</h3>
      <p>Jen Sincero</p>
      <div v-for="i in 2" :key="i" class="icons">
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="progress mt-2">
        <div
          class="progress-bar w-75"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </figure>
</template>
<style lang="scss" scoped>
.book-list {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding: 15px 0;

  &:last-child {
    border: none;
  }

  img {
    width: 120px;
    height: 180px;
    border-radius: 15px;
    margin-right: 15px;
  }
  .des {
    line-height: 15px;
    width: 60%;

    .icons {
      display: contents;
    }
  }
}
</style>
