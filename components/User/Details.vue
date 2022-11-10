<script setup>
const props = defineProps({
  users: { type: Object, required: true },
});
</script>

<template>
  <div>
    <a-list item-layout="horizontal" :data-source="props.users">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <NuxtLink :to="`/user/${item.id}`" class="dmsans-regular">
                {{ item.first_name }} {{ item.last_name }}
              </NuxtLink>
            </template>
            <template #avatar>
              <a-avatar :src="item.avatar" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<style lang="scss" scoped>
@import "styles";
</style>
