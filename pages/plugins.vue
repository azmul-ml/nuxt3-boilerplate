<script lang="ts" setup>
const increasedSize = ref(false);

const increase = () => {
  increasedSize.value = !increasedSize.value;
};
</script>
<template>
  <div>
    <p v-font-size.red>{{ $formattedDate(new Date()) }}</p>
    <p v-font-size:small.red>text with small font size</p>
    <p v-font-size="20">text with font size 20</p>
    <p v-font-size:large>text with large font size</p>
    <input v-focus placeholder="focused input" />
    <br />
    <Button v-if="!increasedSize" @click="increase">Increase size</Button>
  </div>
</template>
