<template>
  <div
    class="
      bg-white
      h-16
      w-full
      fixed
      bottom-0
      border-t-1 border-gray-200
      select-none
    "
  >
    <div class="flex h-16">
      <div class="hover:bg-gray-50 flex-grow flex justify-center items-center">
        <small class="bg-green-100 px-6 py-2 rounded-full text-green-600">
          <img
            src="@/assets/book-outline.svg"
            alt=""
            class="w-4 inline-block mr-2"
          />
          Read</small
        >
      </div>
      <div class="hover:bg-gray-50 flex-grow flex justify-center items-center">
        <img src="@/assets/heart.svg" alt="" class="w-5" />
      </div>
      <div class="hover:bg-gray-50 flex-grow flex justify-center items-center">
        <img src="@/assets/search.svg" alt="" class="w-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomnavbar",
};
</script>
