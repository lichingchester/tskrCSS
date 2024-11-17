import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tskrCSS",
  description: "A tasukaru template for all responsive re-usable layouts.",

  base: "/tskrCSS/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Collections", link: "/collections/1" },
      { text: "0.1.2", link: "#" },
    ],

    sidebar: [
      {
        text: "Collections",
        items: [{ text: "No. 1", link: "/collections/1" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lichingchester/tskrCSS" },
      { icon: "twitter", link: "https://x.com/lichingchester" },
      {
        icon: "instagram",
        link: "https://www.instagram.com/lichingchester/profilecard/?igsh=dDZnZzRlbHB3aXp6",
      },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/lichingchester/tskrCSS/blob/main/LICENSE">MIT License.</a>',
      copyright:
        'Copyright © 2024-present <a href="https://github.com/lichingchester">lichingchester</a>',
    },

    search: {
      provider: "local",
    },
  },
});
