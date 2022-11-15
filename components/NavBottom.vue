<script setup lang="ts">
import {
  HomeFilled,
  ClockCircleFilled,
  IdcardFilled,
} from "@ant-design/icons-vue";
</script>
<template>
  <div class="navbar">
    <home-filled />
    <clock-circle-filled />
    <idcard-filled />
  </div>
</template>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
  font-size: 25px;
  background: white;
  border-top: 1px solid lightgray;

  span {
    color: gray;

    &:hover {
      color: #005dfd;
    }
    &:active {
      color: #005dfd;
    }
  }
}
</style>
