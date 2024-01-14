const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'c4cydonia',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    image_light: '/avatar-left.svg',
    role: "Software engineer",
    bio: "Software engineer.",
    email: "ovatleyva@gmail.com",
    linkedin: "gustavo-leyva-b9493846",
    github: "gusleyva",
    instagram: "",
  },
  projects: [
    {
      name: `c4cydonia`,
      href: "https://github.com/gusleyva/c4cydonia-vercel-blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "c4cydonia",
    description: "Welcome to c4cydonia!",
    theme: 'light', // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://c4cydonia-vercel-blog.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion','Java', 'java', 'Software', 'Engineer', 'Development', 'Programming'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    revalidationToken: process.env.TOKEN_FOR_REVALIDATE,
    // if you prefer not to make your database public, use this!!!
    // accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
