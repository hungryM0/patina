const ZH_CN_ABOUT_COPY = {
  about: {
    title: "关于",
    subtitle: "版本、更新与支持入口",
    sectionTitle: "关于",
    appInfo: "应用信息",
    currentVersion: (version: string) => `当前版本：v${version}`,
    description: "本地优先的个人桌面时间追踪工具",
    supportDialog: {
      description: "如果 Patina 对你有帮助，可以选择一种方式支持持续维护。",
      wechatTitle: "微信赞赏码",
      wechatHint: "使用微信扫一扫赞赏。",
      wechatAlt: "微信赞赏码",
      kofiTitle: "Ko-fi",
      kofiHint: "通过 Ko-fi 打开赞助页面。",
      openKofi: "打开 Ko-fi",
    },
  },
};

const EN_US_ABOUT_COPY = {
  about: {
    title: "About",
    subtitle: "Version, updates, and support links",
    sectionTitle: "About",
    appInfo: "App info",
    currentVersion: (version: string) => `Current version: v${version}`,
    description: "A local-first personal desktop time tracker",
    supportDialog: {
      description: "If Patina helps you, choose a way to support ongoing maintenance.",
      wechatTitle: "WeChat reward code",
      wechatHint: "Scan with WeChat to send a reward.",
      wechatAlt: "WeChat reward code",
      kofiTitle: "Ko-fi",
      kofiHint: "Open the Ko-fi sponsor page.",
      openKofi: "Open Ko-fi",
    },
  },
};

export const aboutCopy = {
  "zh-CN": ZH_CN_ABOUT_COPY,
  "en-US": EN_US_ABOUT_COPY,
} as const;
