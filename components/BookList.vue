<script setup lang="ts">
import { StarFilled } from "@ant-design/icons-vue";
</script>
<template>
  <div class="book-list">
    <img src="~/assets/images/elon.jpeg" />
    <div class="des">
      <h3>Elon Mask</h3>
      <p>Ashlee Vance</p>
      <star-filled />
      <star-filled />
      <star-filled />
      <a-progress :percent="30" />
    </div>
  </div>
  <div class="book-list">
    <img src="~/assets/images/tools.jpeg" />
    <div class="des">
      <h3>Tools of Titans</h3>
      <p>Team Feriss</p>
      <star-filled />
      <star-filled />
      <star-filled />
      <a-progress :percent="70" />
    </div>
  </div>
  <div class="book-list">
    <img src="~/assets/images/jen.jpeg" />
    <div class="des">
      <h3>You are a badass</h3>
      <p>Jen Sincero</p>
      <star-filled />
      <star-filled />
      <a-progress :percent="45" />
    </div>
  </div>
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
  }
}
</style>
