module.exports = {
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      plugins: [require("windicss/plugin/filters")],
    },
  },
  pwa: {
    name: "Pocket Quran", // <---- this is PWA name
  },
};
