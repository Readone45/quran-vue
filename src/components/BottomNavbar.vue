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
    <div class="flex h-16 px-4">
      <div
        class="flex-grow flex justify-center items-center"
        @click="moveMenu(1)"
      >
        <div class="relative w-4/5 px-4 py-2">
          <div
            style="z-index: -1"
            class="
              absolute
              h-full
              w-full
              top-0
              left-0
              transform
              animate-fade-in-right
              duration-300
            "
            :class="
              active === 1
                ? 'bg-green-100  rounded-full text-green-600 scale-x-100'
                : '-scale-x-1'
            "
          ></div>
          <img
            src="@/assets/book-outline-black.svg"
            alt="icon"
            :class="active === 1 ? 'w-4 inline-block mr-2' : 'w-5'"
          />
          <small :class="active === 1 ? '' : 'hidden'">Reading</small>
        </div>
      </div>
      <div
        class="flex-grow flex justify-center items-center"
        @click="moveMenu(2)"
      >
        <div class="relative w-4/5 px-4 py-2">
          <div
            style="z-index: -1"
            class="
              absolute
              h-full
              w-full
              top-0
              left-0
              transform
              animate-fade-in-right
              duration-300
            "
            :class="
              active === 2
                ? 'bg-green-100  rounded-full text-green-600 scale-x-100'
                : '-scale-x-1'
            "
          ></div>
          <img
            src="@/assets/heart.svg"
            alt="icon"
            :class="active === 2 ? 'w-4 inline-block mr-2' : 'w-5'"
          />
          <small :class="active === 2 ? '' : 'hidden'">Favorite</small>
        </div>
      </div>
      <div
        class="flex-grow flex justify-center items-center"
        @click="moveMenu(3)"
      >
        <div class="relative w-4/5 px-4 py-2">
          <div
            style="z-index: -1"
            class="
              absolute
              h-full
              w-full
              top-0
              left-0
              transform
              animate-fade-in-right
              duration-300
            "
            :class="
              active === 3
                ? 'bg-green-100  rounded-full text-green-600 scale-x-100'
                : '-scale-x-1'
            "
          ></div>
          <img
            src="@/assets/search.svg"
            alt="icon"
            :class="active === 3 ? 'w-4 inline-block mr-2' : 'w-5'"
          />
          <small :class="active === 3 ? '' : 'hidden'">Search</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomnavbar",
  data() {
    return {
      menu: [1, 2, 3],
      active: 1,
    };
  },
  methods: {
    moveMenu(key) {
      this.active = key;
    },
  },
};
</script>
