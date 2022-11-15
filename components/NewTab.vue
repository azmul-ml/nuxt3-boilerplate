<script setup lang="ts"></script>
<template>
  <div>
    <img src="~/assets/images/readingBookIllustration.jpeg" />
    <h1>Start your Journey with Books</h1>
    <h2>Let's get you Started</h2>
    <button class="subscribe-btn">Subscribe Now $99</button>
    <p>Or</p>
    <button class="later-btn">Maybe Later</button>
  </div>
</template>
<style lang="scss" scoped>
div {
  text-align: center;
}
img {
  width: 100%;
  border-radius: 35px;
}
h1,
h2,
p {
  font-weight: bold;
  line-height: 22px;
}
h2,
p {
  color: gray;
}
.subscribe-btn {
  border: none;
  background-color: #015efc;
  color: white;
  padding: 10px 40px;
  border-radius: 19px;
  margin: 10px 0;
}
.later-btn {
  border: none;
  background-color: #f3efef;
  color: #015efc;
  padding: 10px 40px;
  border-radius: 19px;
}
</style>
