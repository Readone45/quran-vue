<template>
  <div class="min-w-full min-h-screen bg-gray-100 flex">
    <Sidebar />
    <div class="main max-h-screen overflow-hidden flex-grow">
      <div v-if="pageMenu === 'Home'">
        <Navbar />
        <main class="px-4 pt-2 md:pt-6 container mx-auto">
          <div class="flex md:space-x-4 w-full h-full">
            <div
              class="w-2/11 max-h-screen overflow-y-auto pb-32 hidden md:block"
            >
              <ul class="surah flex flex-col space-y-4 px-1">
                <li v-for="item in listSurah" :key="item.number">
                  <button
                    :class="[
                      'surah__list w-full focus:outline-none',
                      item.number === selectedSurah ? 'active' : '',
                    ]"
                    @click="btnSurah(item.number)"
                  >
                    <div class="surah--title flex space-x-4">
                      <div class="surah--label">{{ item.number }}</div>
                      <div class="surah--trans text-left">
                        <h3 class="font-bold text-sm">
                          {{ item.name.transliteration.id }}
                        </h3>
                        <h3 class="text-gray-400 text-sm">
                          {{ item.name.translation.id }}
                        </h3>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-7/11 max-h-screen overflow-y-auto pb-52">
              <transition name="fade">
                <ul v-if="isLoading" class="ayat flex flex-col space-y-4">
                  <li>
                    <div class="w-full">
                      <img
                        src="@/assets/loading.svg"
                        alt="loading"
                        class="w-14 mx-auto"
                      />
                    </div>
                  </li>
                </ul>
                <ul
                  v-else
                  class="ayat flex flex-col space-y-4 duration-300 ease-in-out"
                >
                  <li v-if="selectedSurahData.preBismillah" class="ayat__list">
                    <div class="flex justify-between">
                      <label class="text-green-500"></label>
                      <h3 dir="rtl" class="text-2xl text-right digital">
                        {{ selectedSurahData.preBismillah.text.arab }}
                      </h3>
                    </div>
                    <p class="text-left text-sm my-4">
                      {{ selectedSurahData.preBismillah.translation.id }}
                    </p>
                    <hr class="my-2" />
                    <div class="float-left"></div>
                  </li>
                  <li
                    v-for="ayah in selectedSurahData.verses"
                    :key="ayah.number"
                    class="ayat__list"
                  >
                    <div class="flex justify-between">
                      <label class="text-green-500 mr-4 font-bold">{{
                        selectedSurah + ":" + ayah.number.inSurah
                      }}</label>
                      <h3
                        dir="rtl"
                        class="text-2xl text-right digital leading-14"
                      >
                        {{ ayah.text.arab }}
                      </h3>
                    </div>
                    <div class="text-left text-xs mt-4 mb-2 uppercase">
                      <a href="" class="font-bold text-green-500 mr-1"
                        >Indonesia Sahih</a
                      >
                      |
                      <a href="" class="font-bold text-yellow-400 ml-1"
                        >SEE TAFSIR &rarr;</a
                      >
                    </div>
                    <p class="text-left text-sm mb-3 font-medium">
                      {{ ayah.translation.id }}
                    </p>
                    <hr class="my-3" />
                    <div class="float-left">
                      <a class="px-2 py-1 rounded-sm">
                        <img
                          src="@/assets/favorite-outline.svg"
                          class="mr-1 w-4 inline-block"
                        />
                      </a>
                      <a class="px-2 py-1 rounded-sm">
                        <img
                          src="@/assets/share-outline.svg"
                          class="mr-1 w-4 inline-block"
                        />
                      </a>
                      <a class="px-2 py-1 rounded-sm">
                        <img
                          src="@/assets/play-outline.svg"
                          class="mr-1 w-4 inline-block"
                        />
                      </a>
                      <a class="px-2 py-1 rounded-sm">
                        <img
                          src="@/assets/link-open-outline.svg"
                          class="mr-1 w-4 inline-block"
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </transition>
            </div>
            <div class="w-2/11 max-h-screen mb-16 pb-16 hidden md:block">
              <div class="bg-white h-full rounded-lg p-4 text-left">
                <h3 class="mb-4">Settings</h3>
                <div>
                  <h3
                    class="text-sm font-bold flex justify-between items-center"
                  >
                    <div>
                      <img
                        src="@/assets/book-outline-black.svg"
                        class="mr-1 w-4 inline-block"
                      />
                      Reading Settings
                    </div>
                    <div>
                      <img
                        src="@/assets/angle-down-sm.svg"
                        class="mr-1 w-4 inline-block transform rotate-180"
                      />
                    </div>
                  </h3>
                  <ul class="mt-4 text-xs">
                    <li class="mb-4">
                      <div>
                        <label
                          class="block text-green-500 uppercase font-bold mb-1"
                          >Language</label
                        >
                        <select
                          name="lang"
                          id="lang"
                          class="
                            h-10
                            w-full
                            uppercase
                            font-bold
                            border-2 border-gray-200
                            px-2
                            rounded-md
                          "
                        >
                          <option value="id">Indonesia</option>
                        </select>
                      </div>
                    </li>
                    <li class="mb-4">
                      <div>
                        <label
                          class="block text-green-500 uppercase font-bold mb-1"
                          >Translation</label
                        >
                        <select
                          name="lang"
                          id="lang"
                          class="
                            h-10
                            w-full
                            uppercase
                            font-bold
                            border-2 border-gray-200
                            px-2
                            rounded-md
                          "
                        >
                          <option value="id">Indonesia</option>
                        </select>
                      </div>
                    </li>
                  </ul>

                  <h3
                    class="
                      text-sm
                      font-bold
                      flex
                      justify-between
                      items-center
                      mb-4
                    "
                  >
                    <div>
                      <img
                        src="@/assets/abc.svg"
                        class="mr-1 w-4 inline-block"
                      />
                      Font Settings
                    </div>
                    <div>
                      <img
                        src="@/assets/angle-down-sm.svg"
                        class="mr-1 w-4 inline-block"
                      />
                    </div>
                  </h3>

                  <h3
                    class="text-sm font-bold flex justify-between items-center"
                  >
                    <div>
                      <img
                        src="@/assets/headphone.svg"
                        class="mr-1 w-4 inline-block"
                      />
                      Audio Settings
                    </div>
                    <div>
                      <img
                        src="@/assets/angle-down-sm.svg"
                        class="mr-1 w-4 inline-block"
                      />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div v-else-if="pageMenu === 'Search'">
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
            <div class="bg-white w-full">
              <input
                type="text"
                class="w-full px-2 py-2"
                placeholder="Search Surah"
              />
            </div>
          </div>
        </nav>
        <main class="px-4 pt-2 md:pt-6 container mx-auto">
          <div class="flex md:space-x-4 w-full h-full">
            <div class="w-full max-h-screen overflow-y-auto pb-32">
              <div></div>
              <ul class="surah flex flex-col space-y-4 px-1">
                <li v-for="item in listSurah" :key="item.number">
                  <button
                    :class="[
                      'surah__list w-full focus:outline-none',
                      item.number === selectedSurah ? 'active' : '',
                    ]"
                    @click="btnSurah(item.number)"
                  >
                    <div class="surah--title flex space-x-4">
                      <div class="surah--label">{{ item.number }}</div>
                      <div class="surah--trans text-left">
                        <h3 class="font-bold text-sm">
                          {{ item.name.transliteration.id }}
                        </h3>
                        <h3 class="text-gray-400 text-sm">
                          {{ item.name.translation.id }}
                        </h3>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
  <BottomNavbar @changePage="menu" />
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import BottomNavbar from "../components/BottomNavbar.vue";

