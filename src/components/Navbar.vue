<template>
  <nav class="navbar">
    <div
      class="
        w-full
        h-full
        flex
        items-center
        px-4
        container
        mx-auto
        justify-between
      "
    >
      <div>
        <h3 class="font-bold text-xl">Pocket Quran</h3>
      </div>
      <div>
        <ul>
          <li class="font-bold">
            <div
              style="-webkit-tap-highlight-color: transparent"
              class="
                flex
                items-center
                space-x-2
                w-auto
                h-14
                px-2
                relative
                hover:bg-gray-50 hover:cursor-pointer
                group
              "
            >
              <img
                src="@/assets/avatar.png"
                alt=""
                class="w-9 h-9 flex-grow-0"
              />
              <span class="text-sm">Ade Ridwan</span>

              <ul
                class="
                  select-none
                  absolute
                  hidden
                  group-hover:block
                  w-36
                  h-auto
                  bg-white
                  rounded-md
                  shadow
                  top-14
                  z-40
                  right-0
                  p-2
                  text-sm
                "
              >
                <li class="hover:bg-gray-50 p-2">Menu 1</li>
                <li class="hover:bg-gray-50 p-2">Logout</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>
