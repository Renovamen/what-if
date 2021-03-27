const path = require("path");

// Theme API.
module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;

  // resolve algolia
  const isAlgoliaSearch =
    themeConfig.algolia ||
    Object.keys((siteConfig.locales && themeConfig.locales) || {}).some(
      (base) => themeConfig.locales[base].algolia
    );

  const enableSmoothScroll = themeConfig.smoothScroll === true;

  return {
    alias() {
      return {
        "@AlgoliaSearchBox": isAlgoliaSearch
          ? path.resolve(__dirname, "components/AlgoliaSearchBox.vue")
          : path.resolve(__dirname, "noopModule.js")
      };
    },

    plugins: [
      ["@vuepress/active-header-links", options.activeHeaderLinks],
      "@vuepress/search",
      "@vuepress/plugin-nprogress",
      [
        "@vuepress/plugin-blog",
        {
          permalink: "/:regular",
          directories: [
            {
              id: "snippets",
              dirname: "snippets",
              path: "/snippets/",
              itemPermalink: "/snippets/:year/:month/:day/:slug",
              layout: "PostIndex",
              // itemLayout: 'Post',
              pagination: {
                lengthPerPage: 100
              }
            }
          ]
        }
      ],
      [
        "container",
        {
          type: "tip",
          defaultTitle: {
            "/": "TIP",
            "/zh/": "提示"
          }
        }
      ],
      [
        "container",
        {
          type: "warning",
          defaultTitle: {
            "/": "WARNING",
            "/zh/": "注意"
          }
        }
      ],
      [
        "container",
        {
          type: "danger",
          defaultTitle: {
            "/": "WARNING",
            "/zh/": "警告"
          }
        }
      ],
      [
        "container",
        {
          type: "details",
          before: (info) =>
            `<details class="custom-block details">${
              info ? `<summary>${info}</summary>` : ""
            }\n`,
          after: () => "</details>\n"
        }
      ],
      ["smooth-scroll", enableSmoothScroll],
      "@renovamen/vuepress-plugin-katex"
    ],

    chainMarkdown(config) {
      const { PLUGINS } = require("@vuepress/markdown");
      const originalLinkPlugin = require("@vuepress/markdown/lib/link.js");

      config.plugins.delete(PLUGINS.CONVERT_ROUTER_LINK);

      const linkPlugin = function (md) {
        const result = originalLinkPlugin.apply(this, arguments);
        const close = md.renderer.rules.link_close;
        md.renderer.rules.link_close = function () {
          return close.apply(this, arguments).replace("<OutboundLink/>", "");
        };
        return result;
      };

      config.plugin(PLUGINS.CONVERT_ROUTER_LINK).use(linkPlugin, [
        {
          // The config.markdown.externalLinks options https://vuepress.vuejs.org/config/#markdown-externallinks
          target: "_blank",
          rel: "noopener noreferrer"
        }
      ]);
    }
  };
};
