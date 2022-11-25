<script setup lang="ts">
const props = defineProps({
  book: { type: Object, required: true },
});
</script>
<template>
  <figure class="book-list">
    <img :src="props.book.image" />
    <div class="des">
      <h3>{{ props.book.name }}</h3>
      <p>{{ props.book.description }}</p>
      <div v-for="i in props.book.icon" :key="i" class="icons">
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