export default {
  components: { Sidebar, Navbar, BottomNavbar },
  name: "Home",
  data() {
    return {
      listSurah: [],
      selectedSurah: 1,
      selectedSurahData: [],
      pageMenu: "Home",
      isLoading: false,
    };
  },
  async mounted() {
    await this.getAllSurah();
    await this.getSurah();
  },
  methods: {
    getAllSurah() {
      fetch("https://api.quran.sutanlab.id/surah")
        .then((response) => response.json())
        .then((result) => {
          this.listSurah = result.data;
        });
    },
    async getSurah() {
      await fetch("https://api.quran.sutanlab.id/surah/" + this.selectedSurah)
        .then((response) => response.json())
        .then((result) => {
          this.selectedSurahData = result.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        });
    },
    btnSurah(no) {
      this.isLoading = true;
      this.selectedSurah = no;
      this.getSurah();
    },
    menu(menu) {
      this.pageMenu = menu;
    },
  },
};
</script>

<style lang="postcss" scoped>
.sidebar {
  @apply w-14 h-screen bg-white;
}

.navbar {
  @apply h-14 w-full bg-white;
}

.surah__list {
  @apply bg-white rounded-md p-4;
}

.surah--label {
  @apply bg-green-500 w-auto p-2 flex items-center justify-center h-5 text-white rounded-full text-sm;
}

.ayat__list {
  @apply bg-white p-4 rounded-md;
}

.active {
  @apply border-2 border-green-500;
}

/* width */
::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all cubic-bezier(1, 0.5, 0.8, 1) 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
