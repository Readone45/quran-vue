<template>
  <div class="sidebar flex-grow-0 hidden md:block">
    <div class="w-full h-full flex flex-col items-center">
      <div
        class="w-14 h-14 mx-auto bg-green-600 flex items-center justify-center"
      >
        <Icon />
      </div>
      <div class="p-1 mb-2 mt-6">
        <img src="@/assets/book-outline.svg" alt="" class="w-full" />
      </div>
      <div class="p-1.5 mx-3">
        <img src="@/assets/heart.svg" alt="" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon.vue";
export default {
  name: "sidebar",
  components: { Icon },
};
</script>
