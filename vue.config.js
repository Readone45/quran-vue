module.exports = {
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
  pwa: {
    name: "Pocket Quran", // <---- this is PWA name
    msTileColor: "#000000",
    iconPaths: {
      msTileImage: "img/icons/mstile-150x150.png",
    },
  },
};
