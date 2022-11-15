export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      el.focus();
    },
  });
  nuxtApp.vueApp.directive("font-size", {
    created: (el, binding) => {
      if (binding.value) {
        el.style.fontSize = binding.value + "px";
      } else {
        let size;
        switch (binding.arg) {
          case "small":
            size = 10;
            break;
          case "large":
            size = 32;
            break;
          default:
            size = 16;
            break;
        }
        el.style.fontSize = size + "px";
      }
      if (binding.modifiers.red) {
        el.style.color = "#ff0000";
      }
    },
    updated: (el) => {
      el.style.fontSize = 30 + "px";
    },
  });
  return {
    provide: {
      formattedDate: (d: Date) =>
        d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes(),
    },
  };
});
