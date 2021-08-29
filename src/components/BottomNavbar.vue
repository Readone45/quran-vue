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
      <div
        class="hover:bg-gray-50 flex-grow flex justify-center items-center"
        @click="moveMenu(1)"
      >
        <div
          :class="
            active === 1
              ? 'bg-green-100 px-5 py-2 rounded-full text-green-600'
              : ''
          "
        >
          <img
            src="@/assets/book-outline.svg"
            alt="icon"
            :class="active === 1 ? 'w-4 inline-block mr-2' : 'w-5'"
          />
          <small :class="active === 1 ? '' : 'hidden'">Reading</small>
        </div>
      </div>
      <div
        class="hover:bg-gray-50 flex-grow flex justify-center items-center"
        @click="moveMenu(2)"
      >
        <div
          :class="
            active === 2
              ? 'bg-green-100 px-5 py-2 rounded-full text-green-600'
              : ''
          "
        >
          <img
            src="@/assets/heart.svg"
            alt="icon"
            :class="active === 2 ? 'w-4 inline-block mr-2' : 'w-5'"
          />
          <small :class="active === 2 ? '' : 'hidden'">Favorite</small>
        </div>
      </div>
      <div
        class="hover:bg-gray-50 flex-grow flex justify-center items-center"
        @click="moveMenu(3)"
      >
        <div
          :class="
            active === 3
              ? 'bg-green-100 px-5 py-2 rounded-full text-green-600'
              : ''
          "
        >
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
