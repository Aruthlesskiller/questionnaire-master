module.exports = {
  title: "didichuxing - 更好的调查问卷系统",
  tagline: "更强大的调查问卷系统, 后端完全开源。",
  url: "https://xiaojukeji.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "xiaojukeji.com",
  projectName: "xiaojukeji",
  plugins: [
    "docusaurus-tailwindcss-loader",
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: [
          "../src/index.ts",
          // '../src/core/index.tsx',
          // '../src/models/index.ts',
          // '../src/collection/index.tsx',
          // '../src/contexts/index.tsx',
          // '../src/form/index.tsx',b
          // '../src/preview/index.ts',
          // '../src/side_dialog/index.ts',
          // '../src/hooks/index.tsx',
        ],
        tsconfig: "../tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "new_version_rc.2",
      content:
        '版本 v1.6.0 已发布! 🎉 点击 <a target="_blank" rel="noopener noreferrer" href="/docs/quickstart">quickstart</a> 开始吧! ',
      backgroundColor: "#FF5B79",
      textColor: "black",
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "卷王",
      logo: {
        alt: "SurveyKing Logo",
        src: "img/surveyking.svg",
      },
      items: [
        {
          to: "docs",
          activeBaseRegex: "docs(/)?$",
          label: "文档",
          position: "left",
        },
        {
          to: "blog",
          label: "博客",
          position: "left",
        },
        {
          to: "https://docs.qq.com/sheet/DEVveUVMSHpVZkJw?",
          label: "功能对比",
          className:
            "btn mr-2 px-6 py-2 text-white font-bold uppercase bg-red-600 hover:text-white hover:bg-red-700",
          "aria-label": "Open the demo project",
          position: "right",
        },
        // {
        //   to: "https://www.didiglobal.com/",
        //   label: "演示",
        //   className:
        //     "btn mr-2 px-6 py-2 text-white font-bold uppercase bg-blue-600 hover:text-white hover:bg-blue-700",
        //   "aria-label": "Open the demo project",
        //   position: "right",
        // },
        {
          href: "https://www.didiglobal.com/",
          // label: 'GitHub',
          className: "mr-2 header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
        {
          href: "https://www.didiglobal.com/",
          // label: 'Gitee',
          className: "mr-2 header-gitee-link",
          "aria-label": "Gitee repository",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "联系我",
          items: [
            {
              label: "Contact",
              href: "mailto: sunjinhan@didiglobal.com",
            },
          ],
        },

        {
          // Label of the section of these links
          title: "链接",
          items: [
            {
              label: "文档",
              to: "docs/",
            },
            {
              label: "演示",
              to: "https://xiaojukeji.com/",
            },
            {
              label: 京ICP备2022025098号-1",
              to: "https://beian.miit.gov.cn/",
            },
          ],
        },
      ],
      copyright: `MIT © ${new Date().getFullYear()} - SurveyKing`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/vsDark"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // blog: false,
        blog: {
          showReadingTime: true,
          // editUrl:
          //     'https://www.didiglobal.com/'
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        gtag: {
          trackingID: "G-D4DQQCW88S",
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://www.didichuxing.com/",
      async: true,
    },
  ],
};
