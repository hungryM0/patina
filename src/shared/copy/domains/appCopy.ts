const ZH_CN_APP_COPY = {
  app: {
    loadingView: "正在加载界面...",
    mappingUpdated: "应用映射已更新。",
    historyDeleted: "应用历史已删除。",
    unsavedConfirmTitle: "保存未保存修改",
    unsavedConfirmBody: "当前页面有未保存更改。保存后将自动切换到目标页面。",
    unsavedConfirmSave: "保存",
  },
};

const EN_US_APP_COPY = {
  app: {
    loadingView: "Loading view...",
    mappingUpdated: "App settings updated.",
    historyDeleted: "App history deleted.",
    unsavedConfirmTitle: "Save changes",
    unsavedConfirmBody: "This page has unsaved changes. Save before switching pages.",
    unsavedConfirmSave: "Save",
  },
};

export const appCopy = {
  "zh-CN": ZH_CN_APP_COPY,
  "en-US": EN_US_APP_COPY,
} as const;
