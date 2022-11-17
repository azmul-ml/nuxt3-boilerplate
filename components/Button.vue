<template>
  <NuxtLink v-if="to" tag="a" :to="to" :class="`${defaultStyle} ${defineStyle} ${defineSize}`">
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a v-else-if="href" :class="`${defaultStyle} ${defineStyle} ${defineSize}`" :href="href" @click="onClick">
    <slot>{{ text }}</slot>
  </a>
  <button
    v-else
    :disabled="disabled"
    :type="buttonProps.type"
    :class="`${defaultStyle} ${defineStyle} ${defineSize}`"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script lang="ts" setup>
interface ButtonPropsType {
  text?: string;
  type: "button" | "submit" | "reset" | undefined;
  to?: any;
  href?: string;
  size?: string;
  variant?: string;
  disabled?: boolean;
}
const buttonProps = withDefaults(defineProps<ButtonPropsType>(), {
  text: "",
  type: "button",
  to: "",
  href: "",
  size: "",
  variant: "",
  disabled: false,
});
const defaultStyle = `btn`;
const styles = reactive<{
  [key: string]: string;
}>({});
const sizes = reactive<{
  [key: string]: string;
}>({
  lg: "",
  md: "",
  sm: "",
  xs: "",
});
const defineStyle = computed(() => (buttonProps.type in styles ? styles[buttonProps.type] : styles.primary));
const defineSize = computed(() => sizes[buttonProps.size] || sizes.lg);
const onClick = (event: MouseEvent) => {
  const router = useRouter();
  if (buttonProps.to) {
    router.push(buttonProps.to);
  }
  if (!buttonProps.href) {
    event.preventDefault();
  }
};
</script>
