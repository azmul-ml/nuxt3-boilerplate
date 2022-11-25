<template>
  <div class="navbar">
    <i class="bi bi-house-door-fill"></i>
    <i class="bi bi-clock-fill"></i>
    <i class="bi bi-person-badge-fill"></i>
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

  i {
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
